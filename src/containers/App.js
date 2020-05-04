import React, {Component} from 'react';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Hero from './Hero';
import Navigation from '../components/Navigation';
import Countries from '../components/Countries';
import Added from '../components/Added';
import Footer from '../components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../style/typography.css';


const initialState = {
	countryid: '0',
	info: {
		title: '',
		type: 'movie',
		image: 'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABVGjKZK68g5kGEDhJx2DvfreEiVWWK7xca-h4bgZj5UWmW4leWYfN3z9w-AFirdfqcejE3yfS9xhBO-iuILxn4dLLKOb6h-CTrV6lQ2v4Zt27_FGGzAsX9c-KLI.jpg?r=4ad',
		year: '2020',
		plot: 'A space-time continuum glitch allows Vera to save a boys life 25 years earlier, but results in the loss of her daughter, whom she fights to get back.'
	}
}



class App extends Component {

		constructor(props) {
    super(props);
    this.state = initialState;
  }


componentDidMount() {
	
	if(this.state.countryid === '0') {
		this.props.history.push('/')
	}
}

  setInfoAdded = (selection) => {

  
  	 this.setState({
  		info: {
 		title: selection.title,
 		type: selection.vtype,
 		image: selection.img,
 		year: selection.year,
 		plot: selection.synopsis
 	}}, () => {this.props.history.push('/home/info')});

  }


	
  setInfoRandom = (location, genre) => {
  	

  	this.setState(initialState);

  	setTimeout(() => {
 	 this.props.history.push('/home/info')
		}, 3000);

 const type = new URLSearchParams(location.search).get("type")
  
  
     fetch(` https://netwatch-server.herokuapp.com/randomInfo/${type}/${genre}/${this.state.countryid}`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => this.setInfoAdded(data))
  .catch(console.log) 


  }



  setCountry = (countryid) => {
  	this.setState({countryid: countryid}, () => {this.props.history.push('/home')});
  }


	render() {
		const {info, countryid} = this.state;
  return (
    <React.Fragment>

    <Switch>
    <Route exact path= '/'>
    	<Countries setCountry={this.setCountry}/>
    </Route>

    <Route path='/home'
    	render={({match}) => {
    		return (
    	<React.Fragment>
    	<Container fluid className="vh-100 mb4">

		<Row>
			<Col> <Navigation/> </Col>
		</Row>

		<Row className="tc mt5">
			<Col className="mv4 f2 f-subheadline-l fw6 bebas white">Don't know what to watch?</Col>

		</Row>

		<Row>
		<Col xs={12} md={6} className="mb4 w4" >
			<Hero info={info} match={match} setInfoRandom={this.setInfoRandom}/>
		</Col>
		<Col xs={12} md={6} className="mb4" >
		<Added setInfoAdded={this.setInfoAdded} match={match} countryid={countryid}/>
		</Col>
		</Row>
		<Footer className=""/>
		
		</Container>
		
	
		</React.Fragment>
		);
	}}
	/>

	</Switch>


   
        </React.Fragment>
  );
}
}
export default withRouter(App);
