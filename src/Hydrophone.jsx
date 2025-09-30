import React, { useEffect, useState } from 'react';
import Header from './Header';
import Stern from './Stern';
import SEOHead from './components/SEOHead';
import ScrollAnimation from './components/ScrollAnimation';
import LazyImage from './components/LazyImage';
import './Hydrophone.css';

const addProductStructuredData = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Гидрофон для морской сейсморазведки",
    "description": "Высокоточный сейсмический датчик для подводных исследований. Чувствительность 200 мВ/Па, глубина до 3000м, алюминиевый корпус.",
    "category": "Сейсмические датчики",
    "brand": {
      "@type": "Brand",
      "name": "ТЕХМЕТПРОМ"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "ТЕХМЕТПРОМ",
      "url": "https://техметпром.рф"
    },
    "image": [
      "/Gidrophone.jpg",
      "/project_1.png",
      "/project_2.png",
      "/project_3.png"
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "RUB",
      "availability": "https://schema.org/InStock",
      "url": typeof window !== 'undefined' ? window.location.href : undefined,
      "seller": {
        "@type": "Organization",
        "name": "ТЕХМЕТПРОМ"
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Частота",
        "value": "5-200 Гц"
      },
      {
        "@type": "PropertyValue", 
        "name": "Чувствительность",
        "value": "200 мВ/Па"
      },
      {
        "@type": "PropertyValue",
        "name": "Глубина",
        "value": "до 3000 м"
      },
      {
        "@type": "PropertyValue",
        "name": "Материал",
        "value": "Алюминий"
      }
    ]
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
  return () => { if (script.parentNode) script.parentNode.removeChild(script); };
};

