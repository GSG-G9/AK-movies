import React, { Component } from "react";
import "./Header.css";



class SearchForm extends Component {  
  render() {
    return (
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search movie..."
          value
        />
      </div>
    );
  }
}
export default SearchForm;
