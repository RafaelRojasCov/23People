import React, { Component } from 'react';
import List from './List';
import styled from 'styled-components';
import { data } from './data';

const StyledContainer = styled.div`
	min-height: 768px;
	background: #37454E;
`;

export default class Information extends Component {

	render(){
		return(
			<StyledContainer>
				<List information={ data } />
			</StyledContainer>
		);
	}

}