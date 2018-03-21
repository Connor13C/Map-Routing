import React, {Component} from 'react';
import Options from './Options';
import Destinations from './Destinations';
import Trip from './Trip';

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
        options : {distance: "miles", optimization: "none"},
        places: [],
        distances: [],
        map: "<svg width=\"1920\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\"><g></g></svg>"
      },
      query: {
        version: 2,
        type: "query",
        query: "",
        places: []
      },
      config: {
      type: "config",
      version: 2,
      optimization: 3
      }
    }
    this.updateTrip = this.updateTrip.bind(this);
    this.updateOptions = this.updateOptions.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateTrip(tffi){
    console.log("updateTrip");
    console.log(tffi);
    this.setState({trip:tffi});
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
  }

  updateQuery(DBQuery){
  console.log("updateQuery")
    this.setState({query:DBQuery});
  }

  render() {
    return(
        <div id="application" className="container">
          <div className="row">
            <div className="col-12">
                <Destinations trip={this.state.trip} updateTrip={this.updateTrip} updateOptions={this.updateOptions}/>
            </div>
            <div className="col-12">
                <Trip trip={this.state.trip} updateTrip={this.updateTrip} />
            </div>
          </div>
        </div>
    )
  }
}

export default Application;