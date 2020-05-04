import React, {Component} from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';



class Added extends Component {

constructor(props) {
		super(props);
		this.state = {
			newtoNetflix: [],
			loading: true
		}
}
componentDidMount() {
	 const {countryid} = this.props;
		fetch(` https://netwatch-server.herokuapp.com/country/${countryid}`, {
		method: 'GET'
	})
	.then(response => response.json())
	.then(data => this.setState({newtoNetflix: data, loading: false}))
	 .catch(console.log)

}

 decodeHtmlEntity = (str) => {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
};



render() {
	const {newtoNetflix, loading } = this.state;
	const {setInfoAdded} = this.props;



	
		
	
	return(


  	
	<Card className="h-100 tc  b--none flex items-center "  style={{height: '10rem'}}>
		<Card.Title className="bebas f2-ns f3 underline i black mt4" style={{height: '1rem'}}>Recently added to Netflix:</Card.Title>
		<Card.Body className="">

		{ loading === true
		? <Spinner animation="border" role="status"></Spinner>
		: (
				<ListGroup variant="flush" className="oswald f4-ns f5 black w-100">
				{newtoNetflix.map((item, i) => {
					return (
						<ListGroup.Item key={i} > 
						<a onClick={() => setInfoAdded(item)} className="pointer">
						{this.decodeHtmlEntity(item.title)} <span className="i">({item.vtype}, {item.year})</span>
						</a> 
						
						</ListGroup.Item>
					)
				} )
				}
				</ListGroup>
			)
		}
		</Card.Body>
	</Card>
	
	

	);

}
}

export default Added;