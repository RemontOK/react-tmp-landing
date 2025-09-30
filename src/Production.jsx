import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Stern from './Stern';
import ScrollAnimation from './components/ScrollAnimation';
import LazyImage from './components/LazyImage';
import VideoPlayer from './components/VideoPlayer';
import { FaIndustry, FaCogs, FaTools, FaShip, FaArrowLeft, FaPlay, FaTimes } from 'react-icons/fa';
import './Production.css';
import './Production.mobile.css';

// Импортируем существующие изображения
import video1 from './assets/optimized/video5_gop0p5s_optimized.mp4';
import video2 from './assets/optimized/video2_optimized.mp4';
import video3 from './assets/optimized/video3_optimized.mp4';
import video4 from './assets/optimized/video4_optimized.mp4';
import prod1 from './assets/PROIZV1_optimized.webp';
import prod2 from './assets/PROIZV2_optimized.webp';
import prod3 from './assets/PROIZV3.webp';
import prod4 from './assets/PROIZV4_optimized.webp';
import prod5 from './assets/PROIZV5_optimized.webp';
import prod6 from './assets/PROIZV6_optimized.webp';

// Простой Hero блок с одним фоном
const ProductionHero = () => {
  return (
    <div className="production-hero-wrapper">
      <section className="production-hero-section">
        <div className="production-hero-bg">
          <VideoPlayer
            src={video1}
            autoPlay={true}
            loop={true}
            muted={true}
            controls={false}
            className="production-hero-bg-video allow-fade"
            playsInline={true}
            preload="auto"
            lazy={false}
            initialSeekSeconds={1.0}
            fadeIn={false}
          />
          <div className="production-hero-overlay" />
          <div className="production-hero-content">
            <h1 className="production-hero-title">Производство</h1>
            <p className="production-hero-desc">Современные производственные мощности для создания качественной продукции</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const Production = () => {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(0);
  // Убрали открытие видео: больше не нужен openVideoId / isDesktop

  useEffect(() => {
    // Preload hero video as early as possible
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = video1;
    link.type = 'video/mp4';
    document.head.appendChild(link);
    return () => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);

  const productionVideos = [
    { id: 1, src: video1, title: 'Электроэрозионная резка металла' },
    { id: 2, src: video2, title: 'Механическая обработка'},
    { id: 3, src: video3, title: 'Сварка трением' }
  ];

  const productionFeatures = [
    {
      icon: <FaIndustry />,
      title: 'Современное оборудование',
      desc: 'Используем передовые технологии и автоматизированные линии производства'
    },
    {
      icon: <FaCogs />,
      title: 'Контроль качества',
      desc: 'Многоуровневая система проверки на каждом этапе производства'
    },
    {
      icon: <FaTools />,
      title: 'Техническое обслуживание',
      desc: 'Регулярное обслуживание и модернизация производственных линий'
    },

  ];

  const productionGallery = [
    { src: prod1,  alt: 'Производство 1' },
    { src: prod2,  alt: 'Производство 2' },
    { src: prod3,  alt: 'Производство 3' },
    { src: prod4,  alt: 'Производство 4' },
    { src: prod5,  alt: 'Производство 5' },
    { src: prod6,  alt: 'Производство 6' },
  ];

  return (
    <>
      <Header showHeader={true} />
      
      {/* Hide page mask once hero video is loaded */}
      <script dangerouslySetInnerHTML={{__html: `
        (function(){ var m=document.getElementById('page-mask'); if(m) m.style.display='none'; })();
      `}} />

      {/* Hero секция со слайдером */}
      <ProductionHero />

      {/* Основной контент */}
      <main className="production-main">
        {/* Особенности производства */}
        <section className="production-features">
          <div className="container">
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <h2>Наши производственные возможности</h2>
            </ScrollAnimation>
            <div className="features-grid">
              {productionFeatures.map((feature, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={0.3 + index * 0.1}>
                  <div className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Видео галерея (только интро) */}
        <section className="production-videos">
          <div className="container">
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <h2>Производственные процессы</h2>
            </ScrollAnimation>
            <div className="videos-grid">
              {productionVideos.map((video, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={0.3 + index * 0.1}>
                  <div className="video-item">
                    <div className="video-card">
                    <VideoPlayer
                      src={video.src}
                      controls={false}
                      muted={true}
                      autoPlay={true}
                      loop={true}
                      playsInline={true}
                      preload="metadata"
                      lazy={false}
                      className="production-video"
                    />
                    <div className="video-info">
                      <h3>{video.title}</h3>
                      <p>{video.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Фото галерея */}
        <section className="production-gallery">
          <div className="container">
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <h2>Фотографии производства</h2>
            </ScrollAnimation>
            <div className="gallery-grid">
              {productionGallery.map((item, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={0.3 + index * 0.1}>
                  <div className="gallery-item">
                    <LazyImage 
                      src={item.src} 
                      alt={item.alt}
                      className="gallery-image"
                    />
                    <div className="gallery-overlay">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Stern />
    </>
  );
};

export default Production; 