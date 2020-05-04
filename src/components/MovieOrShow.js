import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';



const MovieOrShow = ({match}) => {

	return(

		<React.Fragment>
		

			<Card className="" style={{height: '25rem'}} >
			  <Card.Body className="tc shadow-5 h-100">
			    <header className="mb2 bebas f1">Step 1</header>
			    <Card.Subtitle className="mb-2 text-muted f2-ns f3 bebas">Movie or Serie?</Card.Subtitle>
			    
			    <Link to={{pathname: `${match.url}/search`, search: "?type=movie"}} className="mt4 w5 w6-ns br-pill hover-white f2 ttu oswald grow text-decoration-none ph3 pv2 dib white bg-black"> Movies</Link>
			    <br/>
			   <Link to={{pathname: `${match.url}/search`, search: "?type=series"}} className="mt4 w5 w6-ns br-pill hover-white f2 ttu oswald grow text-decoration-none ph3 pv2 dib white bg-black"> Series</Link>
	
			  </Card.Body>
			</Card>


		</React.Fragment>


	);
}


export default MovieOrShow;