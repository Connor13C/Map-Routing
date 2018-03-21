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
        <div id="footer" class="row text-white" style={{backgroundColor:"#1E4D2B"}}>
  <div class="col-12 col-sm-12 col-md-6  col-lg-7 col-xl-8">
          <img class="img-fluid" src="http://www.cs.colostate.edu/~davematt/logos/CSU_logos/CSU-Official-wrdmrk-357-617_Rev.png"></img>
          <p><br/>&copy; TripCo t08 Pantz 2018</p>
      </div>
      </div>
    )
  }
}

export default Footer;
