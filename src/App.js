import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Favourit from './components/Header/Favourit';
import './App.css';
import Footer from './components/Footer';
import Privacy from './Pages/Privacy';
import About from './Pages/About';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <h1>Hello</h1>
            <Footer />
          </div>
          <Switch>
            <Route exact path="/privacy-policy" component={Privacy} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/" component={Header} />
            <Route exact path="/favourit" component={Favourit} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
