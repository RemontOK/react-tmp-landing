import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import './Header.mobile.css';
import logo from '/logo2.svg';
import Modal from './Modal';

const Header = ({ showHeader }) => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animIn, setAnimIn] = useState(false);

  // === Анимация появления хедера ===
  useEffect(() => {
    setAnimIn(false);
    const timer = setTimeout(() => setAnimIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Глобальное открытие модального окна по кастомному событию
  useEffect(() => {
    const openModal = () => setShowModal(true);
    window.addEventListener('openContactModal', openModal);
    return () => window.removeEventListener('openContactModal', openModal);
  }, []);

  // === Плавное появление при showHeader ===
  useEffect(() => {
    if (showHeader) {
      setIsVisible(false);
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      setIsVisible(false);
    }
  }, [showHeader]);

  // === Скролл-эффект для хедера ===
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollY = window.scrollY;
        headerRef.current.style.transform = `translateY(${-Math.min(scrollY, 120)}px)`;
        headerRef.current.style.opacity = `${1 - Math.min(scrollY / 120, 1)}`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header ref={headerRef} className={`tmp-header hero-nav${animIn ? ' header-anim-in' : ''}`}>
        <nav className="hero-nav-inner" role="navigation">
          {/* === Логотип === */}
          <a href="#/" className="hero-logo-block" onClick={e => {
            e.preventDefault(); 
            sessionStorage.setItem('internalNavigation', 'true');
            navigate('/');
          }}>
            <img src={logo} alt="ТМП" className="hero-logo-img" />
          </a>
          {/* === Бургер-меню === */}
          <button
            className={`hero-burger${menuOpen ? ' active' : ''}`}
            aria-label="Открыть меню"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </nav>
        {/* === Мобильное меню === */}
        {menuOpen && <div className="hero-mobile-overlay" onClick={() => setMenuOpen(false)}></div>}
        {menuOpen && (
          <div className="hero-mobile-menu open">
            <a href="#/" onClick={e => {
              e.preventDefault();
              sessionStorage.setItem('internalNavigation', 'true');
              navigate('/');
              setMenuOpen(false);
            }}>Главная</a>

            <a href="#/production" onClick={e => {
              e.preventDefault(); 
              navigate('/production');
              window.scrollTo(0, 0);
              setMenuOpen(false);
            }}>Производство</a>

            <a href="#/pcb-service" onClick={e => {
              e.preventDefault(); 
              navigate('/pcb-service');
              window.scrollTo(0, 0);
              setMenuOpen(false);
            }}>PCB и сервис</a>

            <a href="#/team" onClick={e => {
              e.preventDefault(); 
              navigate('/team');
              window.scrollTo(0, 0);
              setMenuOpen(false);
            }}>Команда</a>

            <a href="#/project" onClick={e => {
              e.preventDefault(); 
              navigate('/project');
              window.scrollTo(0, 0);
              setMenuOpen(false);
            }}>Проекты</a>

            <a href="#/products" onClick={e => {
              e.preventDefault(); 
              navigate('/products');
              window.scrollTo(0, 0);
              setMenuOpen(false);
            }}>Продукция</a>

            <a href="#contact" onClick={e => {
              e.preventDefault();
              setShowModal(true);
              setMenuOpen(false);
            }}>Связаться с нами</a>
          </div>
        )}
      </header>
      {/* === Модальное окно (форма заявки) === */}
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Header;
