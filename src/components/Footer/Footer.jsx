import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
// import GithubButtons from '../GithubButtons/GithubButtons';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          <a href="#" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - by {}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Saskia Leinberger
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
