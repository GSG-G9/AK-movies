import React from 'react';
import propTypes from 'prop-types';
import HeaderFavoiurit from '../components/HeaderFavoiurit';
import FavouritCard from '../components/FavouritCard';
import Footer from '../components/Footer';
// import AddFavourite from '../components/ِAddFavourites/AddFavourite';
import '../App.css';

const Favourit = (props) => {
  const { favourites, RemoveFavouriteMovie } = props;

  return (
    <div className="App">
      <HeaderFavoiurit />
      <FavouritCard
        favourites={favourites}
        RemoveFavouriteMovie={RemoveFavouriteMovie}
      />
      <Footer />
    </div>
  );
};

Favourit.propType = {
  searchInput: propTypes.func,
  searchValue: propTypes.string,
};
export default Favourit;
