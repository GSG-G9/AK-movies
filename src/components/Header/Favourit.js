import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Favourit extends Component {
  render() {
    return (
      <h3>
        <Link to="/favourit">Favourit</Link>
      </h3>
    );
  }
}

export default Favourit;
