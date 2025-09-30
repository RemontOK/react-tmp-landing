import React, { useState, useEffect } from 'react';
import './About.css';
import './About.mobile.css';
import { FaAward, FaBolt, FaCogs, FaShieldAlt, FaHandshake, FaCheckCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import video1 from './assets/optimized/video1_optimized.mp4';
import video2 from './assets/optimized/video2_optimized.mp4';
import video3 from './assets/optimized/video3_optimized.mp4';
import video4 from './assets/optimized/video4_optimized.mp4';
import video5 from './assets/optimized/video5_optimized.mp4';
import video6 from './assets/optimized/compressed_proizv_optimized.mp4';
import video7 from './assets/optimized/ВПБРН-2023_optimized.mp4';
import video8 from './assets/optimized/video8_optimized.mp4';
import video9 from './assets/optimized/video9_optimized.mp4';
import heroBg from "./assets/icon_btn1_optimized.webp";
import heroBg1 from "./assets/icon_btn2_optimized.webp";
import heroBg3 from "./assets/icon_btn3_optimized.webp";
import heroBg4 from "./assets/icon_btn4_optimized.webp";
import LazyImage from './components/LazyImage';
import ScrollAnimation from './components/ScrollAnimation';
import VideoPlayer from './components/VideoPlayer';
import Modal from './Modal';

// === Ценности компании ===
const values = [
  { icon: <FaCheckCircle />, title: 'Ответственность за результат', desc: 'Гарантируем выполнение обязательств и долгосрочное качество.' },
  { icon: <FaShieldAlt />, title: 'Безопасность и инновации', desc: 'Внедряем современные технологии и строго следим за стандартами.' },
  { icon: <FaHandshake />, title: 'Партнёрство и доверие', desc: 'Строим открытый диалог с каждым клиентом и партнёром.' },
];

// === Видео-галерея ===
const videoList = [
  { src: video1, alt: 'Производство ТМП1' },
  { src: video2, alt: 'Производство ТМП2' },
  { src: video3, alt: 'Производство ТМП3' },
  { src: video5, alt: 'Производство ТМП4' },
  { src: video6, alt: 'Производство ТМП4' },
  { src: video7, alt: 'Производство ТМП3' },
  { src: video8, alt: 'Производство ТМП3' },
  { src: video9, alt: 'Производство ТМП3' },


];

const About = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fade, setFade] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const navigate = useNavigate();

  const handleBlockClick = (blockType) => {
    if (blockType === 'projects') {
      navigate('/project');
    } else if (blockType === 'production') {
      navigate('/production');
    } else if (blockType === 'engineering') {
      navigate('/pcb-service');
    } else if (blockType === 'team') {
      navigate('/team');
    }
    // Прокручиваем страницу вверх
    window.scrollTo(0, 0);
  };

  // === Плавный fade-переход видео ===
  useEffect(() => {
    // Не устанавливаем fade в false сразу, чтобы избежать конфликта с onEnded
    const fadeTimeout = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(fadeTimeout);
  }, [currentVideo]);

  // === Автоматическое переключение видео только после окончания ===
  useEffect(() => {
    // Убираем автоматическое переключение - видео будет играть до конца
  }, [currentVideo]);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>О компании</h2>
        {/* === Галерея изображений === */}
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <div className="about-images">
            <ScrollAnimation animation="fadeInLeft" delay={0.3}>

              <button 
                className="about-img-frame clickable"
                onClick={() => handleBlockClick('production')}
                type="button"
                aria-label="Перейти к разделу Производство"
              >
                <LazyImage src={heroBg} alt="Производство ТМП" />
                <div className="about-img-caption">Производство</div>
              </button>

            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <button 
                className="about-img-frame clickable"
                onClick={() => handleBlockClick('engineering')}
                type="button"
                aria-label="Перейти к разделу Инжиниринг"
              >
                <LazyImage src={heroBg1} alt="Инжиниринг ТМП" />
                <div className="about-img-caption">PCB и сервис</div>
              </button>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInRight" delay={0.5}>
              <button 
                className="about-img-frame clickable"
                onClick={() => handleBlockClick('team')}
                type="button"
                aria-label="Перейти к разделу Команда"
              >
                <LazyImage src={heroBg3} alt="Команда ТМП" />
                <div className="about-img-caption">Команда</div>
              </button>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={0.6}>
              <button 
                className="about-img-frame clickable projects-block"
                onClick={() => handleBlockClick('projects')}
                type="button"
                aria-label="Перейти к проектам"
              >
                <LazyImage src={heroBg4} alt="Проекты ТМП" />

                <div className="about-img-caption">Проекты</div>
              </button>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" delay={0.7}>
          <p className="about-lead"><b>Техметпром</b> — ведущий российский интегратор и производитель решений для морской и промышленной отрасли. Мы ценим качество, безопасность и долгосрочное партнёрство.</p>
        </ScrollAnimation>
        {/* === Преимущества === */}
        <ScrollAnimation animation="fadeInUp" delay={0.8}>
          <div className="about-features">
            <div className="about-feature">
              <span className="about-icon"><FaAward /></span>
              <div>
                <div className="about-feature-title">20+ лет опыта</div>
                <div className="about-feature-desc">100+ реализованных проектов для судостроения и промышленности.</div>
              </div>
            </div>
            <div className="about-feature">
              <span className="about-icon"><FaBolt /></span>
              <div>
                <div className="about-feature-title">Электромонтаж и пусконаладка</div>
                <div className="about-feature-desc">Сертифицированные специалисты, современное оборудование, гарантия качества.</div>
              </div>
            </div>
            <div className="about-feature">
              <span className="about-icon"><FaCogs /></span>
              <div>
                <div className="about-feature-title">Инжиниринг и проектирование</div>
                <div className="about-feature-desc">Комплексные решения под ключ, BIM, цифровое моделирование, сопровождение.</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        {/* === Видео-галерея === */}
        <ScrollAnimation animation="fadeInUp" delay={1.2}>
          <div className="about-media-block">
            <div style={{width:'100%',maxWidth:900,margin:'0 auto',position:'relative',borderRadius:18,overflow:'hidden',boxShadow:'0 8px 40px 0 rgba(14,74,123,0.13)'}}>
              <VideoPlayer
                className="about-video"
                src={videoList[currentVideo].src}
                autoPlay={true}
                loop={false}
                muted={true}
                controls={false}
                playsInline={true}
                preload="auto"
                style={{
                  width:'100%',
                  height:'500px',
                  maxHeight:'70vw',
                  minHeight:180,
                  display:'block',
                  borderRadius:18,
                  objectFit:'cover',
                  opacity: fade ? 1 : 0,
                  transition: 'opacity 0.5s cubic-bezier(.4,0,.2,1)'
                }}
                key={currentVideo}
                onEnded={() => {
                  // Видео закончилось - переключаемся на следующее
                  console.log('Video ended, switching to next video');
                  setFade(false);
                  setTimeout(() => {
                    setCurrentVideo((v) => (v + 1) % videoList.length);
                    setFade(true);
                  }, 300);
                }}
                onError={(e) => {
                  console.log('Video error:', e);
                  setVideoError(true);
                  // Если видео не загрузилось, переключаемся на следующее
                  setFade(false);
                  setTimeout(() => {
                    setCurrentVideo((v) => (v + 1) % videoList.length);
                    setVideoError(false);
                    setFade(true);
                  }, 300);
                }}
                onLoadStart={() => {
                  // Видео начало загружаться
                }}
                onCanPlay={() => {
                  // Видео готово к воспроизведению
                }}
              />
            </div>
          </div>
        </ScrollAnimation>
        {/* === Мини-галерея видео === */}
          <div className="about-gallery-scroll" style={{marginTop:12}}>
          <div className="about-gallery-track">
              {videoList.map((v, i) => (
                <video
                  key={i}
                  src={v.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  style={{
                    height:60,
                    width:100,
                    objectFit:'cover',
                    borderRadius:10,
                    border: i===currentVideo ? '2.5px solid #1565c0' : '2px solid #eaf6ff',
                    boxShadow: i===currentVideo ? '0 2px 12px 0 #1565c033' : '0 2px 12px 0 rgba(14,74,123,0.10)',
                    cursor:'pointer',
                    opacity: i===currentVideo ? 1 : 0.7,
                    transition:'all 0.2s',
                    display:'block',
                    transform: i===currentVideo ? 'scale(1.08)' : 'scale(1)'
                  }}
                  onClick={() => {
                    setFade(false);
                    setTimeout(() => {
                      setCurrentVideo(i);
                      setFade(true);
                    }, 300);
                  }}
                  onError={(e) => {
                    console.log('Thumbnail video error:', e);
                  }}
                />
              ))}
            </div>
          </div>
        {/* === Ценности компании === */}
        <div className="about-values-block">
          <h3>Наши ценности</h3>
          <div className="about-values-list">
            {values.map((v, i) => (
              <div className="about-value" key={i}>
                <span className="about-value-icon">{v.icon}</span>
                <span className="about-value-title">{v.title}</span>
                <span className="about-value-desc">{v.desc}</span>
              </div>
            ))}
          </div>
        </div>
        {/* === Кнопка Подробнее === */}
        <button onClick={() => window.open('https://t.me/TEHMETPROM_tg', '_blank')} className="about-btn about-btn-solid">Подробнее о нас</button>
      </div>
      
      {/* Модальное окно для связи */}
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default About;
