import React, { Component } from 'react';
import Welcome from '../../components/welcome/Welcome';
import Reviews from '../../components/reviews/Reviews';
import Information from '../../components/blocks/Information';
import Introduction from '../../components/blocks/Introduction';
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
        <Information />
        <Activities />
        <Contact />
        <Footer />
      </div>
    );
  }
}