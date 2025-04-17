import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Skills from '../components/Skills/Skills';

const SkillsPage = () => {
  return (
    <div className="skills-page section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title skills-page-title">My Skills</h1>
          <p className="section-description text-center mb-5">
            Here are the technologies and tools I specialize in. I continuously expand my skill set to stay current with industry trends.
          </p>
          <Skills />
        </motion.div>
      </Container>
    </div>
  );
};

export default SkillsPage;