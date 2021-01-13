import React from "react";
import "./style.css";
import AddFavourite from "../ِAddFavourites/AddFavourite";

const API_URL = "https://api.themoviedb.org/3/";
class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(
      `${API_URL}trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      });
  }

  render() {
    const { AddFavouriteMovie } = this.props;
    return (
      <div className="container">
        <ul>
          {this.props.SearchMovies.length > 0
            ? this.props.SearchMovies.map((movie) => (
                <Movie
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  vote={movie.vote_average}
                  movie={movie}
                  AddFavouriteMovie={AddFavouriteMovie}
                />
              ))
            : this.state.movies.length > 0 &&
              this.state.movies.map((movie) => (
                <Movie
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  vote={movie.vote_average}
                  movie={movie}
                  AddFavouriteMovie={AddFavouriteMovie}
                />
              ))}
        </ul>
      </div>
    );
  }
}

const Movie = ({ poster, title, vote, movie, AddFavouriteMovie }) => {
  return (
    <li className="image-container">
      <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt={title} />
      <div onClick={() => AddFavouriteMovie(movie)} className="overlay">
        <AddFavourite />
      </div>
      <p>{title}</p>
      <div>
        <span>{vote}</span>
      </div>
    </li>
  );
};

export default Main;
