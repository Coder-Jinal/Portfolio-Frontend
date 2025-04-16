// src/pages/ProjectsPage.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Projects from '../components/Projects/Projects';

const ProjectsPage = () => {
  return (
    <div className="projects-page section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title projects-page-title">My Projects</h1>
          <p className="section-description text-center mb-5">
            A collection of my work and personal projects.
          </p>
          <Projects />
        </motion.div>
      </Container>
    </div>
  );
};

export default ProjectsPage;