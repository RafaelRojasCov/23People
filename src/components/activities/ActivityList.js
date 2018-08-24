import React from 'react';
import Activity from './Activity';
import styled from 'styled-components';

const StyledList = styled.div`
	display:flex;
	flex-wrap: wrap;
	height: 100%;
	justify-content: space-between;
`;

const ActivityList = ({ activities }) => {

		return(
			<StyledList>
				{
					activities.map(( activity, i ) => {
						return <Activity
								key={i}
								id={activity.id} 
								logo={activity.logo} 
								description={activity.description} 
								url={activity.url}
								name={activity.name}
								title={activity.title}
							/>
					})
				}
      </StyledList>
		);
}

export default ActivityList;