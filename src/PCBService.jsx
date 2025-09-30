import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Stern from './Stern';
import ScrollAnimation from './components/ScrollAnimation';
import LazyImage from './components/LazyImage';
import VideoPlayer from './components/VideoPlayer';
import { FaMicrochip, FaTools, FaCog, FaWrench, FaArrowLeft, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import './PCBService.css';
import './PCBService.mobile.css';

// Импортируем существующие изображения и видео
import heroBg from './assets/bg1_optimized.webp';
import video4 from './assets/optimized/PCB1_optimized.mp4';
import video5 from './assets/optimized/PCB2_optimized.mp4';
import heroVideo from './assets/optimized/ТМП департамент электроники_optimized.mp4';
import pcb1 from './assets/PCB1_optimized.webp';
import pcb2 from './assets/PCB2_optimized.webp';
import pcb3 from './assets/PCB3.webp';
import pcb4 from './assets/PCB4_optimized.webp';
import pcb5 from './assets/PCB5.webp';

const PCBService = () => {
  const navigate = useNavigate();

  const [openVideoId, setOpenVideoId] = useState(null);

  const pcbServices = [
    {
      icon: <FaMicrochip />,
      title: 'Проектирование PCB',
      desc: 'Создание схем и разводки печатных плат любой сложности с использованием современных CAD систем'
    },
    {
      icon: <FaTools />,
      title: 'Изготовление плат',
      desc: 'Производство однослойных и многослойных печатных плат с применением передовых технологий'
    },
    // Удалена услуга 'Монтаж компонентов'
    {
      icon: <FaWrench />,
      title: 'Ремонт и обслуживание',
      desc: 'Диагностика, ремонт и техническое обслуживание электронных плат и оборудования'
    }
  ];

  const repairProcess = [
    {
      step: '01',
      title: 'Диагностика',
      desc: 'Тщательный анализ неисправности с использованием современного диагностического оборудования'
    },
    {
      step: '02',
      title: 'Анализ схем',
      desc: 'Изучение технической документации и схем для точного определения проблемы'
    },
    {
      step: '03',
      title: 'Ремонт',
      desc: 'Выполнение ремонтных работ с заменой неисправных компонентов и восстановлением цепей'
    },
    {
      step: '04',
      title: 'Тестирование',
      desc: 'Комплексное тестирование отремонтированного оборудования для гарантии качества'
    }
  ];

  const pcbVideos = [
    { id: 1, src: video4, title: 'Процесс изготовления PCB', desc: 'От проектирования до готовой платы' },
    { id: 2, src: video5, title: 'Ремонт электронных плат', desc: 'Диагностика и восстановление компонентов' }
  ];

  const pcbGallery = [
    { src: pcb1, title: 'Проект 1', desc: 'Разъемы собственного производства', alt: 'PCB проект 1' },
    { src: pcb2, title: 'Проект 2', desc: 'Ремонт и обслуживание электронных плат', alt: 'PCB проект 2' },
    { src: pcb3, title: 'Проект 3', desc: 'Диагностика и ремонт электронных плат', alt: 'PCB проект 3' },
    { src: pcb4, title: 'Проект 4', desc: 'Диагностика и ремонт электронных плат', alt: 'PCB проект 4' },
    { src: pcb5, title: 'Проект 5', desc: 'Проверка напряжения и тока', alt: 'PCB проект 5' },
    { src: heroBg, title: 'Проект 6', desc: 'Диагностика и ремонт электронных плат', alt: 'PCB проект 6' }
  ];

  return (
    <>
      <Header showHeader={true} />
      
      {/* Hero секция */}
      <section className="pcb-hero">
        <div className="pcb-hero-bg">
          <VideoPlayer
            src={heroVideo}
            autoPlay={true}
            loop={true}
            muted={true}
            controls={false}
            playsInline={true}
            preload="auto"
            className="pcb-hero-video"
          />
          <div className="pcb-hero-overlay" />
        </div>
        <div className="pcb-hero-content">
          <h1>PCB и сервис</h1>
          <p>Проектирование, изготовление и обслуживание печатных плат для промышленных решений</p>
        </div>
      </section>

      {/* Основной контент */}
      <main className="pcb-main">
        {/* Услуги PCB */}
        <section className="pcb-services">
          <div className="container">
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <h2>Наши услуги</h2>
            </ScrollAnimation>
            <div className="services-grid">
              {pcbServices.map((service, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={0.3 + index * 0.1}>
                  <div className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Процесс ремонта */}
        <section className="repair-process">
          <div className="container">
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <h2>Процесс ремонта</h2>
            </ScrollAnimation>
            <div className="process-grid">
              {repairProcess.map((process, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={0.3 + index * 0.1}>
                  <div className="process-card">
                    <div className="process-step">{process.step}</div>
                    <h3>{process.title}</h3>
                    <p>{process.desc}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Видео галерея (только интро) */}
        <section className="pcb-videos">
          <div className="container">
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <h2>Наши процессы</h2>
            </ScrollAnimation>
            <div className="videos-grid">
              {pcbVideos.map((video, index) => (
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
                      className="pcb-video"
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

        {/* Преимущества */}
        <section className="pcb-advantages">
          <div className="container">
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <h2>Почему выбирают нас</h2>
            </ScrollAnimation>
            <div className="advantages-grid">
              <ScrollAnimation animation="fadeInLeft" delay={0.3}>
                <div className="advantage-card">
                  <FaCheckCircle className="advantage-icon" />
                  <h3>20+ лет опыта</h3>
                  <p>Богатый опыт в проектировании и ремонте электронных плат</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={0.4}>
                <div className="advantage-card">
                  <FaShieldAlt className="advantage-icon" />
                  <h3>Гарантия качества</h3>
                  <p>Все работы выполняются с гарантией и проходят строгий контроль</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInRight" delay={0.5}>
                <div className="advantage-card">
                  <FaTools className="advantage-icon" />
                  <h3>Современное оборудование</h3>
                  <p>Используем передовые технологии и диагностическое оборудование</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Фото галерея */}
        <section className="pcb-gallery">
          <div className="container">
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <h2>Примеры работ</h2>
            </ScrollAnimation>
            <div className="gallery-grid">
              {pcbGallery.map((item, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={0.3 + index * 0.1}>
                  <div className="gallery-item">
                    <LazyImage 
                      src={item.src} 
                      alt={item.alt}
                      className="gallery-image"
                    />
                    <div className="gallery-overlay">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
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

export default PCBService; 