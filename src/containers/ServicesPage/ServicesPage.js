import React, { Component } from 'react';
import Menu from 'components/menu/Menu';
import Contact from 'components/contact/Contact';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Services from 'components/services/Services';
import Technologies from 'components/services/Technologies';
import Cloud from 'components/services/Cloud';
import Languages from 'components/services/Languages';
import PageDescription from 'components/subpage-description/PageDescription';
import { data } from './Description';
import styled from 'styled-components';

const StyledPage = styled.div`
  background-color: #f5f5f5;
`;


export default class ServicesPage extends Component {
  render() {
    return (
      <StyledPage>
      	<Menu />
      	<Header message={ data.message } highlight={ data.highlight } background={ data.background } />
        <div className="container">
          <PageDescription title={ data.title } content={ data.content } />
          <Services />
          <Technologies />
          <Cloud />
          <Languages />
        </div>
        <Contact />
        <Footer />
      </StyledPage>
    );
  }
}