import React, { useState } from 'react';
import './Modal.css';
import './Modal.mobile.css';

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <h2>Связаться с нами</h2>
          <p>Выберите удобный способ связи</p>
        </div>

        <div className="contact-links">
          <a className="contact-item tg" href="https://t.me/TEHMETPROM_tg" target="_blank" rel="noreferrer">
            <span className="contact-icon tg">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9.04 15.3l-.38 5.36c.54 0 .77-.23 1.05-.5l2.52-2.42 5.23 3.83c.96.52 1.64.25 1.9-.89l3.46-16.23h.01c.31-1.46-.53-2.03-1.47-1.68L2.05 10.32c-1.42.55-1.4 1.34-.24 1.7l5.3 1.65L19.7 6.2c.73-.48 1.4-.22.85.26L9.04 15.3z" />
              </svg>
            </span>
            Telegram
          </a>
          <a className="contact-item vk" href="https://vk.com/tehmetprom" target="_blank" rel="noreferrer">
            <span className="contact-icon vk">
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#1976d2" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
                <path fill="#fff" d="M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618 c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199 v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623 C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643 C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094 v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618 c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326 c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607 C32.223,24.393,35.607,19.642,35.937,18.041z"></path>
              </svg>
            </span>
            ВКонтакте
          </a>
          <a className="contact-item mail" href="https://mail.yandex.ru/compose?to=info@tehmetprom.ru&subject=%D0%97%D0%B0%D1%8F%D0%B2%D0%BA%D0%B0%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0&body=%D0%95%D1%81%D0%BB%D0%B8%20%D1%83%D0%B4%D0%BE%D0%B1%D0%BD%D0%BE%2C%20%D1%83%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%3A%0A-%20%D0%98%D0%BC%D1%8F%3A%0A-%20%D0%A2%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%3A%0A-%20%D0%A3%D1%81%D0%BB%D1%83%D0%B3%D0%B0%3A%0A" target="_blank" rel="noreferrer">
            <span className="contact-icon mail">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 3.236V18h16V7.236l-7.445 5.584a3 3 0 0 1-3.11 0L4 7.236z" />
              </svg>
            </span>
            info@tehmetprom.ru
          </a>
          <a className="contact-item phone" href="tel:+79000419419">
            <span className="contact-icon phone">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.054 15.054 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
              </svg>
            </span>
            +7 (9000) 419-419
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal; 