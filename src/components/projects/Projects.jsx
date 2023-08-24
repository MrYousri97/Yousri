import React from 'react'
import './projects.css'
import data from './data'
const Projects = () => {
  return (
    <section id='projects'>
      <h2>Projects</h2>
      <div className="container projects__container">
        {
          data.map(({id,image,title,gituhub})=>{
            return(
              <article key={id} className='project__item'>
                  <div className="project__item-img">
                  <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="project__item-cta">
                  <a href={gituhub} className='btn'>Github</a>
                  </div>
              </article>
            )   
          })
        }     
      </div>
    </section>
  )
}

export default Projects