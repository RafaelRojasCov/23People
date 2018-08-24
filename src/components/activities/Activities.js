import React, { Component } from 'react';
import ActivityList from './ActivityList';
import { activities } from './activityData';
import styled from 'styled-components';

const StyledBackgroundBox = styled.div`
	color: white;
	min-height: 700px;
	min-width: 100%;
	background-color: #3e474f;
	background-image: url(https://i.imgur.com/fNzYJNF.png);
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: cover;
	padding-bottom: 2em;
`;


export default class Activities extends Component {
	render(){
		return(
			<StyledBackgroundBox>
				<div className="container text-center pt-5">
					<h2 className="mb-5 p-2">Nuestras iniciativas y actividades</h2>
					<ActivityList activities={ activities }/>
				</div>
			</StyledBackgroundBox>
		);
	}

}