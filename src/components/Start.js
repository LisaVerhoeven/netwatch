import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Arrow from './Arrow';
const Start = ({match}) => {

	return (
		<React.Fragment>
		
			<Card className="" style={{height: '25rem'}} >
			  <Card.Body className="tc shadow-5 h-100">
			    <header className="mb2 bebas f1-ns f2">Randomizer</header>
			    <Card.Subtitle className="mb-4 text-muted f2-ns f3 bebas">No clue what to watch on Netflix? <br/> Click the START button!</Card.Subtitle>
			    
			    <Arrow className=""/>
			   
			    <Link to={`${match.url}/randomizer`} className="mt4 w5 w6-ns br-pill hover-white f2 ttu oswald grow text-decoration-none ph3 pv2 dib white bg-black"> Start </Link>
			  </Card.Body>
			</Card>

		


			
		
	
  		</React.Fragment>
 



	);

}

export default Start;