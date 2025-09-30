import React from 'react';
import './Services.css';
import './Services.mobile.css';
import { FaProjectDiagram, FaBolt, FaTools, FaWrench, FaShip, FaIndustry } from 'react-icons/fa';
import ScrollAnimation from './components/ScrollAnimation';

// === Данные услуг ===
const services = [
  {
    icon: <FaProjectDiagram />, title: 'Проектирование и инжиниринг',
    desc: 'Разработка решений для морских и промышленных объектов, документация, расчёты, BIM.'
  },
  {
    icon: <FaBolt />, title: 'Электромонтажные работы',
    desc: 'Монтаж, наладка и обслуживание электрооборудования любой сложности.'
  },
  {
    icon: <FaTools />, title: 'Поставка оборудования',
    desc: 'Комплексные поставки, подбор и интеграция оборудования ведущих производителей.'
  },
  {
    icon: <FaWrench />, title: 'Сервисное обслуживание',
    desc: 'Гарантийный и постгарантийный сервис, аварийные выезды, модернизация.'
  },
  {
    icon: <FaShip />, title: 'Судостроение',
    desc: 'Комплексные решения для судостроительных предприятий, интеграция систем.'
  },
  {
    icon: <FaIndustry />, title: 'Промышленные объекты',
    desc: 'Автоматизация, модернизация и обслуживание промышленных производств.'
  },
];

const Services = () => (
  <section className="services-section" id="services">
    <div className="services-container">
      {/* === Заголовок === */}
      <ScrollAnimation animation="fadeInUp" delay={0.2}>
        <h2>Услуги</h2>
      </ScrollAnimation>
      {/* === Список услуг === */}
      <ScrollAnimation animation="fadeInUp" delay={0.3}>
        <div className="services-list">
          {services.map((s, i) => (
            <ScrollAnimation 
              key={i} 
              animation="scaleIn" 
              delay={0.4 + i * 0.1}
            >
              <div className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  </section>
);

export default Services;
