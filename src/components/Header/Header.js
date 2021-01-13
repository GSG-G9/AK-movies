import React, { Component } from "react";

import Favourit from "../../Pages/Favourit";
import "./Header.css";

class Header extends Component {
  state = {
    value: "",
  };

  handle = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
    if (e.target.value == "") {
      this.props.searchInput([]);
    } else
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-us&query=${e.target.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          this.props.searchInput(data.results);
        });
  };

  render() {
    return (
      <div className="flex-header">
        <img
          alt="logo"
          style={{ width: "8rem" }}
          src="https://i.ibb.co/WnsXTGb/movie-logo-design-text-reel-filmstrip-icons-decoration-6829232.jpg"
        />
        <div>
          <input
            className="search"
            type="text"
            placeholder="Search movie..."
            value={this.props.searchWord}
            onChange={this.handle}
          />
        </div>
        <Favourit />
      </div>
    );
  }
}

export default Header;
