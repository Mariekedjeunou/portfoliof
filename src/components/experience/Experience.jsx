import React from 'react';
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import ListExperiences from "./components/listExperiences";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
      <div className="experience__programming">
        <h3>LANGUAGES PROGRAMMING</h3>
        <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details__icon" />
                  <h4>C</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details__icon" />
                  <h4>C++</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details__icon" />
                  <h4>JAVA</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details__icon" />
                  <h4>PYTHON</h4>
                <small className="text-light">Basic</small>
              </article>
        </div>
      </div>
       
      <div className="experience__cryptography">
      <h3>CRYPTOGRAPHY</h3>
        <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details__icon" />
                  <h4>Caesar cipher</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details__icon" />
                  <h4>Vigenere cipher</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details__icon" />
                  <h4>Playfair cipher</h4>
                <small className="text-light">Intermediate</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details__icon" />
                  <h4>Columnar transposition</h4>
                <small className="text-light">Experienced</small>
              </article>
        </div>
      </div> 
      </div>
    </section>
  );
};
export default Experience;
