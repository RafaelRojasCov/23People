import React, { Component } from 'react'
import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	width: 230px;
	height: 320px;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: .5em .6em;
`;

const StyledText = styled.div`
	width: 100%;
	background-color: white;
	padding: .5em .2em;
`;

const StyledPhoto = styled.div`
	display:flex;
	background: url(${props => props.background});
	background-size: 100%;
	height: 100%;
	width: 100%;
`;


export default class TeamCard extends Component {
	render(){
		const { photo, name, position } = this.props;
		return(
			<StyledCard className="text-center custom-blue rounded">
				<StyledPhoto className="rounded-top" background={photo} />
				<StyledText className="rounded-bottom">
					<h5>{name}</h5>
					<span>{position}</span>
					</StyledText>
			</StyledCard>
		);
	}
}