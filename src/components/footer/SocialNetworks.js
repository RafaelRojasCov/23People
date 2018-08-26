import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faPhoneSquare } from '@fortawesome/fontawesome-free-solid';

const BoxContent = styled.div`
	display:flex;
	flex-direction: column;
	justify-content: flex-start;
	color: white;
	max-width: 200px;
	min-height: 120px;
	margin: 1em auto;
`;

const StyledLink = styled.a`
	color: white;
	text-decoration: none;
	&:hover{
		color: white;
		text-decoration: none;
	}
`;

const StyledIcons = styled.div`
	font-size: 2em;
	display:flex;
	justify-content: space-around;
`;


const SocialNetworks = () => {
	return(
		<BoxContent>
			<h4 className="text-center">Contacto</h4>
			<StyledIcons>
				<StyledLink href="https://www.facebook.com/23people" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebook} /></StyledLink>
				<StyledLink href="https://www.twitter.com/23people" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faTwitter} /></StyledLink>
				<StyledLink href="mailto:contacto@23people.io" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faEnvelope} /></StyledLink>
				<StyledLink href="https://www.23people.io/aboutus" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faPhoneSquare} /></StyledLink>
			</StyledIcons>
		</BoxContent>
	);
}

export default SocialNetworks;