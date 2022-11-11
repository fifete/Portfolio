import React, { useState } from 'react';
import '../styles/portfolio.css'
import '../styles/modal.css'
import { Project } from './Project';

export const Portfolio = ({data}) => {
  const [category, setCategory] = useState('all')
  const categorizeItems = items => items.map(project => (
    <Project 
      projectInfo={project} 
      technologies={data.technologies}
      id={project.id}
      key={project.id}/>
    ))
  const onSetCategory = (strCategory) => {
    if (strCategory !== category){
      setCategory(strCategory)
    }
  }

  return (
    <section className="works section" id='portfolio'>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Fulfilled projects</span>

      <div className="work__filters">
        <span 
          className={`work__item ${category === 'all' && "active-work"}`}
          onClick={()=>onSetCategory('all')}>
          All
        </span>
        <span 
          className={`work__item ${category === 'web' && "active-work"}`} 
          onClick={()=>onSetCategory('web')}>
          Web
        </span>
        <span 
          className={`work__item ${category === 'responsive' && "active-work"}`} 
          onClick={()=>onSetCategory('responsive')}>
          Responsive
        </span>
      </div>

      <div className="work__container container">
        {/* <!--==================== PORTFOLIO WEB ====================--> */}
        {
          category === 'all' ? categorizeItems(data.projects) : (
            categorizeItems(data.projects.filter(project => project.categories.includes(category)))
          )
        }
      </div>
    </section>
  );
};
