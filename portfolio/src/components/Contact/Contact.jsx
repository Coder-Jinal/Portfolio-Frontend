import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fetchPortfolioInfo } from '../../services/api';
import './Contact.css';

const Contact = () => {
  const [portfolioInfo, setPortfolioInfo] = useState({});

  useEffect(() => {
    const loadPortfolioInfo = async () => {
      try {
        const data = await fetchPortfolioInfo();
        setPortfolioInfo(data);
      } catch (error) {
        console.error('Error loading portfolio info:', error);
      }
    };

    loadPortfolioInfo();
  }, []);

  return (
    <section className="contact-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Row className="justify-content-center">
            <Col lg={6} md={8}>
              <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Feel free to reach out to me through any of these channels.</p>

                <div className="contact-item">
                  <div className="icon-container">
                    <a
                      href="mailto:jvpatel1812@gmail.com"
                      className="icon-link"
                    >
                      <FaEnvelope className="icon" />
                    </a>
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>jvpatel1812@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-container">
                    <FaMapMarkerAlt className="icon" />
                  </div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>Guelph, ON</p>
                  </div>
                </div>

                <div className="social-media-links">
                  <h4>Connect with me</h4>
                  <div className="social-icons">
                    <a
                      href="https://github.com/Coder-Jinal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jinalpatel1812/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
