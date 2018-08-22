import React, { Component } from 'react';
import Menu from '../../components/menu/Menu';
import Welcome from '../../components/welcome/Welcome';
import Reviews from '../../components/reviews/Reviews';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      	<Menu />
        <Welcome />
        <Reviews />
      </div>
    );
  }
}
