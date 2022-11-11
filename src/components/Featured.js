import React from 'react';
import { FeaturedProject } from './FeaturedProject';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/featured.css';

export const Featured = ({ data }) => {
  return (
    <section className="portfolio section" id="projectos">
      <h2 className="section__title">Featured projects</h2>
      <span className="section__subtitle">I'm most proud of</span>

      <div className="portfolio__container container featured-small-layout">
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          effect="fade"
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="swiper-custom"
        >
          {data
            .filter((item) => item.categories.includes('featured'))
            .map((project) => (
              <SwiperSlide>
                <FeaturedProject
                  key={project.id}
                  title={project.basic.title}
                  src={project.basic.src}
                  demo={project.basic.demo}
                  description={project.modal.description}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="featured-big-layout">
        {data
          .filter((item) => item.categories.includes('featured'))
          .map((project) => (
            <FeaturedProject
              key={project.id}
              title={project.basic.title}
              src={project.basic.src}
              demo={project.basic.demo}
              description={project.modal.description}
            />
          ))}
      </div>
    </section>
  );
};
