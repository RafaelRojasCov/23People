import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
  margin-top: -79px;
  padding-top: 80px;
  background: 
  	linear-gradient(
      rgba(62,71,79,.85), 
      rgba(62,71,79,.85)
    ), 
    url(https://i.imgur.com/L3tO6zQ.png);
  background-size: cover;
  background-position: bottom;
`;

const StyledTitle = styled.h2`
  color: white;
`;

export default class Introduction extends Component {

	render(){
		return(
			<StyledBlock>
				<div className="container">
					<StyledTitle className="text-center">
						Nuestro objetivo es simple:<br/>
						<span className="custom-yellow">transformarnos en un partner tecnológico</span> en el cual confiar humana y profesionalmente.
					</StyledTitle>
				</div>
			</StyledBlock>
		);
	}

}