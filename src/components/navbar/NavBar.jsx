import React, { useState } from 'react';
import './NavBar.main.css';

const NavBar = () => {
  const [lightMode, setLightMode] = useState(true);

  const toggleMode = () => {
    setLightMode(!lightMode);
    document.body.classList.toggle('night-mode');
  };

  return (
    <div className={`navbar ${lightMode ? 'light-mode' : 'night-mode'}`}>
      <div className="logo">
        <h3 className='boujee-text'>text2pic.io</h3>
      </div>
      <div className="toggle" onClick={toggleMode}>
        <span>{lightMode ? '🌙' : '☀️'}</span>
      </div>
    </div>
  );
};

export default NavBar;
