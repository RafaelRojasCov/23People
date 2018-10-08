import React, { Component } from 'react'
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledCard = styled.div`
	display: flex;
	width: 120px;
	height: 120px;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	color: white;
	background-color: #fac450;
	padding: 1.2em .5em;
	margin: .5em .6em;
	transition: background-color 0.4s ease;

	&:hover{
		background-color: #DEAE47;
		transition: background-color 0.4s ease;
	}
`;

const StyledText = styled.span`
	margin-top: .5em;
	line-height: 1em;
`;


export default class MarketCard extends Component {
	constructor(props){
		super(props);
		this.state = {
			isVisible: false,
			isActive: true
		}
	}

	handleVisibility = (e) => {
		this.setState({ isVisible: e, isActive: false});
	}

	componentDidMount(){
		this.setState({ isActive: true })
	}

	render(){
		const { icon, title } = this.props;
		const { isVisible, isActive } = this.state;
		const faLogo = Object.values(icon)[0];
		return(
			<VisibilitySensor onChange={this.handleVisibility} active={isActive}>
				<StyledCard className={`text-center animated ${ isVisible ? "fadeIn" : "fadeOut"}`}>
					<span><FontAwesomeIcon size="3x" icon={Object.values({faLogo})[0]} /></span>
					<StyledText>{title}</StyledText>
				</StyledCard>
			</VisibilitySensor>
		);
	}
}