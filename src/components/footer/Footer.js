import React, { Component } from 'react';
import styled from 'styled-components';
import InterestedLinks from './InterestedLinks';
import SocialNetworks from './SocialNetworks';
import Location from './Location';
import LogoAlternate from './LogoAlternate';
import Copyright from './Copyright';

const StyledFooter = styled.div`
	padding-top: 1em;
	min-height: 250px;
	height: 100%;
	background-color: #fac450;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;


export default class Footer extends Component {
	render(){
		return(
			<StyledFooter>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg">
							<LogoAlternate />
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg">
							<InterestedLinks />
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg">
							<SocialNetworks />
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg">
							<Location />
						</div>
					</div>
				</div>
				<Copyright />
			</StyledFooter>
		);
	}
}