import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

class Header extends Component {
  state = {
    value: '',
  };

  handle = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="flex-header">
        <img
          alt="logo"
          style={{ width: '8rem' }}
          src="https://i.ibb.co/WnsXTGb/movie-logo-design-text-reel-filmstrip-icons-decoration-6829232.jpg"
        />
        <h3>
          <Link
            to="/"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Home
          </Link>
        </h3>
      </div>
    );
  }
}

export default Header;
