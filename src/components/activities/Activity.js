import React, { Component } from 'react';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';

const Link = styled.a`
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
		background-color: #323940;
		text-decoration:none;
	}
`;

const StyledLogo = styled.img`
	max-width: 80%;
	max-height: 80px;
`;

const StyledDescription = styled.div`
	color:white;
	font-size: .9em;
	margin-top: 2em;
`;

export default class Activity extends Component{
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
		this.setState({ isActive: true });
	}

	render(){
		const { logo, description, url, name, title } = this.props;
		const { isVisible, isActive } = this.state;

		return(
			<VisibilitySensor onChange={this.handleVisibility} active={isActive}>
				<Link className={`col-sm-6 col-md-4 animated ${ isVisible ? "fadeIn" : "fadeOut"}`} href={ url }>
					<StyledLogo src={ logo } alt={ name } />
					<StyledDescription> <h5>{ title }</h5> <p>{ description }</p></StyledDescription>
				</Link>
			</VisibilitySensor>
		);
	}

}