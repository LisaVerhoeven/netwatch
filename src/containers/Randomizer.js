import React from 'react';
import {Route, Switch} from 'react-router-dom';

import MovieOrShow from '../components/MovieOrShow';
import Genres from '../components/Genres';

const Randomizer = ({match, setInfoRandom}) => {

return(

<React.Fragment>


<Switch>

<Route exact path={`${match.url}`} component={MovieOrShow}/>
<Route strict path={`${match.url}/search`} render= { (props) => <Genres setInfoRandom={setInfoRandom} {...props}/>}/>

</Switch>
</React.Fragment>

);

}

export default Randomizer;