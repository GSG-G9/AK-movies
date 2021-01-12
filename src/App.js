import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Favourit from './components/Header/Favourit';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/favourit" component={Favourit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
