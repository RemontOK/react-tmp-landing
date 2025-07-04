import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);

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
    <header ref={headerRef} className="tmp-header">
      <div className="tmp-ship-bg">
        <span className="tmp-title">ТМП техметпром</span>
      </div>
    </header>
  );
};

export default Header;
