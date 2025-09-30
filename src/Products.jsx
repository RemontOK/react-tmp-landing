import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';
import './Products.mobile.css';
import Header from './Header';
import Stern from './Stern';

const heroImages = [
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
            <h1 className="hero-slider-title">Наша продукция</h1>
            <p className="hero-slider-desc">Готовые изделия и комплектующие для сейсморазведки и промышленности</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const products = [
  {
    id: 1,
    name: 'Гидрофон',
    category: 'Сейсмические датчики',
    image: 'Gidrophone.jpg',
    model3d: 'hydrophone.glb',
    shortDesc: 'Высокоточный сейсмический датчик для подводных исследований',
    fullDesc: 'Гидрофон предназначен для регистрации сейсмических волн в водной среде. Используется в морской сейсморазведке для поиска нефти и газа. Обеспечивает высокую чувствительность и точность измерений.',
    specifications: {
      'Частота': '5-200 Гц',
      'Чувствительность': '200 мВ/Па',
      'Глубина': 'до 3000 м',
      'Температура': '-20°C до +60°C',
      'Материал': 'Алюминий'
    },
    applications: [
      'Морская сейсморазведка',
      'Поиск нефти и газа',
      'Геофизические исследования',
      'Мониторинг подводных объектов'
    ],
    price: 'По запросу',
    availability: 'В наличии',
    year: 2023,
    status: 'Серийное производство'
  },
  {
    id: 2,
    name: 'Протектор сейсмической косы',
    category: 'Защита',
    image: 'banner2.jpg',
    model3d: 'streamer_protector.glb',
    shortDesc: 'Защита косы от абразивного воздействия морского дна',
    fullDesc: 'Протектор предотвращает повреждения геофонов и кабельных соединений при контакте с морским дном и плавающими объектами. Изготовлен из износостойких материалов.',
    specifications: {
      'Материал': 'Полиуретан, композит',
      'Температура': '-30°C до +70°C',
      'Совместимость': 'Стандартные сейсмические косы',
      'Снижение износа': 'до 40%'
    },
    applications: [
      'Морская сейсморазведка',
      'Защита кабельных линий',
      'Длительные экспедиции'
    ],
    price: 'По запросу',
    availability: 'Под заказ',
    year: 2022,
    status: 'Реализовано'
  },
  {
    id: 3,
    name: 'Переходники для воздушных каналов линий пневмо источников',
    category: 'Пневмо соединения',
    image: 'project_3.png',
    model3d: 'air_adapter.glb',
    shortDesc: 'Герметичные соединительные элементы для воздушных каналов',
    fullDesc: 'Переходники обеспечивают надёжное и герметичное соединение воздушных каналов различного диаметра в линиях пневмоисточников. Стойкие к высоким давлениям и агрессивным средам.',
    specifications: {
      'Давление': 'до 20 МПа',
      'Материал': 'AISI 316',
      'Точность': '±0.02 мм',
      'Типы соединений': 'Резьбовые, фланцевые'
    },
    applications: [
      'Пневмоисточники',
      'Испытательные стенды',
      'Промышленная пневматика'
    ],
    price: 'По запросу',
    availability: 'В наличии',
    year: 2021,
    status: 'Реализовано'
  },
  {
    id: 4,
    name: 'Переходники JIC воздушных каналов линий пневмо источников',
    category: 'Пневмо соединения',
    image: 'banner3.jpg',
    model3d: 'jic_adapter.glb',
    shortDesc: 'JIC-резьба для надёжных герметичных соединений',
    fullDesc: 'Переходники с JIC-резьбой (Joint Industry Council) для соединения воздушных каналов линий пневмоисточников. Соответствие международным стандартам, герметичность при высоком давлении.',
    specifications: {
      'Давление': 'до 25 МПа',
      'Материал': 'AISI 316L, титан',
      'Стандарт': 'JIC',
      'Устойчивость': 'Коррозионная, вибрационная'
    },
    applications: [
      'Пневмоисточники',
      'Сейсморазведка на суше и море',
      'Высоконагруженные соединения'
    ],
    price: 'По запросу',
    availability: 'Под заказ',
    year: 2022,
    status: 'Реализовано'
  }
];

const ProductCard = ({ product, isOpen, onToggle }) => {
  const navigate = useNavigate();
  return (
    <div className={`product-card${isOpen ? ' expanded' : ''}`}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <button className="product-3d-btn" onClick={() => onToggle(product.id)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            3D Модель
          </button>
        </div>
      </div>
      
      <div className="product-info">
        {product.name === 'Гидрофон' ? (
          <h3
            className="product-name product-name-link"
            onClick={() => navigate('/hydrophone')}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') navigate('/hydrophone'); }}
          >
            {product.name}
          </h3>
        ) : (
          <h3 className="product-name">{product.name}</h3>
        )}
        <p className="product-category">{product.category}</p>
        <p className="product-short-desc">{product.shortDesc}</p>
        
        <div className="product-meta">
          <span className="product-status">{product.status}</span>
          <span className="product-availability">{product.availability}</span>
        </div>
        
        <div className="product-actions">
          <button className="product-btn primary" onClick={() => onToggle(product.id)}>
            {isOpen ? 'Скрыть' : 'Подробнее'}
          </button>
          <button
            className="product-btn secondary"
            onClick={() => {
              try { window.dispatchEvent(new Event('openContactModal')); } catch {}
            }}
          >
            Запросить цену
          </button>
        </div>
      </div>

    </div>
  );
};

const ProductDetailsRow = ({ product }) => {
  const [activeTab, setActiveTab] = React.useState('desc');

  React.useEffect(() => {
    if (product.name !== 'Гидрофон') return;
    // Ensure model-viewer is loaded
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.appendChild(script);

    const paintGray = (viewer) => {
      if (!viewer) return;
      const onLoad = () => {
        try {
          const materials = viewer?.model?.materials || [];
          materials.forEach((mat) => {
            const pbr = mat.pbrMetallicRoughness;
            if (pbr && pbr.setBaseColorFactor) {
              pbr.setBaseColorFactor([0.3, 0.3, 0.3, 1]);
            }
            if (pbr) {
              if (pbr.setMetallicFactor) pbr.setMetallicFactor(0);
              if (pbr.setRoughnessFactor) pbr.setRoughnessFactor(0.8);
            }
          });
        } catch {}
      };
      viewer.addEventListener('load', onLoad, { once: true });
    };

    const timer = setTimeout(() => {
      paintGray(document.getElementById(`mv-product-${product.id}`));
    }, 300);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      clearTimeout(timer);
    };
  }, [product]);

  return (
    <div className="product-details-row">
      <div className="product-details-grid">
        <div className="product-3d-inline">
          {product.name === 'Гидрофон' ? (
            <model-viewer
              id={`mv-product-${product.id}`}
              src="/Untitled.glb"
              alt="3D модель гидрофона"
              camera-controls
              auto-rotate
              className="product-3d-viewer-el"
              style={{ width: '100%', height: '100%', background: '#e5e7eb', borderRadius: '16px' }}
            ></model-viewer>
          ) : (
            <>
              <div className="product-3d-spinner">
                <div className="cube">
                  <div className="face face-front">3D</div>
                  <div className="face face-back">3D</div>
                  <div className="face face-left">3D</div>
                  <div className="face face-right">3D</div>
                  <div className="face face-top">3D</div>
                  <div className="face face-bottom">3D</div>
                </div>
              </div>
              <div className="product-3d-hint">Здесь будет интерактивная 3D-модель</div>
            </>
          )}
        </div>
        <div className="product-details-right">
          <div className="product-tabs">
            <button
              className={`product-tab${activeTab === 'desc' ? ' active' : ''}`}
              onClick={() => setActiveTab('desc')}
            >
              Описание
            </button>
            <button
              className={`product-tab${activeTab === 'specs' ? ' active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Характеристики
            </button>
          </div>
          {activeTab === 'desc' && (
            <div className="product-details-section">
              <p>{product.fullDesc}</p>
            </div>
          )}
          {activeTab === 'specs' && (
              <div className="product-details-section">
              <div className="product-specs">
                {Object.entries(product.specifications).map(([key, value]) => {
                  const isMaterial = key === 'Материал';
                  return (
                    <div key={key} className={`product-spec${isMaterial ? ' material' : ''}`}>
                      <span className="spec-label">{key}:</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [openProductId, setOpenProductId] = useState(null);
  
  const handleProductToggle = (productId) => {
    setOpenProductId(openProductId === productId ? null : productId);
  };

  return (
    <>
      <Header showHeader={true} />
      <HeroSlider />
      
      <section className="products-section">
        <div className="products-container">
          <div className="products-header">
            <h2>Готовая продукция</h2>
            <p>Высококачественные изделия для сейсморазведки и промышленности</p>
          </div>
          
          {(() => {
            const leftColumn = products.filter((_, idx) => idx % 2 === 0);
            const rightColumn = products.filter((_, idx) => idx % 2 === 1);
            return (
              <div className="products-columns">
                <div className="products-column">
                  {leftColumn.map((product) => (
                    <React.Fragment key={product.id}>
                      <ProductCard
                        product={product}
                        isOpen={openProductId === product.id}
                        onToggle={handleProductToggle}
                      />
                      {openProductId === product.id && (
                        <ProductDetailsRow product={product} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="products-column">
                  {rightColumn.map((product) => (
                    <React.Fragment key={product.id}>
                      <ProductCard
                        product={product}
                        isOpen={openProductId === product.id}
                        onToggle={handleProductToggle}
                      />
                      {openProductId === product.id && (
                        <ProductDetailsRow product={product} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>
      
      
      <Stern />
    </>
  );
};

export default Products;
