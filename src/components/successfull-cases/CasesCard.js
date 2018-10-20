import React, { PureComponent } from 'react'
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';

const StyledCard = styled.div`
	min-height: 300px;
	border-radius: .5em;
	background-color: white;
	margin: auto auto 1em auto;
	padding: 1em;
`;

const StyledLink = styled.a`
	background-color: #fac450;
	text-decoration: none;
	border: none;
	color: white;
	padding: 5px 8px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 14px;
	margin-bottom: .8em;

	&:hover, :active, :focus{
		background-color: #fac450;
		color: white;
		text-decoration: none;
	}
`;

const StyledLogo = styled.img`
	max-height: 100px;
	max-width: 200px;
	margin: 1em auto;
`;

const StyledImage = styled.div`
	max-width: 600px;
	max-height: 300px;
	height: 100%;
	width: 100%;
	margin: auto;
	display:flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	border-radius: .3em;
`;


export default class CasesCard extends PureComponent {
	constructor(props){
		super(props);
		this.state = {
			isVisible: false,
			isActive: true
		}
	}

	handleVisibility = (e) => {
		this.setState({ isVisible: e});
	}

	componentDidUpdate(){
		this.state.isVisible &&
		this.setState({ isActive: false });
	}

	render() {
		const { title, logo, description, url, image, client } = this.props;
		const { isVisible, isActive } = this.state;
		return (
			<VisibilitySensor 
				onChange={this.handleVisibility}
				active={ isActive }
				delayedCall={true}
			>
				{
					<StyledCard className={`container animated ${isVisible ? "fadeIn" : "hidden"}`}
						visibility={isVisible ? "visible" : "hidden"}>
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg">
									<div className="text-center mb-3">
										<StyledLogo src={logo} alt={client}/>
										<h4>{title}</h4>
									</div>
									<p className="text-justify">{description}</p>
									<StyledLink href={url} target="_blank" rel="noopener noreferrer">
										Más información</StyledLink>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg">
									<StyledImage>
										<img className="w-100" src={image} alt={title} />
									</StyledImage>
								</div>
							</div>
						</StyledCard>
					
				}
			</VisibilitySensor>
		)
	}
}