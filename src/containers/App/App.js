import React, { Component } from 'react';
import Main from '../MainPage/Main';
import { Route } from 'react-router-dom'
import CasesPage from '../CasesPage/CasesPage';
import HistoryPage from '../HistoryPage/HistoryPage';
import ServicesPage from '../ServicesPage/ServicesPage';
import TeamPage from '../TeamPage/TeamPage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
	      <Route exact path='/' component={Main}/>
	      <Route path='/successfull-cases' component={CasesPage}/>
	      <Route path='/aboutus' component={HistoryPage}/>
	      <Route path='/services' component={HistoryPage}/>
	      <Route path='/team' component={TeamPage}/>
      </div>
    );
  }
}
