import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/2.jpg'
import HeaderSocial from './Headersocial'


function Header() {
  return (
    <header>
      <div  className='container header__container'>
      <h3>  Hello i'm</h3>
      <h1>DJEUNOU Marieke</h1>
      <h4 className='text-light'>cyber security analyst</h4>
      <CTA/>
      <HeaderSocial/>
      
      <div className='me'>
        <img src={Me} alt='my immage' ></img>
      </div>
      <a href='#contact'className='scroll__down'>scroll Down</a>
      </div>
    </header>
  )
}

export default Header