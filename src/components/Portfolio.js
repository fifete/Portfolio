import React from 'react';

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

        {/* <!--==================== PROJECT Kitty chat ====================--> */}
        <div className="work__card mix design responsive">
          <img
            src="./image/projects/studioGhibli.png"
            alt=""
            className="work__img"
          />

          <div className="flex_info_project">
            <h3 className="work__title">😸 Kitty chat</h3>
            <i className="uil uil-info-circle icon_info services__button"></i>
          </div>
          <div className="flex__project">
            <a href="#" className="work__button">
              Demo<i className="uil uil-angle-double-right work__icon"></i>
            </a>
            <a href="#" className="work__button">
              Github<i className="uil uil-angle-double-right work__icon"></i>
            </a>
          </div>
          {/* <!--==================== MODAL INFO PROJECT ====================--> */}
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">😸 Kitty chat</h4>
              <i className="uil uil-times services__modal-close"></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>
                    <strong>Rol:</strong> Frontend Developer and UX / UI
                    Designer
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>
                    <strong>Description:</strong> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Integer risus nisl, ornare
                    vitae nibh vel, sodales malesuada dolor. Integer arcu enim,
                    hendrerit ac ex aliquam, pharetra ornare mauris. Integer
                    tincidunt interdum ligula et congue. Vestibulum lacinia
                    aliquam nibh, et congue elit tincidunt quis.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>
                    <strong>Technologies:</strong>
                  </p>
                </li>

                <div className="flex__project-techs">
                  <div className="flex__tech">
                    <img src="#" className="tech__icon" alt="" />
                    <h3 className="skills__name">JavaScript</h3>
                  </div>
                  <div className="flex__tech">
                    <img src="#" className="tech__icon" alt="" />
                    <h3 className="skills__name">Firebase</h3>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
