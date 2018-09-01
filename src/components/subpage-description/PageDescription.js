import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
	background-color: #fff;
	border-radius: .3em;
	margin-top: 4em;
	padding: 1.5em;
	max-width: 992px;
	margin-left: auto;
	margin-right: auto;
`;


export default class PageDescription extends Component {
	render(){
		return(
			<div className="container">
				<StyledBox>
					<h3 className="text-center mt-3 mb-5">Nuestro comienzo</h3>
					<p>23People nace de la necesidad de ofrecer servicios
						informáticos con una calidad técnica y humana destacable
						e imitable. El objetivo principal es crear soluciones que
						realmente sean útiles a nuestros clientes y sean sencillos de
						usar por los usuarios de estas. Para lograr esto, nos especializamos en encontrar talentos
						informáticos que sean apasionados por las tecnologías y para
						los cuales sea un placer ser puestos a prueba con el desarrollo
						de soluciones complejas. Todo esto bajo un ambiente muy
						humano y profesional. Como resultado, cada proyecto que realizamos nos hace
sentir querer mostrarlo a otros sintiéndonos orgullosos de
que nosotros lo construimos. En estos 3 años hemos desarrollado una serie de softwares y
aplicaciones complejas para nuestros clientes.</p>
				</StyledBox>
			</div>
		);
	}

}