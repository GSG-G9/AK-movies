import React from 'react';
import propTypes from 'prop-types';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import '../App.css';

const Home = (props) => {
  const { searchInput, searchValue, AddFavouriteMovie, favourites } = props;

  return (
    <div className="App">
      <Header searchInput={searchInput} />
      <Main
        searchValue={searchValue}
        handleFavourites={AddFavouriteMovie}
        favourites={favourites}
      />
      <Footer />
    </div>
  );
};

Home.propType = {
  searchInput: propTypes.func,
  searchValue: propTypes.string,
};
export default Home;
