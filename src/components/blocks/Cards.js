import React from 'react';
import styled from 'styled-components';
import './style.css';

const StyledCard = styled.div`
	display:flex;
	justify-content: center;
  background: ${props => props.background};
`;

const StyledButton = styled.button`
  color: white !important;
  border-color: rgba(255,255,255,1) !important;
  background-color: rgba(255,255,255,0) !important;
  border: solid 1px;
`;

const Card = ({id, title, description, url, background}) => {

		return(
			<StyledCard background={background} className="card-service">
				<div>
					<h2> {title} </h2>
					<p className="mb-5 mt-4">{description}</p>
					<a href={url} ><StyledButton className="btn btn-light btn-sm"> Más información </StyledButton></a>
				</div>
			</StyledCard>
		);

}

export default Card;