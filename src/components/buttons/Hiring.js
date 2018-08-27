import React, { Component } from 'react';
import styled from 'styled-components';


const StyledHiring = styled.button`
  color: #fac450 !important;
  background-color: rgba(255,255,255,0) !important;
  border-color: rgba(250,196,80,1) !important;
  border: solid 1px;
`;

export default class BtnHiring extends Component {

	render(){
		return(
			<a href="https://www.getonbrd.cl/companies/23people-cl/" target="_blank" rel="noopener noreferrer"><StyledHiring className="btn btn-sm btn-warning">
				Estamos contratando
			</StyledHiring></a>
		);
	}

}