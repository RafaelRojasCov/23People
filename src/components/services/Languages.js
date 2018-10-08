import React, { Component } from 'react'
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';

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


const content = 'Nos interesa siempre ir un paso más allá en la confección de software, es por eso que estamos en una constante búsqueda de nuevas tecnologías. Generamos charlas y cursos para nuestros equipos y clientes para elevar las competencias nuestras como las de la industria.'

const src = 'https://svgur.com/i/8Ar.svg';

export default class Languages extends Component {
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
		const { isActive, isVisible } = this.state;
		return(
			<div className="mt-5 mb-5 custom-blue">
				<VisibilitySensor onChange={this.handleVisibility} active={isActive}>
					<StyledContainer className={`animated ${ isVisible ? "fadeIn" : "fadeOut"}`}>
						<p>{content}</p>
						<StyledSVG src={src} alt="lenguajes" className="d-block w-100 h-100 mt-3"/>
					</StyledContainer>
				</VisibilitySensor>
			</div>
		);
	}
}