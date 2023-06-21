import React from 'react'
import './about.css'
import Moi from '../../assets/changerone.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={Moi} alt="Brown " />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>2 Years</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>4 world widely</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>2 Completed</small>
              </article>
            </div>
            <p>

              I am a young cameroonian studying computer engineering in level 3 at the 

              I am a young cameroonian studying computer engineering in level 2 at the 
              Faculty of Engineering and Technology(FET) of the University of Buea . During
              my studies, i acquired skills in programming(C,C++), data communication, 
              database management, word processing, spreadsheets, cryptosystems and 
              cybersecurity. I am pursuing an online Huawei Datacom training in order to
              obtain a certification. I hold a french-speaking baccalaureat C and i study
              in English therefore I can moderately express myself in English and fluently
              in French. 
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
