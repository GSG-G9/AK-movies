import React from "react";
import "./style.css";

const API_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/";
const BACKDROP_SIZES = "w1280";
const POSTER_SIZES = "w500";
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
            movies: data.results
          });
        });
  }

  render() {
    return (
      <div>
      <ul>
        {this.props.SearchMovies.length > 0
          ? this.props.SearchMovies.map((movie) => (
              <Movie
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                vote={movie.vote_average}
              />
            ))
          : this.state.movies.length > 0 &&
            this.state.movies.map((movie) => (
              <Movie
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                vote={movie.vote_average}
              />
            ))}
      </ul>
    </div>
    );
  }
}

const Movie = ({ poster, title, vote }) => {
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt={title} />
      <p>{title}</p>
      <div>
        <span>{vote}</span>
      </div>
    </li>
  );
};

export default Main;
