import React, { Component } from 'react';
import BtnWeHelp from '../buttons/WeHelp';
import BtnServices from '../buttons/Services';
import './Welcome.css';

export default class Welcome extends Component {
  render() {
    return (
      <div>
      	<video id="welcomeVideo" loop="true" autoPlay="autoPlay" muted>
				  <source src="https://www.w3schools.com/howto/rain.mp4 " type="video/mp4" />
				  Tu navegador no soporte video en HTML5.
				</video>
				<header className="header">
					<div className="container">
					
						<div className="row">
							<div className="col">
								<h1 className="title">
									Un partner <br/>
									<span className="custom-yellow">Tecnológico</span>
								</h1>
							</div>
						</div>

						<div className="row">
							<div className="col">
								<p className="slogan">Creamos soluciones informáticas que realmente les sirven a nuestros clientes y usuarios.
								<br/>Siempre en comunicación y siempre apoyándolos.</p>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-3 col-sm-6 col-xs-12">
								<BtnWeHelp />
							</div>
							<div className="col-lg-3 col-sm-6 col-xs-12">
								<BtnServices />
							</div>
						</div>

					</div>
				</header>
      </div>
    );
  }
}
