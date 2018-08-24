import React, { Component } from 'react';
import Menu from '../../components/menu/Menu';
import Welcome from '../../components/welcome/Welcome';
import Reviews from '../../components/reviews/Reviews';
import Services from '../../components/services/Services';
import Introduction from '../../components/services/Introduction';
import Activities from '../../components/activities/Activities';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      	<Menu />
        <Welcome />
        <Reviews />
        <Introduction />
        <Services />
        <Activities />
      </div>
    );
  }
}
