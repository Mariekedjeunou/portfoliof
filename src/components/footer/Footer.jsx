import React from 'react'
import { BsWhatsapp } from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import { CgTwitter } from "react-icons/cg";

import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">
        <a href="#Header" className="footer__logo">
         Marieke Djeunou
        </a>

        <ul className="permalinks">
          <li>
            <a href="#Header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__media">
          <a href="https://wa.me/+237697724045" target="blank">
            <BsWhatsapp />
          </a>
          <a href="https://github.com/Mariekedjeunou" target="blank">
            <FaGithub />
          </a>
          <a href="<a href='https://facebook.com/profile.php?id=100071856189879' target='blank'><FaFacebookF/> </a>
" target="blank">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/mariek_djeunou?t=nkEnB9Rydo4AgY33oRjERg&s=09" target="blank">
            <CgTwitter />
          </a>
        </div>

        <div className="copyRight">
            <h3>@copyright BD 2023</h3>
        </div>
      </div>
    );
}

export default Footer
