import React from 'react';

export const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#about" className="nav__logo">
          Daniela<span></span>
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#about" className="nav__link active-link">
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
          <i className="uil uil-times nav__close" id="nav-close"></i>
        </div>

        <div className="nav__btns">
          {/* <!-- Theme change button --> */}
          <i className="uil uil-moon change-theme" id="theme-button"></i>

          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
