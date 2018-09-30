import React, { Component } from 'react';
import Menu from 'components/menu/Menu';
import Contact from 'components/contact/Contact';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Team from 'components/team/Team';
import Carousel from 'components/team/Carousel';
import PageDescription from 'components/subpage-description/PageDescription';
import { data } from './Description';
import styled from 'styled-components';

const StyledPage = styled.div`
  background-color: #f5f5f5;
`;

export default class TeamPage extends Component {
  render() {
    return (
      <StyledPage>
      	<Menu />
      	<Header message={ data.message } highlight={ data.highlight } background={ data.background } />
        <PageDescription title={ data.title } content={ data.content } 
                        subtitle={data.subtitle} subcontent={data.subcontent}/>
        <Team />
        <Carousel />
        <Contact />
        <Footer />
      </StyledPage>
    );
  }
}