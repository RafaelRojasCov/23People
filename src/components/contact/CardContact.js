import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
	min-height: 100%;
	display: flex;
	max-width: 350px;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: .5em 1em;
	border-radius: .4em;
	border: 0;
	margin: .5em auto .5em auto;

	&:hover {
		transition: background-color 0.4s ease;
		background-color: #ededed;
	}
`;

const StyledPhoto = styled.img`
	width: 100px;
	height: ${props => props.src ? '100px' : '0px'};
	object-fit: cover;
	border-radius: .4em;
	border: 0;
	margin: 1em auto;
`;

const StyledPhone = styled.a`
	text-decoration: none;
	&:hover{
		text-decoration: none;
	}
`;

const StyledEmail = styled.a`
	text-decoration: none;
	&:hover{
		text-decoration: none;
	}
`;

const CardContact = ({ id, title, phone, mail, photo, name }) => {

	return(
		<StyledCard className="col-md-6">
			<StyledPhoto src={photo} alt={name} />
			<h5 className="mb-2 text-center"><strong>{title}</strong></h5>
			<StyledPhone className="custom-blue" href={ `tel: ${phone}`}>{phone}</StyledPhone>
			<StyledEmail className="custom-blue" href={ `mailto: ${mail}`}>{mail}</StyledEmail>
			<span>{name}</span>
		</StyledCard>
	);

}

export default CardContact;