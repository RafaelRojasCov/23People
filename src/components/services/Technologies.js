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


const content = 'Nuestra mayor habilidad son las infinitas ganas de intentar nuevos desafíos desarrollando software a diario y los años de experiencia que posee nuestro equipo nos permiten certificar calidad, compromiso y cumplimiento de KPIs y espectativas.'

const src = 'https://svgur.com/i/8AP.svg';


export default class Technologies extends Component {
	constructor(props){
		super(props);
		this.state = {
			isTextVisible: false,
			isImageVisible: false,
			isTextActive: true,
			isImageActive: true
		}
	}

	handleImageVisibility = (e) => {
		this.setState({ isImageVisible: e, isImageActive: false})
	}

	handleTextVisibility = (e) => {
		this.setState({ isTextVisible: e, isTextActive: false})
	}


	componentDidMount(){
		this.setState({
			isTextActive: true,
			isImageActive: true
		})
	}

	render(){
		const { isImageActive, isImageVisible, isTextActive, isTextVisible } = this.state;
		return(
			<div className="mt-5 mb-5 custom-blue">
				<StyledContainer>
					<VisibilitySensor onChange={this.handleTextVisibility} active={isTextActive}>
						<p className={`animated ${isTextVisible ? "fadeIn" : "fadeOut"}`}>{content}</p>
					</VisibilitySensor>

					<VisibilitySensor onChange={this.handleImageVisibility} active={isImageActive}>
						<StyledSVG src={src} alt="tecnologías" className={`d-block w-100 h-100 mt-3 animated ${isImageVisible ? "fadeIn" : "fadeOut"}`} />
					</VisibilitySensor>
				</StyledContainer>
			</div>
		);
	}
}