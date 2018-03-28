import React, {Component} from 'react';

/* Renders a text footer below the application with copyright
 * and other useful information.
 */
class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div id="footer" className="row text-white" style={{backgroundColor:"#1E4D2B"}}>
  <div className="col-12 col-sm-12 col-md-6  col-lg-7 col-xl-8">
          <img className="img-fluid" src="http://www.cs.colostate.edu/~davematt/logos/CSU_logos/CSU-Official-wrdmrk-357-617_Rev.png"></img>
      </div>
      <p style= {{float:"right"}}><br/>&copy; TripCo t08 Pantz 2018</p>
      </div>
    )
  }
}

export default Footer;
