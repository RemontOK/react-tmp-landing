import React, { useState, useRef, useEffect } from 'react';
import './project_1str.css';
import Header from './Header';
import Stern from './Stern';

const heroImages = [
  'project_1.png',
  'project_2.png',
  'project_3.png',
  'banner1.jpg',
  'banner2.jpg',
  'banner3.jpg',
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 600);
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="hero-slider-wrapper">
      <section className="hero-slider-section">
        <div className="hero-slider-bg">
          <img
            className={`hero-slider-img ${isTransitioning ? 'transitioning' : ''}`}
            src={heroImages[current]}
            alt={"Hero " + (current + 1)}
            draggable={false}
          />
          <div className="hero-slider-overlay" />
          <div className={`hero-slider-content ${isTransitioning ? 'transitioning' : ''}`}>
            <h1 className="hero-slider-title">Наши проекты</h1>
            <p className="hero-slider-desc">Все проекты — индивидуальные решения под задачи клиента. Вот лишь некоторые из них:</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const projects = [
  {
    id: 1,
    image: 'project_1.png',
    title: 'Зубчатая шестерня',
    shortDesc: 'Разработка и производство высокоточной зубчатой передачи для промышленного оборудования.',
    year: 2021,
    industry: 'Сейсморазведка',
    details: 'Проектирование и изготовление шестерён по индивидуальным параметрам: выбор материала, расчёт нагрузок, термообработка, контроль качества. Внедрение в механизмы приводов станков. Срок эксплуатации увеличен на 30%.'
  },
  {
    id: 2,
    image: 'project_2.png',
    title: 'Стопоры контроллера глубины',
    shortDesc: 'Стопоры для устройств контроля глубины.',
    year: 2022,
    industry: 'Cейсморазведка',
    details: 'Изготовление стопоров из высокопрочной стали для ограничения глубины погружения пневмоисточников. Обеспечение точного позиционирования на заданной глубине. Применение в морских сейсмических работах. Соблюдение допусков ±0.01 мм для надёжной работы в условиях высокого давления и агрессивной морской среды.',
  },
  {
    id: 3,
    image: 'project_3.png',
    title: 'Переходники для воздушных каналов линий пневмо источников',
    shortDesc: 'Соединительные элементы для пневматических линий, обеспечивающие герметичное соединение воздушных каналов.',
    year: 2021,
    industry: 'Пневмо источники',
    details: 'Изготовление переходников из нержавеющей стали AISI 316 для соединения воздушных каналов линий пневмоисточников. Обеспечение герметичности соединений при рабочем давлении до 20 МПа. Применение резьбовых и фланцевых соединений. Соблюдение допусков ±0.02 мм для обеспечения надёжной работы в экстремальных условиях.',
  },
  {
    id: 4,
    image: 'banner1.jpg',
    title: 'Высокоточный зубчатый венец',
    shortDesc: 'Кольцевая шестерня с прецизионными зубьями для передачи высоких нагрузок с минимальным люфтом.',
    year: 2020,
    industry: 'ВИЭ (ветроэнергетика)',
    details: 'Проектирование и изготовление зубчатых венцов диаметром до 2 метров с точностью зубьев до 6 степени. Использование высокопрочных сталей и термообработки. Применение в ветрогенераторах и промышленном оборудовании.'
  },
  {
    id: 5,
    image: 'banner2.jpg',
    title: 'Протектор сейсмической косы',
    shortDesc: 'Защитные элементы для сейсмических кос, предотвращающие механические повреждения.',
    year: 2021,
    industry: 'Сейсморазведка',
    details: 'Изготовление протекторов из износостойких материалов для защиты сейсмических кос от абразивного воздействия морского дна. Обеспечение целостности геофонов и кабельных соединений. Применение в морских сейсмических работах. Материалы: полиуретан, композитные сплавы. Снижение износа оборудования на 40%.'
  },
  {
    id: 6,
    image: 'banner3.jpg',
    title: 'Переходники JIC воздушных каналов линий пневмо источников',
    shortDesc: 'Соединительные элементы с JIC-резьбой для герметичного соединения воздушных каналов пневмоисточников.',
    year: 2022,
    industry: 'Пневмо источники',
    details: 'Изготовление переходников с JIC-резьбой (Joint Industry Council) для соединения воздушных каналов линий пневмоисточников. Обеспечение герметичности при рабочем давлении до 25 МПа. Применение в сейсмических работах на суше и море. Материалы: нержавеющая сталь AISI 316L, титановые сплавы. Соблюдение международных стандартов JIC для надёжности соединений.'
  },
];

// Документы для скроллера
const documents = [
  {
    id: 1,
    image: './patent.webp',
  },
];

