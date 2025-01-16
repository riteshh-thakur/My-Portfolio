

import React from 'react';
import LineDiamondLine from '../ui/linediamondline/LineDiamondLine';
import './css/SkillSet.css';
import { Link, Text } from 'stelios';
import { IconArrowRight } from '@tabler/icons-react';
import skillData from './skillData';

const SkillSet = ({ title }) => {
  return (
    <div className="skill-set-wrapper">
      {/* Decorative Line with Diamond */}
      <LineDiamondLine />

      {/* Title Section with Link */}
      <Link
        href="/skills"
        color="primary"
        size="large"
        className="skill-set-title"
        style={{
          marginTop: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Text size="large" color="primary">
          {title}
        </Text>
        <IconArrowRight />
      </Link>

      {/* Skill Items Section */}
      <div className="skill-set-item-wrapper" style={{ marginTop: '2rem' }}>
        <div className="skills-list">
          {skillData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Decorative Line */}
      <LineDiamondLine />
    </div>
  );
};

export default SkillSet;
