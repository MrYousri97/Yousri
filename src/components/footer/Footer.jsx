import React from 'react'
import './footer.css'
import {BsLinkedin , BsGithub , BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='container .container__footer footer__logo'>MrYousri</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificate">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mryousri97/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/MrYousri97" target='_blank'><BsGithub/></a>
        <a href="https://twitter.com/mahmoudyousri3" target='_blank'><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; MrYousri. All rights reseved.</small>
      </div>
    </footer>
  )
}

export default Footer