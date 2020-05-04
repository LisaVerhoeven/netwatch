import React, {Component} from'react';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import '../style/scrollview.css';




const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <button
    className="white text-decoration-none hover-white f2 ttu bg-black bn"
    href=""
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
              !value || child.props.children.props.children.toLowerCase().includes(value),
          ) } 
         
        </ul>
      </div>
    );
  },
);

class Genres extends Component {
constructor(props) {
  super(props);
  this.state = {
    genreslist: [],
    loading: false
  }
 
}


componentDidMount() {

  this.setState({loading: false});

    fetch(' https://netwatch-server.herokuapp.com/genres', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => this.setState({genreslist: data}))
  .catch(console.log)


}

 convertUnicode = (input) =>  {
  return input.replace(/\\u(\w\w\w\w)/g,function(a,b) {
    var charcode = parseInt(b,16);
    return String.fromCharCode(charcode);
  });
}


render() {
  const {genreslist, loading} = this.state;
  const {location, setInfoRandom} = this.props;
  
	return (




      <Card className="" style={{height: '25rem'}} >
        <Card.Body className="tc shadow-5 h-100">
        {loading === true
          ? <Spinner animation="border" role="status"></Spinner>
          : (  

            <React.Fragment>
          <header className="mb2 bebas f1">Step 2</header>
          <Card.Subtitle className="mb5 text-muted f2-ns f3 bebas">Choose your genre</Card.Subtitle>
         <Dropdown className="oswald f2 bg-black br-pill pv2 grow">
        <Dropdown.Toggle  as={CustomToggle} id="dropdown-custom-components" > Genres </Dropdown.Toggle>
       <Dropdown.Menu  className="tc" as={CustomMenu}>
           {genreslist.map((item, i) => {
            if(item.genre !== null) {
           return (
      
              <Dropdown.Item key={i} className="item">
               <button onClick={ () => {this.setState({loading: true}); setInfoRandom(location, item.netflixid)}}  className="black bg-transparent bn">
               {this.convertUnicode(item.genre)}
                 </button>
               </Dropdown.Item>
                  )}
                 }
            )}
        </Dropdown.Menu>
        </Dropdown>

        </React.Fragment>
        )}

          
        </Card.Body>
      </Card>


 
);
}
}

export default Genres;