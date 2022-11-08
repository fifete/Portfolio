import React from 'react'
import { FeaturedProject } from './FeaturedProject'

export const Featured = () => {
  return (
    <section className="portfolio section" id="projectos">
      <h2 className="section__title">Featured projects</h2>
      <span className="section__subtitle">I'm most proud of</span>

      <div className="portfolio__container container swiper mySwiper">
        <div className="swiper-wrapper">

          {/* <!--==================== PROJECT 1 ====================--> */}
          <FeaturedProject />
        </div>

        {/* <!--Add Pagination--> */}
        <div className="swiper-pagination">dots</div>
      </div>
    </section>
  )
}
