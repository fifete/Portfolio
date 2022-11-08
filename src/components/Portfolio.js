import React from 'react';
import { Project } from './Project';

export const Portfolio = () => {
  return (
    <section className="works section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Fulfilled projects</span>

      <div className="work__filters">
        <span className="work__item active-work" data-filter="all">
          All
        </span>
        <span className="work__item" data-filter=".web">
          Web
        </span>
        <span className="work__item" data-filter=".responsive">
          Responsive
        </span>
      </div>

      <div className="work__container container grid">
        {/* <!--==================== PORTFOLIO WEB ====================--> */}

        {/* <!--==================== por un arreglo de project crea este component ====================--> */}
        <Project />
      </div>
    </section>
  );
};
