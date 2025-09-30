import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, animation = 'fadeInUp', delay = 0, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    switch (animation) {
      case 'fadeInUp':
        return 'animate-fadeInUp';
      case 'fadeInLeft':
        return 'animate-fadeInLeft';
      case 'fadeInRight':
        return 'animate-fadeInRight';
      case 'fadeInDown':
        return 'animate-fadeInDown';
      case 'zoomIn':
        return 'animate-zoomIn';
      case 'slideInLeft':
        return 'animate-slideInLeft';
      case 'slideInRight':
        return 'animate-slideInRight';
      default:
        return 'animate-fadeInUp';
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`scroll-animation ${getAnimationClass()}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getInitialTransform(animation),
        transition: `opacity 0.3s ease-out ${delay}s, transform 0.3s ease-out ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

const getInitialTransform = (animation) => {
  switch (animation) {
    case 'fadeInUp':
      return 'translateY(30px)';
    case 'fadeInLeft':
      return 'translateX(-30px)';
    case 'fadeInRight':
      return 'translateX(30px)';
    case 'fadeInDown':
      return 'translateY(-30px)';
    case 'zoomIn':
      return 'scale(0.8)';
    case 'slideInLeft':
      return 'translateX(-100%)';
    case 'slideInRight':
      return 'translateX(100%)';
    default:
      return 'translateY(30px)';
  }
};

export default ScrollAnimation; 