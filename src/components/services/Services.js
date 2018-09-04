import React, { Component } from 'react'
import ServiceCard from './ServiceCard';
import styled from 'styled-components';
import { data } from './data';

const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 850px;
	margin: auto;
`;


export default class Services extends Component {
	render(){
		return(
			<div className="mt-5 mb-5">
				<StyledContainer>
					{
						data.map(( el, i ) => {
								return <ServiceCard
										key={i}
										icon={el.icon} 
										title={el.title}
									/>
							})
					}
				</StyledContainer>
			</div>
		);
	}
}