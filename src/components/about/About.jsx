import React from 'react'
import './about.css'
import test from '../../assets/22.jpg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={test} alt="Me" />
          </div>
        </div>
        <div className='about__content'>
          <p>
          	Highly motivated data scientist with in-depth knowledge of research or statistical models. Innovator with the ability to develop new solutions and interpretations.
          </p>
          <p>
          	Innovative Junior Full Stack Developer with 2 years of experience in developing and maintaining web applications.
          </p>

          <a  href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About