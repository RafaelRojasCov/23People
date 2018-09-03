import React, { Component } from 'react'
import TeamCard from './TeamCard';
import styled from 'styled-components';
import { data } from './data';

const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: auto;
`;


export default class Team extends Component {
	render(){
		return(
			<div className="container mt-5 mb-5">
				<h3 className="text-center custom-blue mb-5">¡Conoce a nuestro equipo! </h3>
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