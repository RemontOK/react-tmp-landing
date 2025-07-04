import React from 'react';
import './Services.css';

const services = [
  {
    icon: '🚢',
    title: 'Строительство и переоснащение судов',
  },
  {
    icon: '⚡',
    title: 'Электромонтажные работы',
  },
  {
    icon: '🔨',
    title: 'Инжиниринг и проектирование',
  },
];

const Services = () => (
  <section className="services-section">
    <div className="services-container">
      <h2>Услуги</h2>
      <div className="services-list">
        {services.map((service, idx) => (
          <div className="service-item" key={idx}>
            <span className="service-icon">{service.icon}</span>
            <span className="service-title">{service.title}</span>
          </div>
        ))}
      </div>
      <div className="services-image">
        <div className="services-img-placeholder">Фото моря</div>
      </div>
    </div>
  </section>
);

export default Services;
