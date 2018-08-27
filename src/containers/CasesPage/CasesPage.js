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


const message = 'A los grandes desafíos, grandes resultados:';
const highlight = 'Proyectos realizados';
const background = 'linear-gradient(rgba(50,50,50,.85),rgba(50,50,50,.3)),url(https://i.imgur.com/86qYcXo.jpg)';

export default class CasesPage extends Component {
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
