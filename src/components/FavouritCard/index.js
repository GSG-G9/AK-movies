import React from 'react';
import RemoveFavourite from '../RemoveِFavourites/RemoveِFavourites';

const API_URL = 'https://api.themoviedb.org/3/';
const IMAGE_URL = 'https://image.tmdb.org/t/p/';
const BACKDROP_SIZES = 'w1280';
const POSTER_SIZES = 'w500';
class Main extends React.Component {
  state = {
    movies: [],
    id: 0,
  };

  render() {
    console.log(this.props.favourites);
    return (
      <div className="container">
        <ul>
          {this.props.favourites.length !== 0 ? (
            this.props.favourites.map((movie) => (
              <li key={movie.id} className="image-container">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div onClick={()=>this.props.RemoveFavouriteMovie(movie.id)} className="overlay" >
                <RemoveFavourite />
              </div>
                <p>{movie.title}</p>
                <div>
                  <span>{movie.vote_average}</span>
                </div>
              </li>
            ))
          ) : (
            <h3>No Items</h3>
          )}
        </ul>
      </div>
    );
  }
}

export default Main;
