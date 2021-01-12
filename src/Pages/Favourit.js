import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Favourit extends Component {
  render() {
    return (
      <h3>
        <Link to="/favourit" style={{ color: '#fff', textDecoration:'none' }}>
          Favourit
        </Link>
      </h3>
    );
  }
}

export default Favourit;
