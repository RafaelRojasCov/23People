import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
	max-width: 300px;
  padding: 1em;
  border: 0;
`;
const StyledMessage = styled.p`
  min-height: 300px;
`;

const StyledLogo = styled.img`
	width: 100%;
`;

const StyledName = styled.h1`
  font-size: 1.5em;
`;

const StyledPosition = styled.h1`
  font-size: .8em;
`;

const Comment = ({ id, message, logo, name, position, alt }) => {

	return(
		<div className="col-lg col-sm-6 col-xs-12">
			<StyledCard className="text-center mx-auto">
				<StyledMessage>{message}</StyledMessage>
				<StyledLogo className="mb-3 mt-5" alt={alt} src={logo}/>
				<StyledName>{name}</StyledName>
				<StyledPosition>{position}</StyledPosition>
			</StyledCard>
		</div>
	);

}

export default Comment;