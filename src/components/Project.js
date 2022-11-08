import React from 'react';
import { ModalProject } from './ModalProject';

export const Project = () => {
  return (
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
      <ModalProject />
    </div>
  );
};
