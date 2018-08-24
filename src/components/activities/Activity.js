import React from 'react';
import styled from 'styled-components';


const Link = styled.a`
	min-height: 100%;
	display: flex;
	max-width: 300px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 2em 1em 1em 1em;
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
	max-width: 80%;
`;

const StyledDescription = styled.p`
	color:white;
	font-size: .9em;
	margin-top: 2em;
`;

const Activity = ({ id, logo, description, url, name, title }) => {

	return(
		<Link href={ url }>
			<StyledLogo src={ logo } alt={ name } />
			<StyledDescription> <h5>{ title }</h5> { description }</StyledDescription>
		</Link>
	);

}

export default Activity;