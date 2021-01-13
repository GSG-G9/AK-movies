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
    if(this.props.searchValue !== ""){
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-us&query=${this.props.searchValue}`
        )
        .then((res)=>res.json())
        .then((data) =>{
          console.log(data.results);
          this.setState({
            movies:data.results
          })
        })
      }else {
        fetch(
          `${API_URL}trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => {
            this.setState({
              movies: [...data.results],
            });
          });
      }
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <ul>
          {movies.length !==0 ? movies.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
              <div>
                <span>{movie.vote_average}</span>
              </div>
            </li>
          )): <h3>Not found</h3>}
        </ul>
      </div>
    );
  }
}

export default Main;
