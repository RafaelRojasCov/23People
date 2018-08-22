import React, { Component } from 'react';
import Welcome from '../../components/welcome/Welcome';
import Menu from '../../components/menu/Menu';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      	<Menu />
        <Welcome />
      </div>
    );
  }
}
