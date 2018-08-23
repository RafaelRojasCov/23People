import React, { Component } from 'react';
import CardList from './CardList';
import styled from 'styled-components';
import { services } from './servicesData';

const StyledContainer = styled.div`
	min-height: 768px;
`;

export default class Services extends Component {

	render(){
		return(
			<StyledContainer>
				<CardList services={ services } />
			</StyledContainer>
		);
	}

}