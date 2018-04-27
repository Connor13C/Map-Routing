import React, {Component} from 'react';
import Destinations from './Destinations';
import Trip from './Trip';
import Cookies from 'js-cookie';

/* Renders the application.
 * Holds the destinations and options state shared with the trip.
 */
class Application extends Component {
  constructor(props){
    super(props);
    this.state = {
      trip: { // default TFFI
        type: "trip",
        title: "",
        version: 3,
        options : this.getDefaultOptions(),
        places: [],
        distances: [],
        map: "<svg width=\"1920\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\"><g></g></svg>"
      },
      location:location.host,
    }
    this.updateTrip = this.updateTrip.bind(this);
    this.updateOptions = this.updateOptions.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.reset = this.reset.bind(this);
    this.getDefaultOptions = this.getDefaultOptions.bind(this);
  }

  getDefaultOptions(){
    if(Cookies.get()[("Options")] !== undefined){
      return Cookies.getJSON("Options");
    }
    else{
      return {distance: "miles", optimization: "0.0", map: "kml"};
    }
  }

  reset(){
    this.setState({
      trip: Object.assign(
        {},
        this.state.trip,
        {places: []},
        {distances: []}
            )
        });
  }

  updateTrip(tffi){
    console.log("updateTrip");
    console.log(tffi);
    this.setState({trip:tffi});
    Cookies.set("Options", tffi.options);
  }

  updateOptions(options){
    this.setState({
        trip: Object.assign(
            {},
            this.state.trip,
            {options: options},
            {distances: []}
        )
    });
    Cookies.set("Options", options);
  }

  updateLocation(host, port){
    this.setState({
        location: host + ":" + port,
    })
  }

  render() {
    return(
        <div id="application" className="container">
          <div className="row">
            <div className="col-12">
                <Destinations trip={this.state.trip} updateTrip={this.updateTrip} updateOptions={this.updateOptions} updateLocation={this.updateLocation} reset={this.reset} location={this.state.location}/>
            </div>
            <div className="col-12">
                <Trip trip={this.state.trip} updateTrip={this.updateTrip} location={this.state.location}/>
            </div>
          </div>
        </div>
    )
  }
}

export default Application;