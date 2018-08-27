import React, { Component } from 'react';
import Welcome from '../../components/welcome/Welcome';
import Reviews from '../../components/reviews/Reviews';
import Services from '../../components/services/Services';
import Introduction from '../../components/services/Introduction';
import Activities from '../../components/activities/Activities';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Menu from '../../components/menu/Menu';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Welcome />
        <Reviews />
        <Introduction />
        <Services />
        <Activities />
        <Contact />
        <Footer />
      </div>
    );
  }
}