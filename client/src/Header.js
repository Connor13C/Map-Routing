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
          <img id="myImg" src="http://www.cs.colostate.edu/~cs314/images/CompSci-NS-CSU-1-Hrev.png" className="img-fluid" style={{maxWidth: "450px", minWidth: "350px"}}></img>
            </div>
            </div>
          <div id="header" className="jumbotron">
          {this.title()}

          <p className="lead">"Want to travel far and wide?"</p>
            <ol>
              <li>
                Choose options for trip planning, information to display about locations,
                and how the trip map and itinerary should be saved.</li>
              <li>
                Choose your destinations by loading existing sets of destinations or
                find more in an extensive database of locations worldwide.</li>
              <li>
                Plan the trip with the options you selected.
                Review and revise the trip origin and order.
                Save the trip map and itinerary for future reference.</li>
            </ol>
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
