import React from 'react';
import styled from 'styled-components';


const Link = styled.a`
	min-height: 100%;
	display: flex;
	max-width: 300px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: .2em 1em;
	border-radius: .4em;
	border: 0;
	margin: 1em auto 1em auto;

	&:hover {
		transition: background-color 0.4s ease;
		background-color: #323940;
		text-decoration:none;
	}
`;

const StyledLogo = styled.img`
	margin-top: 1em;
	max-width: 80%;
`;

const StyledDescription = styled.div`
	color:white;
	min-height: 150px;
	margin-top: 2em;
`;

const Activity = ({ id, logo, description, url, name }) => {

	return(
		<Link href={ url }>
			<StyledLogo src={ logo } alt={ name } />
			<StyledDescription>{ description }</StyledDescription>
		</Link>
	);

}

export default Activity;