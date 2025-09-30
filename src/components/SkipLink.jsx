import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="skip-link"
      style={{
        position: 'absolute',
        top: '-40px',
        left: '6px',
        background: '#1565c0',
        color: 'white',
        padding: '8px 16px',
        textDecoration: 'none',
        borderRadius: '4px',
        zIndex: 10000,
        fontSize: '14px',
        fontWeight: '500',
        transition: 'top 0.3s ease',
      }}
      onFocus={(e) => {
        e.target.style.top = '6px';
      }}
      onBlur={(e) => {
        e.target.style.top = '-40px';
      }}
    >
      Перейти к основному содержимому
    </a>
  );
};

export default SkipLink; 