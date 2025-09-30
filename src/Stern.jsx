import React, { useState } from 'react';
import './Stern.css';
import './Stern.mobile.css';
import { FaPhoneAlt, FaEnvelope, FaTelegram, FaVk, FaMapMarkerAlt, FaRegHandshake, FaUserTie } from 'react-icons/fa';
import logo from '/logo.png';
import logo2 from '/logo2.svg';
import Modal from './Modal.jsx';

const Stern = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // === Открытие модалки для "Партнёрство" и "Карьера" ===
  const handleOpenModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleEmailClick = () => {
    const email = 'info@tehmetprom.ru';
    const subject = 'Вопрос по услугам';
    const body = 'Здравствуйте! У меня есть вопрос по вашим услугам.';
    
    // Открываем Gmail в браузере с предзаполненными полями
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Открываем Gmail в новой вкладке
    window.open(gmailLink, '_blank');
  };

  return (
    <footer className="tmp-stern">
      <div className="tmp-stern-bg">
        <div className="stern-content">
          {/* === Логотип === */}
          <div className="tmp-stern-logo-block">
            <img src={logo2} alt="ТМП" className="tmp-stern-logo-desktop" />
            <img src={logo} alt="ТМП" className="tmp-stern-logo" />
          </div>
          {/* === Контакты и соцсети === */}
          <div className="stern-info-columns">
            <div className="stern-contacts">
              <div className="stern-contacts-title">Контакты</div>
              <div className="stern-contacts-text">
                <button className="stern-contacts-text-item">
                  <FaPhoneAlt style={{marginRight:6}}/> 
                  <a href="tel:+79000419419" className="stern-link-info phone">+7 (9000) 419-419</a>
                </button>
                <button 
                  className="stern-contacts-text-item" 
                  onClick={handleEmailClick}
                >
                  <FaEnvelope style={{marginRight:6}}/> 
                  <span className="stern-link-info email">info@tehmetprom.ru</span>
                </button>
              </div>
              <div className="stern-social">
                <a href="https://t.me/TEHMETPROM_tg" className="stern-link" aria-label="Telegram"><FaTelegram /></a>
                <a href="https://vk.com/tehmetprom" className="stern-link" aria-label="VK"><FaVk /></a>
                <a href="#" className="stern-link" aria-label="Партнёрство" onClick={handleOpenModal}><FaRegHandshake /></a>
                <a href="#" className="stern-link" aria-label="Карьера" onClick={handleOpenModal}><FaUserTie /></a>
              </div>
            </div>
            {/* === Местоположение и карта === */}
            <div className="stern-info-map-block">
              <div className="stern-location">
                <div className="stern-location-title">Местоположение</div>
                <div className="stern-location-text"><FaMapMarkerAlt style={{marginRight:6}}/> Екатеринбург, Россия</div>
              </div>
              <div className="stern-map-placeholder">
            
                <iframe 
                src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=136242754555" 
                width="560" height="400" frameborder="0"
                onLoad={() => setMapLoaded(true)}
                title="Карта"
                style={{border:0, width:'100%', height:'100%'}}
                >
                </iframe>
                {!mapLoaded && (
                  <div className="oil-search-animation">
                    <span className="oil-wave"></span>
                    <svg className="oil-drill" viewBox="0 0 32 32" fill="none">
                      <rect x="14" y="8" width="4" height="16" rx="2" fill="#1565c0"/>
                      <rect x="13" y="22" width="6" height="6" rx="3" fill="#eaf6ff"/>
                      <rect x="15.5" y="2" width="1" height="8" rx="0.5" fill="#1565c0"/>
                      <rect x="12" y="6" width="8" height="2" rx="1" fill="#1565c0"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {/* === Кнопка для Telegram === */}
            <button onClick={() => window.open('https://t.me/TEHMETPROM_tg', '_blank')} className="stern-extra">
              <b>Работаем по всей России и СНГ. Готовы к новым проектам и партнёрству.</b>
            </button>
          </div>
        </div>
        {/* === Копирайт === */}
        <div className="stern-copyright">© {new Date().getFullYear()} Техметпром. Все права защищены.</div>
        {/* === Модальное окно (форма заявки) === */}
        <Modal show={showModal} onClose={() => setShowModal(false)} />
      </div>
    </footer>
  );
};

export default Stern;
