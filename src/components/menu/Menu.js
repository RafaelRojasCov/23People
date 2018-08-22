import React, { Component } from 'react';
import BtnHiring from '../buttons/Hiring';
import Logo from './Logo.png';
import './Menu.css';

let lastScrollY = 0;
let ticking = false;
const nav = document.querySelector("nav");

export default class Menu extends Component {

	componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.nav.classList.toggle("navbar-not-transparent");
        this.nav.classList.toggle("navbar-dark");
        this.nav.classList.toggle("navbar-light");
        ticking = false;
      });
   
      ticking = true;
    }
  };




  render() {
    return (
      <div>
      	<nav id="menu" className="navbar navbar-expand-lg fixed-top navbar-light navbar-not-transparent">
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
					        <BtnHiring />
					      </li>
					    </ul>
					  </div>


	        </div>
        </nav>
      </div>
    );
  }
}


