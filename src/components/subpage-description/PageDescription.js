import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
	background-color: #fff;
	border-radius: .3em;
	margin-top: 4em;
	padding: 1.5em;
	max-width: 992px;
	margin-left: auto;
	margin-right: auto;
`;


export default class PageDescription extends Component {
	render(){
		const { title, content } = this.props;
		return(
			<div className="container">
				<StyledBox>
					<h3 className="text-center mt-3 mb-5"> { title }</h3>
					<p>{ content }</p>
				</StyledBox>
			</div>
		);
	}

}