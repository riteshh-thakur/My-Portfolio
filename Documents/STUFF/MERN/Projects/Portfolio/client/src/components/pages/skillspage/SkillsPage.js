



import React, { useState, useEffect } from 'react';
import skillsData from './SkillsData';
import './css/SkillsPage.css';
import { Text } from "stelios";
import Loader from '../../Loader/Loader'; // Import the Loader component

const SkillsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to display the loader (e.g., data fetching)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <Loader />
          {/* <p>Loading Skills...</p> */}
        </div>
      ) : (
        <div className="skills-container">
          <h2 className="skills-title">
            <Text>My Skills</Text>
          </h2>
          <div className="skills-list">
            {skillsData.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsPage;
