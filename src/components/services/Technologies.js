import React, { Component } from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 850px;
	margin: auto;
`;

const StyledSVG = styled.img`
	max-width: 650px;
`;


const content = 'Nuestra mayor habilidad son las infinitas ganas de intentar nuevos desafíos desarrollando software a diario y los años de experiencia que posee nuestro equipo nos permiten certificar calidad, compromiso y cumplimiento de KPIs y espectativas.'

const src = 'https://svgur.com/i/8A0.svg';


export default class Technologies extends Component {
	render(){
		return(
			<div className="mt-5 mb-5 custom-blue">
				<StyledContainer>
					<p>{content}</p>
					<StyledSVG src={src} alt="tecnologías" className="d-block w-100 h-100 mt-3"/>
				</StyledContainer>
			</div>
		);
	}
}