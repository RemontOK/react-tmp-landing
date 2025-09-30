import React, { useEffect, useState } from 'react';

const ScrollDebugger = () => {
  const [scrollInfo, setScrollInfo] = useState({
    bodyOverflow: '',
    htmlOverflow: '',
    bodyHeight: '',
    htmlHeight: '',
    bodyPosition: '',
    htmlPosition: '',
    bodyClasses: '',
    htmlClasses: '',
    mainContentVisible: false,
    sectionsCount: 0,
  });

  useEffect(() => {
    const updateScrollInfo = () => {
      const mainContent = document.getElementById('main-content');
      const sections = document.querySelectorAll('section');
      
      setScrollInfo({
        bodyOverflow: document.body.style.overflow,
        htmlOverflow: document.documentElement.style.overflow,
        bodyHeight: document.body.style.height,
        htmlHeight: document.documentElement.style.height,
        bodyPosition: document.body.style.position,
        htmlPosition: document.documentElement.style.position,
        bodyClasses: document.body.className,
        htmlClasses: document.documentElement.className,
        mainContentVisible: mainContent ? mainContent.style.display !== 'none' : false,
        sectionsCount: sections.length,
      });
    };

    // Обновляем информацию каждые 100мс
    const interval = setInterval(updateScrollInfo, 100);
    
    // Первоначальное обновление
    updateScrollInfo();

    return () => clearInterval(interval);
  }, []);

  const forceRestoreScroll = () => {
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflowY = 'auto';
    document.documentElement.style.overflowY = 'auto';
    document.body.style.position = 'static';
    document.documentElement.style.position = 'static';
    document.body.style.height = 'auto';
    document.documentElement.style.height = 'auto';
    document.body.style.display = 'block';
    document.documentElement.style.display = 'block';
    document.body.style.visibility = 'visible';
    document.documentElement.style.visibility = 'visible';
    console.log('Скролл принудительно восстановлен');
  };
  
  const callGlobalRestore = () => {
    if (window.restoreScroll) {
      window.restoreScroll();
      console.log('Вызвана глобальная функция восстановления скролла');
    }
  };
  
  const forceShowContent = () => {
    // Принудительно показываем все секции
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.display = 'block';
      section.style.visibility = 'visible';
      section.style.height = 'auto';
      section.style.overflow = 'visible';
    });
    
    // Показываем main контент
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.display = 'block';
      mainContent.style.visibility = 'visible';
      mainContent.style.height = 'auto';
      mainContent.style.overflow = 'visible';
    }
    
    // Восстанавливаем скролл
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflowY = 'auto';
    document.documentElement.style.overflowY = 'auto';
    
    console.log('Контент принудительно показан');
  };

  // Показываем только в режиме разработки
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        zIndex: 10000,
        maxWidth: '300px',
        fontFamily: 'monospace',
      }}
    >
      <h4 style={{ margin: '0 0 10px 0' }}>Отладка скролла</h4>
      <div>Body overflow: {scrollInfo.bodyOverflow || 'default'}</div>
      <div>HTML overflow: {scrollInfo.htmlOverflow || 'default'}</div>
      <div>Body height: {scrollInfo.bodyHeight || 'default'}</div>
      <div>HTML height: {scrollInfo.htmlHeight || 'default'}</div>
      <div>Body position: {scrollInfo.bodyPosition || 'default'}</div>
      <div>HTML position: {scrollInfo.htmlPosition || 'default'}</div>
      <div>Body classes: {scrollInfo.bodyClasses || 'none'}</div>
      <div>HTML classes: {scrollInfo.htmlClasses || 'none'}</div>
      <div>Main content visible: {scrollInfo.mainContentVisible ? 'Yes' : 'No'}</div>
      <div>Sections count: {scrollInfo.sectionsCount}</div>
      <button
        onClick={forceRestoreScroll}
        style={{
          marginTop: '10px',
          padding: '5px 10px',
          background: '#1565c0',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
          marginRight: '5px',
        }}
      >
        Восстановить скролл
      </button>
      <button
        onClick={callGlobalRestore}
        style={{
          marginTop: '10px',
          padding: '5px 10px',
          background: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
          marginRight: '5px',
        }}
      >
        Глобальное восстановление
      </button>
      <button
        onClick={forceShowContent}
        style={{
          marginTop: '10px',
          padding: '5px 10px',
          background: '#27ae60',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
        }}
      >
        Показать контент
      </button>
    </div>
  );
};

export default ScrollDebugger; 