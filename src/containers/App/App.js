import React, { Component } from 'react';
import Main from '../MainPage/Main';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CasesPage from '../CasesPage/CasesPage';
import HistoryPage from '../HistoryPage/HistoryPage';
import MarketsPage from '../MarketsPage/MarketsPage';
import ServicesPage from '../ServicesPage/ServicesPage';
import TeamPage from '../TeamPage/TeamPage';
import './App.css';
import 'animate.css/animate.min.css';

export default class App extends Component {
  render() {
    const browserHistory = createBrowserHistory();
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/successfull-cases/' component={CasesPage}/>
          <Route path='/aboutus/' component={HistoryPage}/>
          <Route path='/markets/' component={MarketsPage}/>
          <Route path='/services/' component={ServicesPage}/>
          <Route path='/tecnologias/' component={ServicesPage}/>
          <Route path='/team/' component={TeamPage}/>
        </Switch>
      </Router>
    );
  }
}
