import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Загружаем переменные окружения из mail.env
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  const envContent = readFileSync(join(__dirname, 'mail.env'), 'utf8');
  const envVars = {};
  
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, value] = trimmed.split('=');
      if (key && value) {
        envVars[key.trim()] = value.trim();
      }
    }
  });
  
  // Устанавливаем переменные окружения
  Object.assign(process.env, envVars);
  console.log('✅ Переменные окружения загружены из mail.env');
} catch (error) {
  console.log('⚠️ Файл mail.env не найден, используем значения по умолчанию');
}

const app = express();

// CORS configuration
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'https://техметпром.рф'],
  credentials: true
}));

app.use(express.json());

// Serve static files from the root directory
// Static with caching for assets
app.use(express.static('.', {
  setHeaders: (res, path) => {
    // Cache immutable assets for 30 days
    if (/(?:\.(?:js|css|png|jpg|jpeg|webp|svg|gif|ico|mp4|webm|ogg|mp3|woff2?))$/i.test(path)) {
      res.setHeader('Cache-Control', 'public, max-age=2592000, immutable');
    } else {
      // HTML and others: short cache
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// Configure transporter using Timeweb SMTP server
const smtpPort = Number(process.env.SMTP_PORT || 465);
const isSecurePort = smtpPort === 465 || smtpPort === 995 || smtpPort === 993;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.timeweb.ru',
  port: smtpPort,
  secure: isSecurePort, // true для портов 465, 995, 993; false для 25, 2525, 110, 143
  auth: {
    user: process.env.SMTP_USER || 'EKB@техмепром.рф',
    pass: process.env.SMTP_PASS || 'j1chs2aEA',
  },
  // Настройки для Timeweb SMTP
  tls: {
    rejectUnauthorized: false,
    ciphers: 'SSLv3'
  },
  // Дополнительные настройки
  requireTLS: !isSecurePort, // true для STARTTLS портов
  secureConnection: isSecurePort
});

// Проверяем подключение к SMTP
transporter.verify(function(error, success) {
  if (error) {
    console.log('❌ Ошибка подключения к SMTP:', error.message);
  } else {
    console.log('✅ SMTP сервер готов к отправке писем');
  }
});

app.post('/api/send', async (req, res) => {
  console.log('📧 Получен POST запрос на /api/send');
  console.log('📧 Headers:', req.headers);
  console.log('📧 Body:', req.body);
  console.log('📧 Получена заявка:', { 
    name: req.body?.name, 
    phone: req.body?.phone, 
    service: req.body?.service,
    hasEmail: !!req.body?.email,
    hasComment: !!req.body?.comment
  });

  try {
    const { name, phone, email, service, comment } = req.body || {};
    
    // Валидация обязательных полей
    if (!name || !phone || !service) {
      console.log('❌ Валидация не пройдена:', { name: !!name, phone: !!phone, service: !!service });
      return res.status(400).json({ 
        ok: false, 
        error: 'required_fields_missing',
        message: 'Пожалуйста, заполните все обязательные поля'
      });
    }

    // Форматирование услуги
    const serviceLabels = {
      'production': 'Производство',
      'pcb-service': 'PCB и сервис',
      'engineering': 'Инжиниринг',
      'consultation': 'Консультация',
      'other': 'Другое'
    };

    const serviceName = serviceLabels[service] || service;

    // Создание HTML письма
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1565c0;">Новая заявка с сайта ТМП</h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0e4a7b; margin-top: 0;">Контактная информация:</h3>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
          <p><strong>Услуга:</strong> ${serviceName}</p>
        </div>
        
        ${comment ? `
        <div style="background: #eaf6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0e4a7b; margin-top: 0;">Сообщение:</h3>
          <p style="white-space: pre-wrap;">${comment}</p>
        </div>
        ` : ''}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e1e8f0; color: #64748b; font-size: 14px;">
          <p>Заявка отправлена с сайта <a href="https://техметпром.рф" style="color: #1565c0;">техметпром.рф</a></p>
          <p>Время отправки: ${new Date().toLocaleString('ru-RU')}</p>
        </div>
      </div>
    `;

    // Текстовое письмо для совместимости
    const textContent = `
Новая заявка с сайта ТМП

Контактная информация:
Имя: ${name}
Телефон: ${phone}
${email ? `Email: ${email}` : ''}
Услуга: ${serviceName}

${comment ? `Сообщение:\n${comment}` : ''}

Отправлено с сайта техметпром.рф
Время отправки: ${new Date().toLocaleString('ru-RU')}
    `;

    console.log('📤 Отправляем письмо...', {
      from: `${process.env.SMTP_USER || 'TMP@техмепром.рф'}`,
      to: 'alexei.kravchenko.2016@gmail.com',
      subject: `Заявка с сайта ТМП - ${serviceName}`,
      smtpHost: process.env.SMTP_HOST,
      smtpPort: process.env.SMTP_PORT
    });

    await transporter.sendMail({
      from: `Сайт ТМП <${process.env.SMTP_USER || 'TMP@техмепром.рф'}>`,
      to: 'alexei.kravchenko.2016@gmail.com',
      replyTo: email ? email : undefined,
      subject: `Заявка с сайта ТМП - ${serviceName}`,
      text: textContent,
      html: htmlContent,
    });

    console.log('✅ Письмо успешно отправлено');
    res.json({ ok: true, message: 'Заявка успешно отправлена' });
  } catch (e) {
    console.error('Ошибка отправки письма:', e);
    res.status(500).json({ 
      ok: false, 
      error: 'send_failed',
      message: 'Ошибка отправки. Попробуйте позже.'
    });
  }
});

// Handle 404 for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ 
    ok: false, 
    error: 'not_found',
    message: 'API endpoint not found'
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

const port = Number(process.env.PORT || 5174);
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`)); 