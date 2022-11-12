import React from 'react';

export const ScrollUp = () => {
  const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');
    if (window.scrollY >= 890) scrollUpBtn.classList.add('show-scroll');
    else scrollUpBtn.classList.remove('show-scroll');
  };

  window.addEventListener('scroll', scrollUp);

  return (
    <a href="#about" className="scrollup" id="scroll-up">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};
