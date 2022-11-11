import React from 'react';

export const FeaturedProject = ({title, src, demo, description}) => {
  return (
    <div className="portfolio__content grid">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/projects/${src}.png`}
        alt=""
        className="portfolio__img"
      />
      <div className="portfolio__data">
        <div className="portfolio__1stRow">
          <h3 className="portfolio__title">{title}</h3>
          <a 
            href={demo} 
            target="_blank"
            className="portfolio__button"
            rel="noreferrer"
          >
            <i className="uil uil-arrow-up-right button__icon button-1stRow"></i>
          </a>
        </div>
        <p className="portfolio__description">{description}</p>
      </div>
    </div>
  );
};
