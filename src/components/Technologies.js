import React from 'react';
import '../styles/technologies.css'
import { TechCategory } from './TechCategory';

export const Technologies = ({technologies}) => {
  const frontendTechs = technologies.filter(tech => tech.categories.includes('frontend'))
  const backendTechs = technologies.filter(tech => tech.categories.includes('backend'))
  const testingTechs = technologies.filter(tech => tech.categories.includes('testing'))
  const designTechs = technologies.filter(tech => tech.categories.includes('design'))
  return (
    <section className="skills section" id="technologies">
      <h2 className="section__title">Technologies</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container">
        <TechCategory
          title="Frontend developer"
          technologies={frontendTechs}
          icon='uil-brackets-curly'
        />
        <TechCategory
          title="Backend developer"
          technologies={backendTechs}
          icon='uil-server-network'
        />
        <TechCategory
          title="Testing"
          technologies={testingTechs}
          icon='uil-flask'
        />
        <TechCategory
          title="Designer UX / UI"
          technologies={designTechs}
          icon='uil-palette'
        />
      </div>
    </section>
  );
};
