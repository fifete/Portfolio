import React from 'react';
import '../styles/footer.css'

export const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Daniela</h1>
            <span className="footer__subtitle">Frontend Developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__link">
                About me
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/danielafuentesdev/"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="mailto:danielafuentesdev@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-envelope"></i>
            </a>
            <a
              href="https://wa.me/51923455064"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-whatsapp"></i>
            </a>
            <a
              href="https://github.com/fifete"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
