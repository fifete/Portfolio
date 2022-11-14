import React, { useState } from 'react';
import '../styles/navbar.css'

export const Header = ({switchTheme, theme}) => {
  const [visible, setVisible] = useState(false)
  const toggleMenu = () => {
    setVisible(prev => !prev)
  }

  return (
    <header className="header scroll-header" id="header">
      <nav className="nav container">
        <a href="#about" className="nav__logo">
          <h3>Daniela</h3>
          <span></span>
        </a>
        
        {
        <div className={`nav__menu ${visible ? 'show-menu' : 'hide-menu'}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About me
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#technologies" className="nav__link">
                <i className="uil uil-book-open nav__icon"></i> Technologies
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
        </div>}

        <div className="nav__btns">
          {/* <!-- Theme change button --> */}
          <i 
            className={`uil ${theme === 'light' ? 'uil-moon' : 'uil-sun'} change-theme`}
            id="theme-button"
            onClick={switchTheme}
          ></i>
          <div className="nav__toggle" onClick={toggleMenu}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
