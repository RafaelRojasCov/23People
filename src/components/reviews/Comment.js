import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
	max-width: 300px;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
  padding: 1em;
  border: 0;
`;
const StyledMessage = styled.p`
  min-height: 200px;
`;

const StyledLogo = styled.img`
	max-width: 80%;
`;

const StyledName = styled.h1`
  font-size: 1.5em;
`;

const StyledPosition = styled.h1`
  font-size: .8em;
`;

const Comment = ({ id, message, logo, name, position, alt }) => {

	return(
		<div className="mx-auto col-lg col-sm-6 col-xs-12">
			<StyledCard className="mx-auto text-center">
				<StyledMessage>{message}</StyledMessage>
				<div>
					<StyledLogo className="mb-3 mt-5" alt={alt} src={logo}/>
					<StyledName>{name}</StyledName>
					<StyledPosition>{position}</StyledPosition>
				</div>
			</StyledCard>
		</div>
	);

}

export default Comment;