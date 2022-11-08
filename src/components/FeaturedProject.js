import React from 'react';

export const FeaturedProject = () => {
  return (
    <div className="portfolio__content grid swiper-slide">
      <img
        src="./image/projects/studioGhibli.png"
        alt=""
        className="portfolio__img"
      />
      <div className="portfolio__data">
        <div className="portfolio__1stRow">
          <h3 className="portfolio__title">😸 Kitty chat</h3>
          <a href="#" target="_blank" className="portfolio__button">
            <i className="uil uil-arrow-up-right button__icon"></i>
          </a>
        </div>
        <p className="portfolio__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer risus
          nisl, ornare vitae nibh vel, sodales malesuada dolor. Integer arcu
          enim, hendrerit ac ex aliquam, pharetra ornare mauris. Integer
          tincidunt interdum ligula et congue. Vestibulum lacinia aliquam nibh,
          et
        </p>
      </div>
    </div>
  );
};