const getCardsPerRow = () => {
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 900) return 2;
  return 3;
};

const Project1str = () => {
  const [openId, setOpenId] = useState(projects[0].id);
  const [cardsPerRow, setCardsPerRow] = useState(getCardsPerRow());
  
  // Состояние для скроллера документов
  const [currentDoc, setCurrentDoc] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isImageDisappearing, setIsImageDisappearing] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleResize = () => setCardsPerRow(getCardsPerRow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.projects1str-card');
    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(40px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.7s cubic-bezier(.23,1.01,.32,1), transform 0.7s cubic-bezier(.23,1.01,.32,1)';
        card.style.opacity = '1';
        card.style.transform = 'none';
      }, 200 + i * 120);
    });
  }, []);

  // Функции для скроллера документов
  const nextDocument = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentDoc((prev) => (prev + 1) % documents.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevDocument = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentDoc((prev) => (prev - 1 + documents.length) % documents.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleImageClick = () => {
    if (isImageDisappearing) return;
    
    setIsImageDisappearing(true);
    setTimeout(() => {
      setIsImageDisappearing(false);
    }, 800);
  };

  const handleImageError = () => {
    console.error('Ошибка загрузки изображения:', currentDocument.image);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log('Изображение успешно загружено:', currentDocument.image);
    setImageError(false);
  };

  const currentDocument = documents[currentDoc];

  // --- Группируем карточки по строкам ---
  const rows = [];
  for (let i = 0; i < projects.length; i += cardsPerRow) {
    rows.push(projects.slice(i, i + cardsPerRow));
  }

  return (
    <>
      <Header showHeader={true} />
      <HeroSlider />
      <section className="projects1str-section">
        <div className="projects1str-grid">
          {rows.map((row, rowIdx) => {
            // Проверяем, есть ли открытая карточка в этой строке
            const openProject = row.find(p => p.id === openId);
            return (
              <React.Fragment key={rowIdx}>
                {row.map((p) => (
                  <div className="projects1str-card" key={p.id}>
                    <div className="projects1str-img-wrap">
                      <img src={p.image} alt={p.title} className="projects1str-img" />
                    </div>
                    <h3 className="projects1str-card-title">{p.title}</h3>
                    <div className="projects1str-card-meta">
                      <span>{p.year}</span> • <span>{p.industry}</span>
                    </div>
                    <p className="projects1str-card-desc">{p.shortDesc}</p>
                    {openId === p.id ? (
                      <button className="projects1str-btn" onClick={() => setOpenId(null)}>
                        Скрыть
                      </button>
                    ) : (
                      <button className="projects1str-btn" onClick={() => setOpenId(p.id)}>
                        Подробнее
                      </button>
                    )}
                  </div>
                ))}
                {openProject && (
                  <div className="projects1str-details-wide">
                    <div className="projects1str-details-img">
                      <img src={openProject.image} alt={openProject.title} />
                    </div>
                    <div className="projects1str-details-text">
                      <h4>{openProject.title}</h4>
                      <p>{openProject.details}</p>
                      <button className="projects1str-btn" onClick={() => setOpenId(null)}>Скрыть</button>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
  </section>
      
      {/* Скроллер документов */}
      <section className="documents-slider-section">
        <div className="documents-slider-container">
          <h2 className="documents-slider-title">Документы</h2>
          <p className="documents-slider-subtitle">Наши патенты и сертификаты</p>
          
          <div className="documents-slider-wrapper">
            <button 
              className="documents-slider-btn documents-slider-btn-left"
              onClick={prevDocument}
              disabled={isTransitioning}
              aria-label="Предыдущий документ"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={`documents-slider-content ${isTransitioning ? 'transitioning' : ''}`}>
              <div className="documents-slider-image-container">
                {imageError ? (
                  <div className="documents-slider-fallback">
                    <div className="documents-fallback-icon">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p>Изображение не загружено</p>
                  </div>
                ) : (
                  <img 
                    src={currentDocument.image} 
                    alt="Документ"
                    className={`documents-slider-image ${isImageDisappearing ? 'disappearing' : ''}`}
                    onClick={handleImageClick}
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                    draggable={false}
                  />
                )}
                
                <div className="documents-slider-overlay">
                  <div className="documents-slider-info">
                    <button 
                      className="documents-slider-view-btn"
                      onClick={() => window.open(currentDocument.image, '_blank')}
                    >
                      Просмотреть документ
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button 
              className="documents-slider-btn documents-slider-btn-right"
              onClick={nextDocument}
              disabled={isTransitioning}
              aria-label="Следующий документ"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      <Stern />
    </>
  );
};

export default Project1str; 