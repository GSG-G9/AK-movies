import React, { Component } from 'react';
import propTypes from 'prop-types';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import '../App.css';

const Home = (props) => {
  return (
    <div className="App">
      <Header searchInput={props.searchInput} />
      <Main searchValue={props.searchValue} />
      <Footer />
    </div>
  );
};

Home.propType = {
  searchInput: propTypes.func,
  searchValue:propTypes.string,
};
export default Home;