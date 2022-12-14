import React, { useState } from 'react';
import { ModalProject } from './ModalProject';

export const Project = ({ projectInfo, technologies, id }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal((prev) => !prev);
  return (
    <>
      <div className="work__card mix design responsive">
        <div className="work__img">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/projects/${projectInfo.basic.src}.png`}
            alt=""
          />
        </div>
        <div className='work__card-info'>
          <div className="flex_info_project">
            <h3 className="work__title">{projectInfo.basic.title}</h3>
            <i
              className="uil uil-info-circle icon_info services__button"
              onClick={toggleModal}
            ></i>
          </div>
          <div className="flex__project">
            <a 
              href={projectInfo.basic.demo}
              className="work__button"
              target="_blank"
              rel="noreferrer"
              >
              Demo<i className="uil uil-angle-double-right work__icon"></i>
            </a>
            <a 
              href={projectInfo.basic.github}
              className="work__button"
              target="_blank"
              rel="noreferrer"
              >
              Github<i className="uil uil-angle-double-right work__icon"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!--==================== MODAL INFO PROJECT ====================--> */}
      {modal && (
        <ModalProject
          modalData={projectInfo.modal}
          technologies={technologies}
          id={id}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};
