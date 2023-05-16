import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/2.jpg'



function Header() {
  return (
    <header>
      <div  className='container header__container'>
      <h5>hello i'm</h5>
      <h1>Djeunou Djeunou Marieke</h1>
      <h5 className='text-light'>cyber security analyst</h5>
      <CTA/>
      
      
      <div className='me'>
        <img src={Me} alt='my immage' ></img>
      </div>
      <a href='#contact'className='scroll__down'>scroll Down</a>
      </div>
    </header>
  )
}

export default Header