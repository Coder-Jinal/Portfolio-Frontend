import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { fetchPortfolioInfo } from '../../services/api';
import './Header.css';

const Header = () => {
  const [portfolioInfo, setPortfolioInfo] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

    const handleScroll = () => {
      // Only track if scrolled beyond threshold for visual changes
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      fixed="top" 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Jinal Patel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="d-lg-none" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/skills" 
              className={location.pathname === '/skills' ? 'active' : ''}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/experience" 
              className={location.pathname === '/experience' ? 'active' : ''}
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects" 
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


