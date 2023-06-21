import React from 'react'
import './services.css'
import ListServices from './listServices'
import {BiCheck} from 'react-icons/bi'

export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
    
      <article className="service">
        <div className="service__head">
      <h3>SECRITY ARCHITECTURE DESIGN</h3>
      </div>
      <ul className="service__list">
      <h4>I am beginner here and still learning how to design
      the security architecture for organizations computer systems. 
      Neverthless i am already able to select appropriate security 
      technologies.
      </h4>
      </ul>
      </article>
        

     <article className="service">
        <div className="service__head">
      <h3>IDENTITY AND ACCESS MANAGEMENT </h3>
      </div>
      <ul className="service__list">
        <li>
              <BiCheck className='service__list-icon'/> 
              <p>Password management </p>
        </li>
        <li>
              <BiCheck className='service__list-icon'/> 
              <p>Data encrytion(algorithms) </p>
        </li>
        <li>
              <BiCheck className='service__list-icon'/> 
              <p>Safe browsing methods </p>
        </li>
        <li>
              <BiCheck className='service__list-icon'/> 
              <p>Penetration testing</p>
        </li>
        <li>
              <BiCheck className='service__list-icon'/> 
              <p>Multi-factor authentication implementation</p>
        </li>
      </ul>
      </article>

      <article className="service">
        <div className="service__head">
      <h3>DATABASE DEVELOPMENT</h3>
      </div>
      <ul className="service__list">
        <li>
              <BiCheck className='service__list-icon'/> 
              <p>Database schemas </p>
        </li>
        <li>
              <BiCheck className='service__list-icon'/> 
              <p>Stored procedures development </p>
        </li>
        <li>
              <BiCheck className='service__list-icon'/> 
              <p>Database performance optimisation</p>
        </li>
      </ul>
      </article>

      </div>
    </section>
  );
}
export default Services;