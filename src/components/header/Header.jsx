import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/m2.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Mahmoud Yousri</h1>
        <h5 className='text-light'>FullStack Developer & Junior Data Scientist</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img className='img'src={me} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header