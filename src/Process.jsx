import React from 'react';
import './Process.css';
import { FaPhone, FaClipboardList, FaCogs, FaCheckCircle, FaHandshake, FaRocket } from 'react-icons/fa';

const processSteps = [
  {
    icon: <FaPhone />,
    number: '01',
    title: 'Консультация',
    desc: 'Бесплатная консультация и обсуждение ваших потребностей',
    details: ['Анализ требований', 'Техническое задание', 'Предварительная оценка']
  },
  {
    icon: <FaClipboardList />,
    number: '02',
    title: 'Проектирование',
    desc: 'Разработка технического решения и проектной документации',
    details: ['Техническое проектирование', 'Расчеты и чертежи', 'Подбор оборудования']
  },
  {
    icon: <FaCogs />,
    number: '03',
    title: 'Реализация',
    desc: 'Монтаж, наладка и ввод в эксплуатацию',
    details: ['Монтажные работы', 'Пусконаладка', 'Тестирование систем']
  },
  {
    icon: <FaCheckCircle />,
    number: '04',
    title: 'Контроль качества',
    desc: 'Проверка соответствия требованиям и стандартам',
    details: ['Внутренний контроль', 'Приемочные испытания', 'Документооборот']
  },
  {
    icon: <FaHandshake />,
    number: '05',
    title: 'Сдача проекта',
    desc: 'Передача объекта заказчику и обучение персонала',
    details: ['Демонстрация работы', 'Обучение персонала', 'Передача документации']
  },
  {
    icon: <FaRocket />,
    number: '06',
    title: 'Сопровождение',
    desc: 'Гарантийное и постгарантийное обслуживание',
    details: ['Техническая поддержка', 'Плановое обслуживание', 'Модернизация']
  }
];

const Process = () => {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <h2>Процесс работы</h2>
        <p className="process-subtitle">
          Четкий алгоритм работы от заявки до сдачи проекта в эксплуатацию
        </p>
        
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="step-connector">
                <div className="step-line"></div>
                {index < processSteps.length - 1 && <div className="step-arrow"></div>}
              </div>
              
              <div className="step-content">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                
                <div className="step-details">
                  <ul>
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="process-stats">
          <div className="stat-item">
            <div className="stat-number">14-30</div>
            <div className="stat-label">дней проектирование</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30-90</div>
            <div className="stat-label">дней реализация</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">гарантия качества</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process; 