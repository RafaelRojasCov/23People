import React, { Component } from 'react';
import Main from '../MainPage/Main';
import { Route } from 'react-router-dom'
import CasesPage from '../CasesPage/CasesPage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
	      <Route exact path='/' component={Main}/>
	      <Route path='/successfull-cases' component={CasesPage}/>
      </div>
    );
  }
}
