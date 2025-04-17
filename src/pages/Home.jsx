import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchPortfolioInfo } from '../services/api';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Loader from '../components/Loader/Loader';
import './Home.css';
import profileImg from '../assets/profile.jpeg';

const Home = () => {
  const [portfolioInfo, setPortfolioInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPortfolioInfo = async () => {
      try {
        const data = await fetchPortfolioInfo();
        setPortfolioInfo(data);
      } catch (error) {
        console.error('Error loading portfolio info:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioInfo();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section section hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1>Hello, I'm Jinal Patel</h1>
                <h2>Full Stack Developer</h2>
                <p className="hero-description">
                  Passionate about creating web applications with modern technologies.
                </p>
                <div className="hero-buttons">
                  <Button as={Link} to="/contact" variant="primary" className="me-3 contact-btn">
                    Contact Me
                  </Button>
                  <Button as={Link} to="/projects" variant="outline-primary">
                    View Projects
                  </Button>
                </div>
              </motion.div>
            </Col>
            <Col lg={6} className="hero-image-container">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="hero-image">
                  <img 
                    src={profileImg}
                    alt="Developer" 
                    className="img-fluid rounded-circle" 
                  />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section Preview */}
      <section className="section skills-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title home-skills-title">My Skills</h2>
            <Skills limit={6} />
            <div className="text-center mt-4">
              <Button as={Link} to="/skills" variant="outline-primary">
                View All Skills
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Experience Section Preview */}
      <section className="section experience-section bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title home-experiences-title">My Experience</h2>
            <Experience limit={2} />
            <div className="text-center experience-button-container mt-4">
              <Button as={Link} to="/experience" variant="outline-primary">
                View Full Experience
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Projects Section Preview */}
      <section className="section projects-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title home-projects-title">Featured Projects</h2>
            <Projects limit={3} />
            <div className="text-center projects-button-container mt-4">
              <Button as={Link} to="/projects" variant="outline-primary">
                View All Projects
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="section cta-section bg-primary text-white bg-primary-box">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-primary-container"
          >
            <h2>Interested in working together?</h2>
            <p className="mb-4">Let's discuss how I can contribute to your project!</p>
            <Button className="bg-primary-text"
              as={Link} 
              to="/contact" 
              variant="light" 
              size="lg"
            >
              Get In Touch
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Home;