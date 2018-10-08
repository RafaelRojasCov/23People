import React, { Component } from 'react';
import styled from 'styled-components';
import './style.css';
import VisibilitySensor from 'react-visibility-sensor';

const StyledCard = styled.div`
	display:flex;
	justify-content: flex-start;
	flex-direction: column;
  background: ${props => props.background};
`;

const StyledButton = styled.button`
  color: white !important;
  border-color: rgba(255,255,255,1) !important;
  background-color: rgba(255,255,255,0) !important;
  border: solid 1px;
`;

export default class Card extends Component {
	constructor(props){
		super(props);
		this.state = {
			isVisible: false,
			isActive: true
		}
	}

	handleVisibility = (e) => {
		this.setState({ isVisible: e, isActive: false });
	}

	componentDidMount(){
		this.setState({ isActive: true });
	}

	render(){
		const { title, description, url, background } = this.props;
		const { isVisible, isActive } = this.state;
		return(
			<VisibilitySensor onChange={this.handleVisibility} active={isActive}>
				<StyledCard background={background} className={`card-service animated ${ isVisible ? "fadeIn" : "fadeOut"}`}>
					<h2> {title} </h2>
					<p className="mb-5 mt-4">{description}</p>
					<a href={url} ><StyledButton className="btn btn-light btn-sm"> Más información </StyledButton></a>
				</StyledCard>
			</VisibilitySensor>
		);
	}
}