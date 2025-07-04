import React from 'react';
import './About.css';

const About = () => (
  <section className="about-section">
    <div className="about-container">
      <h2>О компании</h2>
      <p><b>Техметпром</b> — Инженерная компания, занимающаяся производством и оснащением морской и промышленной техники.</p>
      <div className="about-features">
        <div className="about-feature">
          <span className="about-icon">🔧</span>
          <div>
            <div className="about-feature-title">20+ лет опыта</div>
          </div>
        </div>
        <div className="about-feature">
          <span className="about-icon">⚡</span>
          <div>
            <div className="about-feature-title">Электромонтажные работы</div>
          </div>
        </div>
        <div className="about-feature">
          <span className="about-icon">⚙️</span>
          <div>
            <div className="about-feature-title">Инжиниринг и проектирование</div>
          </div>
        </div>
      </div>
      <button className="about-btn">Подробнее о нас →</button>
    </div>
  </section>
);

export default About;
