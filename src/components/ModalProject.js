import React from 'react';

export const ModalProject = ({modalData, technologies}) => {
  return (
    <div className="services__modal">
      <div className="services__modal-content">
        <h4 className="services__modal-title">😸{modalData.title}</h4>
        <i className="uil uil-times services__modal-close"></i>

        <ul className="services__modal-services grid">
          <li className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p>
              <strong>Rol:</strong> {modalData.rol}
            </p>
          </li>

          <li className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p>
              <strong>Description:</strong> {modalData.description}
            </p>
          </li>

          <li className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p>
              <strong>Technologies:</strong>
            </p>
          </li>

          <div className="flex__project-techs">
            {technologies.map(tech => (
              <div className="flex__tech">
                <img src={tech.src} className="tech__icon" alt="" />
                <h3 className="skills__name">{tech.name}</h3>
              </div>
            ))}
{/*             <div className="flex__tech">
              <img src="#" className="tech__icon" alt="" />
              <h3 className="skills__name">Firebase</h3>
            </div> */}
          </div>
        </ul>
      </div>
    </div>
  );
};
