import React from 'react';

export const ModalProject = () => {
  return (
    <div className="services__modal">
      <div className="services__modal-content">
        <h4 className="services__modal-title">😸 Kitty chat</h4>
        <i className="uil uil-times services__modal-close"></i>

        <ul className="services__modal-services grid">
          <li className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p>
              <strong>Rol:</strong> Frontend Developer and UX / UI Designer
            </p>
          </li>

          <li className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p>
              <strong>Description:</strong> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer risus nisl, ornare vitae nibh
              vel, sodales malesuada dolor. Integer arcu enim, hendrerit ac ex
              aliquam, pharetra ornare mauris. Integer tincidunt interdum ligula
              et congue. Vestibulum lacinia aliquam nibh, et congue elit
              tincidunt quis.
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
  );
};
