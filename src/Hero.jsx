import React from 'react';
import './Hero.css';
import heroVideo from './assets/optimized/TMP_hero_optimized.mp4';
import heroVideoMobile from './assets/optimized/TMP_hero_mobile.mp4';

const Hero = () => {
  return (
    <section className="hero">
      {/* === Основной контент (видео) - всегда виден === */}
      <div className="hero-main-anim">
        {/* Fallback изображение - всегда видно */}
     
        
        {/* Видео поверх fallback */}
        <video
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={(e) => e.currentTarget.classList.add('loaded')}
        >
          <source src={heroVideoMobile} type="video/mp4" media="(max-width: 768px)" />
          <source src={heroVideo} type="video/mp4" media="(min-width: 769px)" />
        </video>
        
        {/* Затемнение поверх видео */}
        <div className="hero-overlay" />
        
        {/* Контент поверх видео */}

        <button className="hero-scroll-btn hero-scroll-btn-bottom" onClick={() => {
          const about = document.getElementById('about');
          if (about) about.scrollIntoView({ behavior: 'smooth' });
        }}>
          <span className="arrow-down"></span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
