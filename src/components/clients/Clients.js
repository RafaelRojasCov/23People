import React, { Component } from 'react'
import ClientCard from './ClientCard';
import styled from 'styled-components';
import { data } from './data';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center
  max-width: 850px;
  margin: auto;
`;


export default class Clients extends Component {
  render(){
    return(
      <div className="container mt-5 pb-5">
        <StyledContainer >
          {
            data.map(( el, i ) => {
                return (
                  <ClientCard
                    key={i}
                    src={el.src} 
                    alt={el.alt}
                    url={el.url}
                  />
                ); 
            })
          }
        </StyledContainer>
      </div>
    );
  }
}