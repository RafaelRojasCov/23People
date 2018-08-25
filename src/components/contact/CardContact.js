import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
	min-height: 100%;
	display: flex;
	max-width: 350px;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 2em 1em 1em 1em;
	border-radius: .4em;
	border: 0;
	margin: .5em auto .5em auto;

	&:hover {
		transition: background-color 0.4s ease;
		background-color: #ededed;
	}
`;

const CardContact = ({ id, title, phone, mail, photo, name }) => {

	return(
		<StyledCard className="col-md-6">
			<img src={photo} alt="" />
			<h5 className="mb-3"><strong>{title}</strong></h5>
			<span>Teléfono: {phone}</span>
			<span>E-mail: {mail}</span>
			<span>Nombre: {name}</span>
		</StyledCard>
	);

}

export default CardContact;