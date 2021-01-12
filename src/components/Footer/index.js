import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import './style.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div className="footer__copyright">
        <h3> &copy; Copyright 2021</h3>
      </div>
      <div className="footer__pages">
        <Link to="privacy-policy" className="footer__link">
          Privacy Policy
        </Link>
        <Link to="about-us" className="footer__link">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Footer;
