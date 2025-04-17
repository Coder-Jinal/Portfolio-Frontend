import React, { useState, useEffect } from 'react';
import { Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { fetchExperiences } from '../../services/api';
import Loader from '../Loader/Loader';
import './Experience.css';

const Experience = ({ limit }) => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        const result = await fetchExperiences();
        console.log("Fetched experience data:", result);
        // Handle the {success: true, data: [...]} structure from your backend
        setExperiences(result.data || []);
      } catch (error) {
        console.error('Error loading experiences:', error);
        setError('Failed to load experience data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadExperiences();
  }, []);

  if (loading) {
    return <Loader message="Loading experience..." />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const displayedExperiences = limit && Array.isArray(experiences)
    ? experiences.slice(0, limit)
    : experiences;

  return (
    <div className="timeline">
      {displayedExperiences.map((experience, index) => (
        <motion.div 
          key={experience._id || index}
          className="timeline-item"
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="timeline-marker"></div>
          <Card className="timeline-content">
            <Card.Body>
              <div className="experience-header">
                <Card.Title className="job-title">{experience.title}</Card.Title>
                <span className="job-period">{experience.startDate} - {experience.endDate}</span>
              </div>
              <Card.Subtitle className="mb-3 company-name">
                {experience.company} • {experience.location}
              </Card.Subtitle>
              <Card.Text>{experience.description}</Card.Text>
              <div className="skills-used">
                {Array.isArray(experience.skills) &&
                  experience.skills.map((skill, idx) => (
                    <Badge key={idx} bg="primary" className="skill-badge">{skill}</Badge>
                  ))}
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
