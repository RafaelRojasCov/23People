import React, { Component } from 'react'
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';

const StyledLogo = styled.img`
	display: flex;
	width: 200px;
	max-height: 200px;
	padding: .5em;
	margin: .5em .6em;
`;


export default class ClientCard extends Component {
	constructor(props){
		super(props);
		this.state = {
			isVisible: false,
			isActive: true
		}
	}

	handleVisibility = () => (e) => {
		this.setState({ isVisible: e, isActive: false})
	}

	componentDidMount(){
		this.setState({ isActive: true })
	}

	render(){
		const {src, alt, url} = this.props;
		const { isVisible, isActive } = this.state;
		
		return(
			<div>
				<VisibilitySensor onChange={(e) => this.handleVisibility()(e)} active={ isActive }>
					<a href={url}>
						<StyledLogo src={src} alt={alt} className={`animated ${ isVisible ? "fadeIn" : "fadeOut"}`}/>
					</a>
				</VisibilitySensor>
			</div>
		);
	}
}