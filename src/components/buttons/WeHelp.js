import React, { Component } from 'react';
import styled from 'styled-components';


const StyledWeHelp = styled.button`
  color: white !important;
  min-width: 230px;
  margin: .5em;
  width: 100%;
  border-color: rgba(250,196,80,1) !important;
  background-color: rgba(250,196,80,1) !important;
`;

export default class BtnWeHelp extends Component {

	render(){
		return(
			<StyledWeHelp className="btn btn-warning">
				Nosotros te ayudamos
			</StyledWeHelp>
		);
	}

}