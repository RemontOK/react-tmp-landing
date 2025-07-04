import React, { useEffect, useRef } from 'react';
import './Hero.css';
import heroBg from './assets/hero_bg.png';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.backgroundPosition = `center ${scrollY * 0.4}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={heroRef} className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <nav className="hero-nav">
        <div className="hero-logo-block">
          <div className="hero-logo">ТМП</div>
          <div className="hero-logo-sub">ТЕХМЕТПРОМ</div>
        </div>
        <ul className="hero-menu">
          <li><a href="#about">О компании</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#projects">Проекты</a></li>
        </ul>
        <button className="hero-btn">Оставить заявку</button>
      </nav>
      <div className="hero-content">
        {/* ...existing content... */}
      </div>
      <div className="hero-more-wrapper">
        <button className="hero-more">Подробнее о нас →</button>
      </div>
    </header>
  );
};

export default Hero;
