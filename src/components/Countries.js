import React, {Component} from 'react';
import Alert from 'react-bootstrap/Alert';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';

import '../style/scrollview.css';


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <button
    className="bn bg-transparent"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </button>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = React.useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto tc"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled scroller tc">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.props.children.toLowerCase().startsWith(value),
          ) } 
         
        </ul>
      </div>
    );
  },
);


class Countries extends Component  {
constructor () {
	super();
	this.state = {
		countrylist: []
	}
}



componentDidMount() {

    fetch(' https://netwatch-server.herokuapp.com/', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => this.setState({countrylist: data}))
  .catch(console.log)

}

	render(){
		const {countrylist} = this.state;
		const {setCountry} = this.props;
	return(

<div className="vh-100 flex items-center ph1">

<Alert className="center" variant="light">
  <h1 className="f1-l f2-m f3-ns  black bebas mv1"> Hey, welcome to Netwatch!</h1>
  <p className="oswald f2-l f3-m f4-ns">
    What country are you watching from? <br/> Let us know so we can optimize our search engine!
  </p>
  <hr />
  <div className="pv3">
	 <Dropdown className="oswald f3">
	    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
	      Choose your country
	    </Dropdown.Toggle>
	    <Dropdown.Menu  className="tc" as={CustomMenu}>
	    	{countrylist.map((item, i) => {
      		if(item.country !== null) {
      		return (
	       <Dropdown.Item key={i} className="item">
		        <button onClick={() => setCountry(item.countryid)} className="black bg-transparent bn"> 
		        {item.country} 
		        </button>
	        </Dropdown.Item> 
	        )}
      		}
	        )}

	     	
	   
	    </Dropdown.Menu>
	  </Dropdown>
 	</div>

</Alert>

</div>

	);
}

}
export default Countries;