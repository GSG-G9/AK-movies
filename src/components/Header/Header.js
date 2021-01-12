import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import SearchForm from './Search';
import Favourit from './Favourit';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="flex-header">
        <img
          style={{ width: '1.5rem' }}
          src="https://www.flaticon.com/svg/vstatic/svg/4014/4014404.svg?token=exp=1610415986~hmac=62619546a886187dc49205d8ebcb75a4"
        />
        <SearchForm />
        <Favourit />
      </div>
    );
  }
}

export default Header;
