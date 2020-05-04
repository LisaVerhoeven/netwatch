import React from 'react';
import {Link} from 'react-router-dom';

import Arrow from './Arrow';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Information = ({decodeHTML, info}) => {

	return(

	<Card className= "center tc" >
	  <Card.Body>
	  {!info.title.length
	  ? (
	  	<React.Fragment>
	  	<header className="f1 bebas">Not Found.</header>
	  	<Card.Subtitle className="f2 oswald"> Based on your search criteria no results were found. </Card.Subtitle>
	  	<Arrow/>
	  	<Link to={`/home/randomizer`} className="mt4 w5 w6-ns br-pill hover-white f2 ttu oswald grow text-decoration-none ph3 pv2 dib white bg-black"> Try again </Link>
	  	</React.Fragment>
	  	)
	 : (
	 	<React.Fragment>
	  <Row className="mb2">
	 <header  className="bebas w-100 f4 f3-ns">{decodeHTML(info.title)}   <span className="i text-muted"> ({info.type}, {info.year}) </span> </header>
	 </Row>
	  <Row className="">
	  <Col>
	  <Card.Img className="center cover f4-ns f3" src={info.image} /> 
	  </Col>
	  <Col>
	   
	    <Card.Text className="oswald tl ">
	      {decodeHTML(info.plot)}
	    </Card.Text>
	   </Col>
	    </Row>
	    </React.Fragment>
		)}
	  </Card.Body>
	</Card>
	);

}

export default Information;