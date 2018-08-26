import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
	margin: 1em auto;
	min-height: 120px;
	max-width: 200px;
	display:flex;
	align-items: center;
	justify-content: center;
`;


const LogoAlternate = () => {
	return(
		<StyledLogo>
			<a href="https://www.23people.io/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/8sMU5aD.png" alt="logo-alternate" /></a>
		</StyledLogo>
	);
}

export default LogoAlternate;