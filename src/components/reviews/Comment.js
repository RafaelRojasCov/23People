import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
	margin: auto;
	max-width: 700px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 1fr;

	@media (max-width: 991px){
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
	}
`;
const StyledMessage = styled.p`
	min-height: 200px;
	text-align: justify;
`;

const StyledLogo = styled.img`
	max-width: 150px;
`;

const StyledName = styled.h1`
  font-size: 1.5em;
`;

const StyledPosition = styled.h1`
  font-size: .8em;
`;

const Identity = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const StyledPhoto = styled.div`
	height: 200px;
	width: 150px;
	display: block;
  border-radius: 4px;
	background: url(${ props => props.photo});
	background-size: cover;
	background-position: 50% 50%;
`;

const ElementGrid = styled.div`
	min-width: 250px;
	width: 80%;
	margin-left: auto;
	margin-right: auto;
`;

const Comment = ({ id, message, logo, name, photo, position, alt }) => {
	return(
		<div className="mx-4">
			<StyledCard>
				<ElementGrid>
					<Identity>
						<StyledPhoto photo={photo}/>
						<StyledLogo className="mb-1 mt-3" alt={alt} src={logo}/>
						<StyledName className="mb-1 mt-2">{name}</StyledName>
						<StyledPosition className="mb-3">{position}</StyledPosition>
					</Identity>
				</ElementGrid>
				<ElementGrid>
					<StyledMessage>{message}</StyledMessage>
				</ElementGrid>
			</StyledCard>
		</div>
	);

}

export default Comment;