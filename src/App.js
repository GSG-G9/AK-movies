import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favourit from "./Pages/Favourit";
import Privacy from "./Pages/Privacy";
import About from "./Pages/About";

class App extends React.Component {
  state = {
    favourites: [],
  };

  AddFavouriteMovie = (movie) => {
    if (movie) {
      this.setState((prevState) => {
        return { favourites: [movie, ...prevState.favourites] };
      });
    }
  };

  RemoveFavouriteMovie = (id) => {
    if (id) {
      this.setState((prevState) => {
        const filteredFavourites = prevState.favourites.filter((movie) => {
          return movie.id !== id;
        });
        return { favourites: filteredFavourites };
      });
    }
  };

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  AddFavouriteMovie={this.AddFavouriteMovie}
                  favourites={this.state.favourites}
                />
              )}
            />
            <Route
              exact
              path="/favourit"
              component={() => (
                <Favourit
                  favourites={this.state.favourites}
                  RemoveFavouriteMovie={this.RemoveFavouriteMovie}
                />
              )}
            />
            <Route exact path="/privacy-policy" component={Privacy} />
            <Route exact path="/about-us" component={About} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
