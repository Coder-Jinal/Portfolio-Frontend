import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Experience from '../components/Experience/Experience';

const ExperiencePage = () => {
  return (
    <div className="experience-page section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title experiences-page-title">My Experience</h1>
          <p className="section-description text-center mb-5">
            My professional journey has equipped me with valuable skills and knowledge in software development.
          </p>
          <Experience />
        </motion.div>
      </Container>
    </div>
  );
};

export default ExperiencePage;