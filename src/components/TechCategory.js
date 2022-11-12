import React from 'react';

export const TechCategory = ({ title, technologies, icon }) => {
  const [showTechnologies, setShowTechnologies] = React.useState(false);
  return (
    <div className={`skills__content ${showTechnologies ? 'skills__open' : 'skills__close'}`}>
      <div className="skills__header">
        <i className={`uil ${icon} skills__icon`}></i>
        <h1 className="skills__title">{title}</h1>
        <i 
          className="uil uil-angle-down skills__arrow"
          onClick={()=> setShowTechnologies(prev => !prev)}
        ></i>
      </div>
      <div className="skills__list grid">
        {technologies.map((tech) => (
          <div className="skills__data" key={tech.name}>
            <div className="flex__tech">
              <img
                src={tech.src}
                className="tech__icon"
                alt=""
              />
              <h3 className="skills__name">{tech.name}</h3>
            </div>
          </div>
        ))}
        {/* uil-angle-down (close) en 180 es open
         <div className="skills__data">
          <div className="skills__titles">
            <div className="flex__tech">
              <img
                src="./img/tech/icons8-css3-96.png"
                className="tech__icon"
                alt=""
              />
              <h3 className="skills__name">CSS3</h3>
            </div>
            <span className="skills__number">85%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage skills__css"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
};
