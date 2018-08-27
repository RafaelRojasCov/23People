import React from 'react'
import styled from 'styled-components';

const StyledCard = styled.div`
	min-height: 300px;
	border-radius: .5em;
	background-color: white;
	margin: auto auto 1em auto;
	padding: 1em;
`;

const StyledLink = styled.a`
	color: #2f2f2f;
	text-decoration: none;

	&:hover{
		color: #2f2f2f;
		text-decoration: none;
	}
`;

const StyledLogo = styled.img`
	max-height: 100px;
	max-width: 200px;
	margin: 1em auto;
`;

const StyledImage = styled.div`
	max-width: 600px;
	max-height: 300px;
	height: 100%;
	width: 100%;
	margin: auto;
	display:flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	border-radius: .3em;
`;

const CasesCard = ({id, title, logo, description, url, image, client }) => {
	return(
		<StyledLink href={url} target="_blank" rel="noopener noreferrer">
			<StyledCard className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg">
						<div className="text-center mb-3">
							<StyledLogo src={logo} alt={client}/>
							<h3>{title}</h3>
						</div>
						<p className="text-justify">{description}</p>
					</div>

					<div className="col-xs-12 col-sm-12 col-md-12 col-lg">
						<StyledImage>
							<img className="w-100" src={image} alt={title} />
						</StyledImage>
					</div>
				</div>
			</StyledCard>
		</StyledLink>
	);
}

export default CasesCard;
