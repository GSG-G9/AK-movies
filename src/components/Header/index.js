import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

class Header extends Component {
  state = {
    value: '',
  };

  handle = (e) => {
    this.setState({ value: e.target.value });
    if (e.target.value == "") {
      this.props.searchInput([]);
    } else
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-us&query=${e.target.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.props.searchInput(data.results);
        });
  };

  render() {
    return (
      <div className="header">
        <img
          alt="logo"
          src="https://i.ibb.co/WnsXTGb/movie-logo-design-text-reel-filmstrip-icons-decoration-6829232.jpg"
        />
        <div>
          <input
            className="header__search"
            type="text"
            placeholder="Search movie..."
            value={this.props.searchWord}
            onChange={this.handle}
          />
        </div>
        <h3>
          <Link
            to="/favourit"
            className="header__favorite"
          >
            Favourit
          </Link>
        </h3>
      </div>
    );
  }
}

export default Header;
