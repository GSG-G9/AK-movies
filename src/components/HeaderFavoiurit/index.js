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
      <div className="header">
        <img
          alt="logo"
          src="https://i.ibb.co/WnsXTGb/movie-logo-design-text-reel-filmstrip-icons-decoration-6829232.jpg"
        />
        <h3>
          <Link
            to="/"
            className="header__favorite"
          >
            Home
          </Link>
        </h3>
      </div>
    );
  }
}

export default Header;
