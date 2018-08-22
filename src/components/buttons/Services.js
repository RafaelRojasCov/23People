import React, { Component } from 'react';
import styled from 'styled-components';


const StyledServices = styled.button`
  color: white !important;
  min-width: 230px;
  margin: .5em;
  width: 100%;
  border-color: rgba(255,255,255,1) !important;
  background-color: rgba(255,255,255,0) !important;
  border: solid 1px;
`;

export default class BtnServices extends Component {

	render(){
		return(
			<StyledServices className="btn btn-light">
				Conoce nuestros servicios
			</StyledServices>
		);
	}

}