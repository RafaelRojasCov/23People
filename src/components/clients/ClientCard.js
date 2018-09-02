import React, { Component } from 'react'
import styled from 'styled-components';

const StyledLogo = styled.img`
	display: flex;
	width: 200px;
	max-height: 200px;
	padding: .5em;
	margin: .5em .6em;
`;


export default class ClientCard extends Component {
	render(){
		const {src, alt, url} = this.props;
		return(
			<div>
				<a href={url} ><StyledLogo src={src} alt={alt}/></a>
			</div>
		);
	}
}