const Hydrophone = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSpec, setCurrentSpec] = useState(0);

  const galleryImages = [
    { src: "/Gidrophone.jpg", alt: "Гидрофон фото", title: "Гидрофоны" },
    { src: "/project_1.png", alt: "Гидрофон фото 1", title: "Зубчатая шестерня" },
    { src: "/project_2.png", alt: "Гидрофон фото 2", title: "Стопоры контроллера глубины" },
    { src: "/project_3.png", alt: "Гидрофон фото 3", title: "Переходники для воздушных каналов линий пневмо источников" },
    { src: "/banner1.jpg", alt: "Гидрофон фото 4", title: "Высокоточный зубчатый венец" },
    { src: "/banner2.jpg", alt: "Гидрофон фото 5", title: "Протектор сейсмической косы" },
    { src: "/banner3.jpg", alt: "Гидрофон фото 6", title: "Переходники JIC воздушных каналов линий пневмо источников" }
  ];

  const specifications = [
    { label: "Частота", value: "5–200 Гц", icon: "📊" },
    { label: "Чувствительность", value: "200 мВ/Па", icon: "🎯" },
    { label: "Глубина", value: "до 3000 м", icon: "🌊" },
    { label: "Температура", value: "−20°C…+60°C", icon: "🌡️" },
    { label: "Материалы", value: "Алюминий", icon: "🔧" },
    { label: "Степень защиты", value: "IP68", icon: "🛡️" }
  ];

  useEffect(() => {
    // JSON-LD
    const cleanup = addProductStructuredData();
    // model-viewer (Web Component)
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.appendChild(script);

    // When model-viewer is ready, paint models black only (not background)
    const paintGray = (viewer) => {
      if (!viewer) return;
      const onLoad = () => {
        try {
          const materials = viewer?.model?.materials || [];
          materials.forEach((mat) => {
            const pbr = mat.pbrMetallicRoughness;
            if (pbr && pbr.setBaseColorFactor) {
              // средне-серый цвет
              pbr.setBaseColorFactor([0.3, 0.3, 0.3, 1]);
            }
            if (pbr) {
              if (pbr.setMetallicFactor) pbr.setMetallicFactor(0);
              if (pbr.setRoughnessFactor) pbr.setRoughnessFactor(0.8);
            }
          });
        } catch (e) {
          // ignore
        }
      };
      viewer.addEventListener('load', onLoad, { once: true });
    };

    const timer = setTimeout(() => {
      paintGray(document.getElementById('mv-hero'));
      paintGray(document.getElementById('mv-3d'));
    }, 300);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      if (typeof cleanup === 'function') cleanup();
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <SEOHead
        title="Гидрофон — сейсмический датчик | ТЕХМЕТПРОМ"
        description="Гидрофон для морской сейсморазведки: высокая чувствительность 200 мВ/Па, глубина до 3000м, алюминиевый корпус. Купить гидрофон для поиска нефти и газа."
        keywords="гидрофон, сейсмический датчик, подводная акустика, морская сейсморазведка, гидрофон купить, сейсмические датчики, подводный микрофон, геофизическое оборудование, поиск нефти, поиск газа, морская геофизика"
        url={typeof window !== 'undefined' ? window.location.href : undefined}
        image="/Gidrophone.jpg"
        type="product"
      />
      <Header showHeader={true} />
      <main className="hydro-section">
        <div className="hydro-container">
          {/* Hero */}
          <ScrollAnimation animation="fadeInUp" delay={0.1}>
            <section className="hydro-hero">
              <div className="hydro-hero-text">
                <span className="hydro-kicker">Сейсмические датчики</span>
                <h1>Гидрофон для морской сейсморазведки</h1>
                <p className="hydro-subtitle">Промышленный сейсмический датчик с высокой чувствительностью и надёжной работой в морской воде. Гидрофон подходит для поиска месторождений нефти и газа, мониторинга и геофизических исследований.</p>
                <ul className="hydro-benefits">
                  <li>Чувствительность 200 мВ/Па</li>
                  <li>Глубина до 3000 м</li>
                  <li>Алюминий</li>
                </ul>
                <div className="hydro-cta">
                  <a className="hydro-btn primary" href="#contact" onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new Event('openContactModal'));}}>Связаться с нами</a>
                  <a className="hydro-btn secondary" href="#specs" onClick={(e) => {e.preventDefault(); document.getElementById('specs')?.scrollIntoView({behavior:'smooth'});}}>Смотреть характеристики</a>
                </div>
              </div>
              <div className="hydro-hero-media">
                <div className="hydro-hero-image-container" style={{ background: '#e5e7eb' }}>
                  <LazyImage src="/Gidrophone.jpg" alt="Гидрофон" className="hydro-hero-image" />
                  <div className="hydro-hero-overlay"></div>
                </div>
              </div>
            </section>
          </ScrollAnimation>

          {/* Use cases */}
          <ScrollAnimation animation="fadeInUp" delay={0.3}>
            <section className="hydro-usage">
              <div className="hydro-usage-inner">
                <h2>Применение гидрофонов</h2>
                <div className="hydro-divider" />
                <p className="hydro-usage-lead">
                  Гидрофон — специализированный подводный микрофон для сейсмических исследований. Наши гидрофоны разработаны 
                  для морской сейсморазведки: точная регистрация отражённых волн, устойчивость 
                  к морской воде и удобная интеграция в сейсмические косы. Идеально подходит для поиска нефти и газа.
                </p>
                <ul className="hydro-usage-badges">
                  <li>Морская сейсморазведка</li>
                  <li>Подводный мониторинг</li>
                  <li>Измерение подводного шума</li>
                  <li>Биомониторинг</li>
                  <li>Учебные и научные проекты</li>
                </ul>
                <p className="hydro-usage-foot">
                  Высокая чувствительность гидрофона обеспечивает корректное измерение частоты и амплитуды 
                  подводных волн, что важно для идентификации источников и геофизической интерпретации. 
                  Наши сейсмические датчики используются в профессиональной морской геофизике.
                </p>
              </div>
            </section>
          </ScrollAnimation>

          {/* 3D Viewer + Info */}
          <ScrollAnimation animation="fadeInUp" delay={0.5}>
            <section className="hydro-3d hydro-card">
              <div className="hydro-3d-view">
                {/* Если загрузите public/hydrophone.glb, он отобразится */}
                <model-viewer
                  id="mv-3d"
                  src="/Untitled.glb"
                  alt="3D модель гидрофона"
                  ar
                  auto-rotate
                  camera-controls
                  exposure="1.1"
                  shadow-intensity="1"
                  poster="/Gidrophone.jpg"
                  style={{ width: '100%', height: '520px', background: '#f8fafc', borderRadius: '16px' }}
                ></model-viewer>

              </div>
              <aside id="specs" className="hydro-side">
                <h3>Технические характеристики</h3>
                <div className="hydro-side-specs">
                  {specifications.map((spec, index) => (
                    <div 
                      key={index}
                      className={`hydro-spec ${currentSpec === index ? 'active' : ''}`}
                      onClick={() => setCurrentSpec(index)}
                    >
                      <span className="hydro-spec-icon">{spec.icon}</span>
                      <span className="hydro-spec-label">{spec.label}</span>
                      <b className="hydro-spec-value">{spec.value}</b>
                    </div>
                  ))}
                </div>
                <p className="hydro-side-note">Полный лист характеристик отправим вместе с КП.</p>
              </aside>
            </section>
          </ScrollAnimation>

 

          {/* Offer band */}
          <ScrollAnimation animation="fadeInUp" delay={0.7}>
            <section id="offer" className="hydro-offer hydro-card">
              <div className="hydro-offer-text">
                <h3>Почему выбирают наши гидрофоны</h3>
                <p>
                  Мы разрабатываем и производим гидрофоны для морской сейсморазведки, фокусируясь на точности, 
                  долговечности и удобстве интеграции. Поможем подобрать конфигурацию под ваши задачи, 
                  обеспечим документацию и поддержку внедрения.
                </p>
                <p>
                  Расскажите о своём проекте — подберём решение, предоставим технические данные и сроки поставки. 
                  Нужна нестандартная модификация или кабельная сборка? Поддерживаем кастомизацию под ТЗ.
                </p>
              </div>
            </section>
          </ScrollAnimation>

          {/* Gallery */}
          <ScrollAnimation animation="fadeInUp" delay={0.9}>
            <section className="hydro-gallery hydro-card">
              <h2>Галерея</h2>
              <div className="hydro-gallery-grid">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className="hydro-gallery-item"
                    onClick={() => setSelectedImage(image)}
                  >
                    <LazyImage 
                      src={image.src} 
                      alt={image.alt}
                      className="hydro-gallery-image"
                    />
                    <div className="hydro-gallery-overlay">
                      <span className="hydro-gallery-title">{image.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollAnimation>

          {/* Modal for gallery */}
          {selectedImage && (
            <div className="hydro-modal" onClick={() => setSelectedImage(null)}>
              <div className="hydro-modal-content" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="hydro-modal-close"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="hydro-modal-image"
                />
                <h3 className="hydro-modal-title">{selectedImage.title}</h3>
              </div>
            </div>
          )}
        </div>
      </main>
      <Stern />
    </>
  );
};

export default Hydrophone;


