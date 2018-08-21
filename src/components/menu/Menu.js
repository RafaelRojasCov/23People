import React, { Component } from 'react';
import Hiring from '../buttons/Hiring';
import Logo from './Logo.png';
import './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
      	<nav className="navbar navbar-expand-lg fixed-top navbar-dark">
	      	<div className="container">
	          <a className="navbar-brand" href="https://www.23people.io">
	          	<img className="d-inline-block align-top" src={Logo} alt="23People"/>
	          </a>

	          <button className="navbar-toggler" type="button" 
	          				data-toggle="collapse" data-target="#navbarNavDropdown" 
	          				aria-controls="navbarNavDropdown" aria-expanded="false" 
	          				aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>

					  <div className="collapse navbar-collapse ml-auto w-100 justify-content-end" id="navbarNavDropdown">
					    <ul className="navbar-nav">
					      <li className="nav-item active">
					        <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link" href="#">Servicios</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link" href="#">Casos de éxito</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link" href="#">Historia</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link" href="#">Equipo</a>
					      </li>
					      <li className="nav-item">
					        <button className="btn btn-sm bg-warning" href="#">Estamos contratando</button>
					      </li>
					    </ul>
					  </div>


	        </div>
        </nav>
      </div>
    );
  }
}


