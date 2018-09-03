import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
	background-color: #fff;
	border-radius: .3em;
	margin-top: 4em;
	padding: 1.5em 2em;
	max-width: 992px;
	margin-left: auto;
	margin-right: auto;
`;


export default class PageDescription extends Component {
	render(){
		const { title, content, subtitle, subcontent } = this.props;
		return(
			<div className="container custom-blue">
				<StyledBox>
					<h3 className="text-center mx-auto mt-3 mb-5 w-75"> { title }</h3>
					<p>{ content }</p>
					<h5 className="text-center mx-auto mt-4 mb-4 w-75">{ subtitle }</h5>
					<p>{ subcontent } </p>
				</StyledBox>
			</div>
		);
	}

}