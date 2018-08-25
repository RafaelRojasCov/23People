import React, { Component } from 'react';
import BtnWeHelp from '../buttons/WeHelp';
import ContactList from './ContactList';
import { contacts } from './contactsData';
import styled from 'styled-components';


const StyledContainer = styled.div`
	display:block;
	min-height: 400px;
	width:100%;
	background-color: white;
`;

const ButtonSize = styled.div`
	max-width: 320px;
`;


export default class Contact extends Component {
	render(){
		return(
			<StyledContainer className="custom-blue pb-5">
				<div className="container pt-5">
					<h2 className="text-center mb-4 p-2">¿Necesitas una <span className="custom-yellow">solución</span>?</h2>
					<ButtonSize className="mx-auto mb-4">
						<BtnWeHelp />
					</ButtonSize>
					<ContactList contacts={ contacts } />
				</div>
			</StyledContainer>
		);
	}
}

