import React, { Component } from 'react'
import TeamCard from './TeamCard';
import styled from 'styled-components';
import { data } from './data';
import VisibilitySensor from 'react-visibility-sensor';

const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: auto;
`;


export default class Team extends Component {
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
		this.setState({ isActive: true })
	}
	

	render(){
		const { isVisible, isActive } = this.state;
		return(
			<div className="container mt-5 mb-5">
				<VisibilitySensor onChange={this.handleVisibility} active={ isActive }>
					<h3 className={`text-center custom-blue mb-5 animated ${ isVisible ? "fadeIn" : "hidden"}`}>
						¡Conoce a nuestro equipo! </h3>
				</VisibilitySensor> 
				<StyledContainer>
					{
						data.map(( el, i ) => {
								return <TeamCard
										key={i}
										photo={el.photo} 
										name={el.name}
										position={el.position}
									/>
							})
					}
				</StyledContainer>
			</div>
		);
	}
}