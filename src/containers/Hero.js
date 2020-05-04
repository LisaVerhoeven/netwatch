import React, {Component} from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Start from '../components/Start';
import Information from '../components/Information';
import Randomizer from './Randomizer';






class Hero extends Component {
constructor(props) {
	super(props);

}



 decodeHtmlEntity = (str) => {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
};


	render (){
	const {match, info} = this.props;
	
	return (
		
  		
  		
  		<Switch>
  		
		 <Route exact path={match.path}>	 
		 <Start match={match}/>
		  </Route>
		  	
		  		 
		<Route strict path ={`${match.path}/randomizer`} render={ (props) => (<Randomizer {...props}  setInfoRandom={this.props.setInfoRandom}/>)}/>

		
	


	 	<Route strict path={`${match.path}/info`}>
	 	<Information  decodeHTML={this.decodeHtmlEntity} info={info}/>
	 	</Route>
	 	
	 	</Switch>
  		
		
		);

	
	};


}

export default Hero;