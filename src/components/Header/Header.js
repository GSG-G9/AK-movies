import React, { Component } from "react";

import Favourit from "../../Pages/Favourit";
import "./Header.css";

class Header extends Component {
  state = {
    value: "",
  };

  handle=(e) => {
    this.setState({ value: e.target.value });
  }

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
            value={this.state.value}
            onChange={this.handle}
          />
          <input type="button" value="Search" onClick={()=>{this.props.searchInput(this.state.value)}} />
        </div>
        <Favourit />
      </div>
    );
  }
}

export default Header;
