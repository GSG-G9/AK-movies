import React, { Component } from 'react';

import SearchForm from './Search';
import Favourit from '../../Pages/Favourit';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="flex-header">
        <img
          style={{ width: '8rem' }}
          src="https://i.ibb.co/WnsXTGb/movie-logo-design-text-reel-filmstrip-icons-decoration-6829232.jpg"
        />
        <SearchForm />
        <Favourit />
      </div>
    );
  }
}

export default Header;
