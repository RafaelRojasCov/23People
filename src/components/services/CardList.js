import React from 'react';
import Card from './Cards';
import styled from 'styled-components';

const StyledList = styled.div`
	height: 100%;
	width: 100%;
	display:flex;
	flex-wrap: wrap;
`;

const CardList = ({ services }) => {

		return(
			<StyledList>
				{
					services.map(( service, i ) => {
							return <Card
									key={i}
									id={service.id} 
									title={service.title} 
									description={service.description} 
									url={service.url}
									background={service.background}
								/>
						})
				}
			</StyledList>
		);

}

export default CardList;