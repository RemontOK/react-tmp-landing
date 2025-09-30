// Утилиты для мониторинга производительности

export const measurePerformance = () => {
  // Измеряем время загрузки страницы
  if ('performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0];
    
    return {
      // Время до первого байта
      ttfb: perfData.responseStart - perfData.requestStart,
      // Время загрузки DOM
      domLoad: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
      // Время полной загрузки страницы
      pageLoad: perfData.loadEventEnd - perfData.loadEventStart,
      // Общее время загрузки
      total: perfData.loadEventEnd - perfData.fetchStart
    };
  }
  return null;
};

export const measureImagePerformance = () => {
  const images = document.querySelectorAll('img');
  const imageMetrics = [];
  
  images.forEach(img => {
    if (img.complete) {
      imageMetrics.push({
        src: img.src,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        loadingTime: img.loadTime || 0
      });
    }
  });
  
  return imageMetrics;
};

export const logPerformance = () => {
  const perf = measurePerformance();
  if (perf) {
    console.log('🚀 Производительность страницы:', {
      'Время до первого байта': `${perf.ttfb.toFixed(2)}ms`,
      'Загрузка DOM': `${perf.domLoad.toFixed(2)}ms`,
      'Полная загрузка': `${perf.pageLoad.toFixed(2)}ms`,
      'Общее время': `${perf.total.toFixed(2)}ms`
    });
  }
  
  const imageMetrics = measureImagePerformance();
  if (imageMetrics.length > 0) {
    console.log('🖼️ Изображения загружены:', imageMetrics.length);
  }
};

// Автоматический лог производительности в продакшене
if (process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    setTimeout(logPerformance, 1000);
  });
} 