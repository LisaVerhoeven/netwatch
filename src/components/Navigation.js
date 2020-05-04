import React from 'react';
import {Link} from 'react-router-dom';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../style/typography.css';


const Navigation = () => {

	return (

	<Navbar  fixed="top" expand="lg" className="oswald">
	  <Navbar.Brand href="#home"  className="f2 bebas">
	  	Netwatch
	  </Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="ml-auto ttu ">
	      <Link to={'/home/randomizer'} className="hover-white mr3 f6 grow text-decoration-none br-pill ph3 pv2 mb2 dib white bg-black" href="#home">Randomizer</Link>
	      </Nav>
	  </Navbar.Collapse>
	</Navbar>

	);

}

export default Navigation;