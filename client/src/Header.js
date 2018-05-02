import React, {Component} from 'react';

/* Renders a text heading above the application with useful information.
 */
class Header extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div id="container">
          <div className="row text-white" style={{backgroundColor:"#1E4D2B"}}>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5" style={{backgroundColor:"#1E4D2B"}}>
          <img id="myImg" src="http://www.cs.colostate.edu/~cs314/images/CompSci-NS-CSU-1-Hrev.png" className="img-fluid" style={{width:"100%", height:"auto"}}></img>
            </div>
            </div>
          <div id="header" className="jumbotron">
          {this.title()}
          <p className="lead">"Want to travel far and wide?"</p>
<a href="About.html" className="btn btn-info" style={{backgroundColor:"#1E4D2B"}} role="button">Learn More About Us</a>
        </div>
      </div>
    )
  }

  title() {
    return( <h3>TripCo <small>t{this.props.number} {this.props.name}</small></h3> )
  }
}

export default Header;
