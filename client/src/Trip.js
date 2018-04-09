import React, {Component} from 'react';
import MapContainer from './MapContainer';
import Itinerary from './Itinerary';

/* trip computes the map an intinerary based on a set of destinations and options.
 * The destinations and options reside in the parent object so they may be set by
 * the Destinations and Options classes.
 * The map and itinerary reside in this object so they can be passed to the MapContainer and Itinerary classes.
 */
class Trip extends Component {
  constructor(props) {
    super(props);

    this.plan = this.plan.bind(this);
    this.saveTFFI = this.saveTFFI.bind(this);
    this.setName = this.setName.bind(this);
  }

  /* Sends a request to the server with the destinations and options.
   * Receives a response containing the map and itinerary to update the
   * state for this object.
   */


  fetchResponse(){
    return fetch('http://' + location.host + '/plan', {
      method:"POST",
      body: JSON.stringify(this.props.trip)
    });
  }

  async plan(){
    try {
      let serverResponse = await this.fetchResponse();
      let tffi = await serverResponse.json();
      console.log(tffi);
      this.props.updateTrip(tffi);
    } catch(err) {
      console.error(err);
    }
  }

  /* Saves the map and itinerary to the local file system.
   */
  saveTFFI(){
      var fileDownload = require('react-file-download');
      var data= JSON.stringify(this.props.trip);
      fileDownload(data, 'trip.json');
  }

  setName(event) {
    this.props.updateTrip(Object.assign({}, this.props.trip, {title: event.target.value}))
  }

  /* Renders the buttons, map, and itinerary.
   * The title should be specified before the plan or save buttons are valid.
   */
  render(){
    return(
        <div id="trip" className="card">
          <div className="card-header text-white" style={{backgroundColor:"#1E4D2B"}}>
            Trip
          </div>
          <div className="card-body">
            <p>Give your trip a title before planning or saving.</p>
            <div className="input-group" role="group">
              <input type="text" className="form-control" placeholder="Make or change your plan name here" value={this.props.trip.title} onChange={this.setName}/>
              <span className="input-group-btn">
                <button className="btn btn-primary " onClick={this.plan} type="button" style={{backgroundColor:"#1E4D2B"}}>Plan</button>
              </span>
              <span className="input-group-btn">
                <button className="btn btn-secondary " onClick={this.saveTFFI} type="button" style={{backgroundColor:"#1E4D2B"}}>Save</button>
              </span>
            </div>
            <p/>
              <h5>{this.props.trip.title}</h5>
            <MapContainer trip={this.props.trip} />
            <Itinerary trip={this.props.trip} />
          </div>
        </div>
    )
  }
}

export default Trip;
