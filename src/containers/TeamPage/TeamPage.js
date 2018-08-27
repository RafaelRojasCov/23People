import React, { Component } from 'react';
import Menu from '../../components/menu/Menu';
import Contact from '../../components/contact/Contact';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import CasesList from '../../components/successfull-cases/CasesList';
import styled from 'styled-components';

const StyledPage = styled.div`
  background-color: #f5f5f5;
`;


const message = 'Las personas son el mayor activo del equipo y nuestra preocupación es ';
const highlight = 'resolver los problemas de nuestros clientes creando equipos efectivos';
const background = 'linear-gradient(rgba(50,50,50,.85),rgba(50,50,50,.3)),url(https://i.imgur.com/86qYcXo.jpg)';

export default class TeamPage extends Component {
  render() {
    return (
      <StyledPage>
      	<Menu />
      	<Header message={ message } highlight={ highlight } background={ background } />
        <CasesList />
        <Contact />
        <Footer />
      </StyledPage>
    );
  }
}