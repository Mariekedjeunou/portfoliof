 import React, { useState, useEffect } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import axios from "axios";

const ListExperiences = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getExperiences();
  }, []);

  const getExperiences = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/experience/experiences"
    );
    setData(response.data.experience);
  };
  return data.map((d) => {
    return (
      <div className="experience__programming">
        <h3>Languages programming</h3>
        <h4 className="experience_description">{d.description}</h4>
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
                <small className="text-light">Started</small>
              </article>
        </div>
      </div>
    );
  });
};
export default ListExperiences;
