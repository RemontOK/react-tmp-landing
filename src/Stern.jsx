import React from 'react';
import './Stern.css';
import logo from './assets/react.svg'; // Replace with your actual logo if needed

const Stern = () => {
  return (
    <div className="tmp-stern">
      <div className="tmp-stern-bg">
        <img src={logo} alt="Логотип" className="tmp-stern-logo" />
      </div>
    </div>
  );
};

export default Stern;
