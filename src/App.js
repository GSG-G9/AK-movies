import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favourit from './Pages/Favourit';
import Privacy from './Pages/Privacy';
import About from './Pages/About';

class App extends React.Component {
  state = {
    searchValue: '',
    favourites: [],
  };

  searchInput = (value) => {
    if (value) {
      this.setState({
        searchValue: value,
      });
    }
  };

  AddFavouriteMovie = (movie) => {
    if (movie) {
      this.setState((prevState) => {
        console.log('hi');
        return { favourites: [movie, ...prevState.favourites] };
      });
    }
  };

  RemoveFavouriteMovie = (id) => {
    if (id) {
      this.setState((prevState) => {
      const filteredFavourites = prevState.favourites.filter(
        (movie) => {
          console.log(typeof movie.id)
          console.log(typeof id)
          console.log(id)
         return movie.id !== id
        }
      );
      console.log(filteredFavourites)
      console.log(this.state.favourites)
        return { favourites: filteredFavourites };
      });
    }
  };

  // RemoveFavouriteMovie = (id) => {
  //   const filteredFavourites = this.state.favourites.filter((movie) => movie.id !== id);
  //   this.setState({
  //     favourites: filteredFavourites,
  //   });
  // };

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
                  searchInput={this.searchInput}
                  searchValue={this.state.searchValue}
                  AddFavouriteMovie={this.AddFavouriteMovie}
                  favourites={this.state.favourites}
                />
              )}
            />
            <Route
              exact
              path="/favourit"
              component={()=> (<Favourit
              favourites={this.state.favourites}
              RemoveFavouriteMovie={this.RemoveFavouriteMovie}

              /> )} />
            <Route exact path="/privacy-policy" component={Privacy} />
            <Route exact path="/about-us" component={About} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
