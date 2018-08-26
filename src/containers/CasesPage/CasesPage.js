import React, { Component } from 'react';
import Menu from '../../components/menu/Menu';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import './App.css';

export default class CasesPage extends Component {
  render() {
    return (
      <div>
      	<Menu />
        <Contact />
        <Footer />
      </div>
    );
  }
}
