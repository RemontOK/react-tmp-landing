import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Stern from './Stern';
import ScrollAnimation from './components/ScrollAnimation';
import LazyImage from './components/LazyImage';
import { FaArrowLeft, FaEnvelope, FaPhone, FaLinkedin, FaUserTie } from 'react-icons/fa';
import './Team.css';
import './Team.mobile.css';

// Импортируем существующие изображения
import heroBg from "./assets/superteam2_optimized.webp";
import sotr1 from "./assets/sotr1_optimized.webp";
import sotr2 from "./assets/sotr2_optimized.webp";
import sotr3 from "./assets/sotr3_optimized.webp";
import sotr4 from "./assets/sotr4_optimized.webp";
import sotr5 from "./assets/sotr5_optimized.webp";
import sotr6 from "./assets/sotr6_optimized.webp"; 
import sotr7 from "./assets/sotr7_optimized.webp";
import sotr8 from "./assets/sotr8_optimized.webp";
import sotr9 from "./assets/sotr9_optimized.webp";
const Team = () => {
  const navigate = useNavigate();

  // Разделяем команду на руководство и специалистов
  const leadership = [
    {
      id: 1,
      name: 'Бузмаков Юрий Алексеевич',
      position: 'Генеральный директор',
      email: '1@urrz.ru',
      phone: '+7 (9000) 419-419',
      photo: sotr1,
      description: '20+ лет опыта в управлении промышленными проектами. Эксперт в области морской электроники и автоматизации.'
    },
    {
      id: 2,
      name: 'Истомин Леонид Сергеевич',
      position: 'Технический директор',
      email: '1@urrz.ru',
      phone: '+7 (9000) 419-419',
      photo: sotr2,
      description: 'Специалист по проектированию электронных систем. Технический директор с опытом работы в ведущих НИИ.'
    }
  ];

  const specialists = [
    {
      id: 3,
      name: 'Григорий',
      position: 'Главный инженер',
      email: 'info@tmp.ru',
      phone: '+7 (9000) 419-419',
      photo: sotr3,
      description: 'Эксперт по PCB проектированию и ремонту электронного оборудования. Сертифицированный специалист по морской электронике.'
    },
    {
      id: 4,
      name: 'Михаил',
      position: 'Главный инженер',
      email: 'info@tmp.ru',
      phone: '+7 (9000) 419-419',
      photo: sotr4,
      description: 'Эксперт по PCB проектированию и ремонту электронного оборудования. Сертифицированный специалист по морской электронике.'
    },
    {
      id: 8,
      name: 'Денис',
      position: 'Руководитель подразделения инженерных электронных систем',
      email: 'info@tmp.ru',
      phone: '+7 (9000) 419-419',
      photo: sotr8,
      description: 'Опытный проект-менеджер с успешным опытом реализации сложных технических проектов.'
    },
    {
      id: 5,
      name: 'Даниил',
      position: 'Ведущий инженер-электронщик',
      email: 'info@tmp.ru',
      phone: '+7 (9000) 419-419',
      photo: sotr5,
      description: 'Специалист по ремонту и обслуживанию электронного оборудования. Эксперт по диагностике неисправностей.'
    },
    {
      id: 6,
      name: 'Денис',
      position: 'PCB инженер',
      email: 'info@tmp.ru',
      phone: '+7 (9000) 419-419',
      photo: sotr6,
      description: 'Опытный инженер с успешным опытом реализации сложных технических проектов.'
    },
    {
    id: 7,
    name: 'Александр',
    position: 'PCB инженер',
    email: 'info@tmp.ru',
    phone: '+7 (9000) 419-419',
    photo: sotr7,
    description: 'Опытный инженер с успешным опытом реализации сложных технических проектов.'
  },
  {
    id: 9,
    name: 'Никита',
    position: 'PCB инженер',
    email: 'info@tmp.ru',
    phone: '+7 (9000) 419-419',
    photo: sotr9,
    description: 'Опытный инженер с успешным опытом реализации сложных технических проектов.'
  }
];

  const teamStats = [
    { number: '20+', label: 'Лет опыта' },
    { number: '50+', label: 'Специалистов' },
    { number: '100+', label: 'Реализованных проектов' },
    { number: '24/7', label: 'Техподдержка' }
  ];

  return (
    <>
      <Header showHeader={true} />
      
      {/* Hero секция */}
      <section className="team-hero">
        <div className="team-hero-bg">
          <LazyImage src={heroBg} alt="Команда ТМП" />
          <div className="team-hero-overlay" />
        </div>
        <div className="team-hero-content">
          <h1>Наша команда</h1>
          <p>Профессионалы с многолетним опытом в области промышленной электроники и морской техники</p>
        </div>
      </section>

      {/* Основной контент */}
      <main className="team-main">
        {/* Статистика команды */}
        <section className="team-stats">
          <div className="container">
            <div className="stats-grid">
              {teamStats.map((stat, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={0.2 + index * 0.1}>
                  <div className="stat-card">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Руководство */}
        <section className="team-leadership">
          <div className="container">
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <h2>Руководство компании</h2>
              <p className="section-subtitle">Опытные руководители с многолетним опытом в промышленной электронике</p>
            </ScrollAnimation>
            <div className="leadership-grid">
              {leadership.map((member, index) => (
                <ScrollAnimation key={member.id} animation="fadeInUp" delay={0.3 + index * 0.1}>
                  <div className="leadership-card">
                    <div className="member-photo" style={{ backgroundImage: `url(${member.photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                      <LazyImage src={member.photo} alt={member.name} />
                      <div className="member-overlay">
                        <FaUserTie className="member-icon" />
                      </div>
                    </div>
                    <div className="member-info">
                      <h3>{member.name}</h3>
                      <p className="member-position">{member.position}</p>
                      <p className="member-description">{member.description}</p>
                      <div className="member-contacts">
                        <a href={`mailto:${member.email}`} className="contact-link">
                          <FaEnvelope />
                          <span>{member.email}</span>
                        </a>
                        <a href={`tel:${member.phone}`} className="contact-link">
                          <FaPhone />
                          <span>{member.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Специалисты */}
        <section className="team-members">
          <div className="container">
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <h2>Ключевые специалисты</h2>
              <p className="section-subtitle">Профессиональная команда инженеров и технических специалистов</p>
            </ScrollAnimation>
            <div className="members-grid">
              {specialists.map((member, index) => (
                <ScrollAnimation key={member.id} animation="fadeInUp" delay={0.3 + index * 0.1}>
                  <div className="member-card">
                    <div className="member-photo" style={{ backgroundImage: `url(${member.photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                      <LazyImage src={member.photo} alt={member.name} />
                      <div className="member-overlay">
                        <FaUserTie className="member-icon" />
                      </div>
                    </div>
                    <div className="member-info">
                      <h3>{member.name}</h3>
                      <p className="member-position">{member.position}</p>
                      <p className="member-description">{member.description}</p>
                      <div className="member-contacts">
                        <a href={`mailto:${member.email}`} className="contact-link">
                          <FaEnvelope />
                          <span>{member.email}</span>
                        </a>
                        <a href={`tel:${member.phone}`} className="contact-link">
                          <FaPhone />
                          <span>{member.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* О команде */}
        <section className="team-about">
          <div className="container">
            <div className="about-content">
              <ScrollAnimation animation="fadeInLeft" delay={0.2}>
                <div className="team-about-text">
                  <h2>О нашей команде</h2>
                  <p>
                    Наша команда состоит из высококвалифицированных специалистов с многолетним опытом работы 
                    в области промышленной электроники, морской техники и автоматизации. Мы гордимся тем, 
                    что каждый член нашей команды вносит свой вклад в создание инновационных решений для 
                    наших клиентов.
                  </p>
                  <p>
                    Мы постоянно совершенствуем свои навыки, следим за новейшими технологиями и 
                    стремимся к профессиональному росту. Это позволяет нам предлагать клиентам 
                    самые современные и эффективные решения.
                  </p>
                  <div className="team-about-cta">
                    <button className="btn-primary" onClick={() => {
                      const el = document.querySelector('.team-members');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}>Смотреть ключевых специалистов</button>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInRight" delay={0.3}>
                <div className="team-about-features">
                  <div className="team-feature-item">
                    <FaUserTie />
                    <div>
                      <h3>Профессионализм</h3>
                      <p>Высокий уровень квалификации всех специалистов</p>
                    </div>
                  </div>
                  <div className="team-feature-item">
                    <FaEnvelope />
                    <div>
                      <h3>Доступность</h3>
                      <p>Всегда на связи с клиентами и партнерами</p>
                    </div>
                  </div>
                  <div className="team-feature-item">
                    <FaPhone />
                    <div>
                      <h3>Поддержка</h3>
                      <p>Техническая поддержка 24/7</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>

      <Stern />
    </>
  );
};

export default Team; 