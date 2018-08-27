import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.div`
	min-height: 330px;
	color: white;
	display:flex;
	justify-content: center;
	align-items: center;
  background: ${ props => props.background };
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;

const Header = ({ message, highlight, background }) => {
	return(
		<StyledHeader background={background} className="text-center">
			<h2>{message}<br/><span className="custom-yellow">{highlight}</span></h2>
		</StyledHeader>
	);
}

export default Header;



		
