// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// import { fetchPortfolioInfo } from '../../services/api';
// import './Footer.css';

// const Footer = () => {
//   const [portfolioInfo, setPortfolioInfo] = useState({});

//   useEffect(() => {
//     const loadPortfolioInfo = async () => {
//       try {
//         const data = await fetchPortfolioInfo();
//         setPortfolioInfo(data);
//       } catch (error) {
//         console.error('Error loading portfolio info:', error);
//       }
//     };

//     loadPortfolioInfo();
//   }, []);

//   return (
//     <footer className="footer bg-dark text-white">
//       <Container>
//         <Row className="py-4">
//           <Col md={4} className="mb-4 mb-md-0">
//             <h4>About Me</h4>
//             <p>
//               {portfolioInfo.summary || 'Passionate web developer with expertise in building modern, responsive web applications.'}
//             </p>
//           </Col>
//           <Col md={4} className="mb-4 mb-md-0">
//             <h4>Quick Links</h4>
//             <ul className="list-unstyled footer-links">
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/skills">Skills</Link></li>
//               <li><Link to="/experience">Experience</Link></li>
//               <li><Link to="/projects">Projects</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//             </ul>
//           </Col>
//           <Col md={4}>
//             <h4>Contact</h4>
//             <ul className="list-unstyled footer-contact">
//               <li><FaEnvelope className="icon" /> {portfolioInfo.email || 'example@email.com'}</li>
//               <li><span className="icon">📍</span> {portfolioInfo.location || 'Location'}</li>
//             </ul>
//             <div className="social-links mt-3">
//               <a 
//                 href={portfolioInfo.github} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="social-icon"
//               >
//                 <FaGithub />
//               </a>
//               <a 
//                 href={portfolioInfo.linkedin} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="social-icon"
//               >
//                 <FaLinkedin />
//               </a>
//             </div>
//           </Col>
//         </Row>
//         <hr className="footer-divider" />
//         <Row>
//           <Col className="text-center py-3">
//             <p className="mb-0">&copy; {new Date().getFullYear()} {portfolioInfo.name || 'Portfolio'}. All rights reserved.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { fetchPortfolioInfo } from '../../services/api';
import './Footer.css';

const Footer = () => {
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
    <footer className="footer bg-dark text-white">
      <Container>
        <div className="footer-layout py-4">
          <div className="footer-left">
            <div className="mb-4">
              <h4 className="about-me-title">About Me</h4>
              <p>
                {portfolioInfo.summary || 'Passionate web developer with expertise in building modern, responsive web applications.'}
              </p>
            </div>

            <div>
              <h4 className="contact-section-title">Contact</h4>
              <ul className="list-unstyled footer-contact">
                <li>
                  <a
                    href="mailto:jvpatel1812@gmail.com"
                    className="email-link"
                  >
                    <FaEnvelope className="icon" /> jvpatel1812@gmail.com
                  </a>
                </li>
                <li><span className="icon">📍</span> Guelph, ON</li>
              </ul>
              <div className="social-links mt-3">
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

          <div className="footer-right">
            <h4 className="quick-links-title">Quick Links</h4>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />
        <Row>
          <Col className="text-center py-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} Jinal Patel. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;