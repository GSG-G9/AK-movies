import React, { Component } from "react";
import propTypes from "prop-types";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import "../App.css";

class Home extends Component {
  state = {
    SearchMovies: [],
  };

  searchInput = (SearchMovies) => {
    this.setState({
      SearchMovies,
    });
  };

  render() {
    const { AddFavouriteMovie, favourites } = this.props;
    const { SearchMovies } = this.state;
    return (
      <div className="App">
        <Header searchInput={this.searchInput} />
        <Main SearchMovies={SearchMovies}
        AddFavouriteMovie={AddFavouriteMovie}
        favourites={favourites} />
        <Footer />
      </div>
    );
  }
}

Home.propType = {
  searchInput: propTypes.func,
  SearchMovies: propTypes.array,
  searchWord: propTypes.string,
  AddFavouriteMovie:propTypes.func,
  favourites:propTypes.array
}

export default Home;
