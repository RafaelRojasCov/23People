import React from 'react';
import Card from './Cards';
import styled from 'styled-components';

const StyledList = styled.div`
	height: 100%;
	width: 100%;
	display:flex;
	flex-wrap: wrap;
`;

const List = ({ information }) => {

		return(
			<StyledList>
				{
					information.map(( el, i ) => {
							return <Card
									key={i}
									id={el.id} 
									title={el.title} 
									description={el.description} 
									url={el.url}
									background={el.background}
								/>
						})
				}
			</StyledList>
		);

}

export default List;