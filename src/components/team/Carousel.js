import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	max-width: 750px;
	width: 100%;
	margin: 3em auto;
`;

const StyledContent = styled.div`
	display: flex-inline;
	min-height: 400px;
	background: url(${props => props.background});
	background-repeat:no-repeat;
	background-size:cover;
	background-position: center;
`;

const data = [
	'https://bit.ly/2Q2cQwX',
	'https://bit.ly/2wzPfe6',
	'https://bit.ly/2MNT8qY'
]


export default class Carousel extends Component {
	render(){
		return(
			<StyledContainer id="TeamCarousel" className="carousel slide rounded" data-ride="carousel">
			  <div className="carousel-inner">
			    {
						data.map(( el, i ) => {
								return ( <StyledContent 
													background={el} 
													key={i} 
													className={(i===0) ? "carousel-item rounded active" : "carousel-item rounded"} 
												/>);
							})
					}
			  </div>
			  <a className="carousel-control-prev" href="#TeamCarousel" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Anterior</span>
			  </a>
			  <a className="carousel-control-next" href="#TeamCarousel" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Siguiente</span>
			  </a>
			</StyledContainer>
		);
	}
}