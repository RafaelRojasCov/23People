import React from 'react';
import styled from 'styled-components';

const BoxLinks = styled.div`
	color: white;
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

const StyledList = styled.ul`
	list-style-type: none;
	padding-left: 1em;
`;


const InterestedLinks = () => {
	return(
		<BoxLinks>
			<h4 className="text-center">Links de interés</h4>
			<StyledList>
				<li><StyledLink href="https://www.getonbrd.cl/23people">Trabaja con nosotros</StyledLink></li>
				<li><StyledLink href="https://www.medium.com/blog/23people">Blog 23People</StyledLink></li>
				<li><StyledLink href="https://www.facebook.com/23people">Noticias</StyledLink></li>
				<li><StyledLink href="https://www.23people.io/aboutus">Acerca de nosotros</StyledLink></li>
			</StyledList>
		</BoxLinks>
	);
}

export default InterestedLinks;