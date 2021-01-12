import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favourit from "./Pages/Favourit";
import Privacy from "./Pages/Privacy";
import About from "./Pages/About";

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  state = {
    searchValue: "",
  };

  searchInput=(value) =>{
  console.log(value);
  if(value){
this.setState({
  searchValue: value
})}
  }


  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home searchInput={this.searchInput} searchValue={this.state.searchValue}/>}
            />
            <Route exact path="/favourit" component={Favourit} />
            <Route exact path="/privacy-policy" component={Privacy} />
            <Route exact path="/about-us" component={About} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
