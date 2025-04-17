import React, { useState, useEffect } from 'react';
import { Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { fetchSkills } from '../../services/api';
import Loader from '../Loader/Loader';
import './Skills.css';

const Skills = ({ limit }) => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await fetchSkills();
        console.log("Fetched skills data:", data); // Debug log
        setSkills(Array.isArray(data) ? data : data.skills || []);
      } catch (error) {
        console.error('Error loading skills:', error);
        setError('Failed to load skills. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  const getProficiencyPercentage = (proficiency) => {
    switch (proficiency.toLowerCase()) {
      case 'beginner': return 30;
      case 'intermediate': return 60;
      case 'advanced': return 85;
      case 'expert': return 95;
      default: return 50;
    }
  };

  const getVariant = (proficiency) => {
    switch (proficiency.toLowerCase()) {
      case 'beginner': return 'info';
      case 'intermediate': return 'success';
      case 'advanced': return 'warning';
      case 'expert': return 'danger';
      default: return 'primary';
    }
  };

  if (loading) {
    return <Loader message="Loading skills..." />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // Safely slice the skills array if limit is provided
  const displayedSkills = limit && Array.isArray(skills)
    ? skills.slice(0, limit)
    : skills;

  return (
    <div className="skills-container">
      <Row>
        {displayedSkills.map((skill, index) => (
          <Col key={skill._id || index} lg={4} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="skill-card">
                <Card.Body>
                  <div className="skill-header">
                    <Card.Title>{skill.name}</Card.Title>
                    <span className="years-badge">
                      {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'}
                    </span>
                  </div>
                  <div className="skill-progress">
                    <div className="d-flex justify-content-between mb-1">
                      <span>Proficiency</span>
                      <span className="proficiency-level">{skill.proficiency}</span>
                    </div>
                    <ProgressBar 
                      now={getProficiencyPercentage(skill.proficiency)} 
                      variant={getVariant(skill.proficiency)} 
                      animated 
                    />
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;

