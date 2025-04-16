import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { fetchProjects } from '../../services/api';
import Loader from '../Loader/Loader';
import './Projects.css';

const Projects = ({ limit }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        console.log("Fetched project data:", data);
        setProjects(Array.isArray(data) ? data : data.projects || []);
      } catch (error) {
        console.error('Error loading projects:', error);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return <Loader message="Loading projects..." />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const displayedProjects = limit && Array.isArray(projects)
    ? projects.slice(0, limit)
    : projects;

  return (
    <Row>
      {displayedProjects.map((project, index) => (
        <Col key={project._id || index} lg={4} md={6} className="mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="project-card h-100">
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="tech-stack">
                  {Array.isArray(project.techStack) &&
                    project.techStack.map((tech, idx) => (
                      <Badge key={idx} bg="light" text="dark" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                </div>
              </Card.Body>
              <Card.Footer className="project-links">
                {project.githubUrl && (
                  <Button 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="outline-dark"
                    size="sm"
                    className="me-2"
                  >
                    <FaGithub className="me-1" /> GitHub
                  </Button>
                )}
                {project.projectUrl && (
                  <Button 
                    href={project.projectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="outline-primary"
                    size="sm"
                  >
                    <FaExternalLinkAlt className="me-1" /> Live Demo
                  </Button>
                )}
              </Card.Footer>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default Projects;
