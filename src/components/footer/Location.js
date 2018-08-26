import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
	color: white;
	text-decoration: none;
	&:hover{
		color: white;
		text-decoration: none;
	}
`;

const BoxContent = styled.div`
	color: white;
	display:flex;
	flex-direction: column;
	justify-content: flex-start;
	color: white;
	max-width: 200px;
	min-height: 120px;
	margin: 1em auto;
`;


const Location = () => {
	return(
		<BoxContent className="text-center">
			<h4>Ubicación</h4>
			<StyledLink href="https://bit.ly/2MSZ7cY">Román Díaz 445, Providencia. <br />Santiago, Chile.</StyledLink>
		</BoxContent>
	);
}

export default Location;