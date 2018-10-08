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

const StyledLogos = styled.img`
	display: inline;
	max-width: 200px;
	max-height: 150px;
	margin: 1em;
`;

const StyledList = styled.ul`
	max-width: 600px;
	margin: 1em auto;
`;

class Content extends Component {
	constructor(props){
		super(props);
		this.state = {
			isVisible: false,
			isActive: true
		}
	}

	handleVisibility = (e) => {
		this.setState({ isVisible: e, isActive: false})
	}

	componentDidMount(){
		this.setState({ isActive: true })
	}

	render(){
		const { isActive, isVisible } = this.state;
		return(
			<VisibilitySensor onChange={this.handleVisibility} active={isActive}>
				<p className={`animated ${isVisible ? "fadeIn" : "fadeOut"}`}>
					Somos usuarios apasionados por los servicios Cloud. Creemos que no existe forma más barata de conseguir infraestructura escalable que se adapte al negocio y que sea viable a costos muy bajos.
				</p>
			</VisibilitySensor>
		);
	}
}

class List extends Component {
	constructor(props){
		super(props);
		this.state = {
			isVisible: false,
			isActive: true
		}
	}

	handleVisibility = (e) => {
		this.setState({ isVisible: e, isActive: false})
	}

	componentDidMount(){
		this.setState({ isActive: true })
	}

	render(){
		const { isActive, isVisible } = this.state;
		return(
			<VisibilitySensor onChange={this.handleVisibility} active={isActive}>
				<div className={`d-block w-100 mt-3 animated ${isVisible ? "fadeIn" : "fadeOut"}`}>
					<StyledList>
						<li>Desde la disposición de los servidores hasta aplicaciones Serverless.</li>
						<li>Desde Big Data a un Aprendizaje de Máquina.</li>
						<li>Somos especialistas en AWS y sus servicios asociados.</li>
						<li>Ayudamos a su empresa en la migración hacia Cloud.</li>
					</StyledList>
				</div>
			</VisibilitySensor>
		);
	}
}

class Logos extends Component {
	constructor(props){
		super(props);
		this.state = {
			isVisible: false,
			isActive: true
		}
	}

	handleVisibility = (e) => {
		this.setState({ isVisible: e, isActive: false})
	}

	componentDidMount(){
		this.setState({ isActive: true })
	}

	render(){
		const { isActive, isVisible } = this.state;
		return(
			<VisibilitySensor onChange={this.handleVisibility} active={isActive}>
				<div className={`d-block w-100 text-center animated ${isVisible ? "fadeIn" : "fadeOut"}`}>
					<StyledLogos src="https://bit.ly/1PA6Keg" alt="Amazon Web Services" />
					<StyledLogos src="https://bit.ly/2Q00QMm" alt="Google Cloud Platform" />
					<StyledLogos src="https://bit.ly/2wKfijM" alt="Microsoft Azure" />
				</div>
			</VisibilitySensor>
		);
	}
}


export default class Cloud extends Component {
	render(){
		return(
			<div className={`mt-5 mb-5 custom-blue`}>
				<StyledContainer>
					<Content />
					<List />
					<Logos />
				</StyledContainer>
			</div>
		);
	}
}