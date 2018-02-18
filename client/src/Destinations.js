import React, {Component} from 'react';

/* Destinations reside in the parent object so they may be shared
 * with the Trip object.
 * Renders the current destination list.
 * Loads destinations from files.
 * Finds destinations in a database.
 * Displays the current number of destinations
 */
class Destinations extends Component {
  constructor(props) {
    super(props);
    this.state = {
        errorMessage: null
    };
    this.loadTFFI = this.loadTFFI.bind(this);
  }

  loadTFFI(event) {
    let reader = new FileReader();
    let fileName = event.target.files[0].name;
    reader.onload = () => {
        try {
            let json = JSON.parse(reader.result);
            this.setState({errorMesssage:null});
            this.props.updateTrip(json);
        } catch(exception) {
            this.setState({errorMessage: "Failed to parse " + fileName})
        }
    };
    reader.readAsText(event.target.files[0]);
  }



  render() {
    let count = this.props.trip.places.length;
    let infoMessage;
    if (this.state.errorMessage != null) {
        infoMessage = <div className="alert alert-danger">{this.state.errorMessage}</div>;
    } else if (count > 0) {
        infoMessage = <div className="alert alert-success">Loaded {count} destinations.</div>
    } else {
        infoMessage = "";
    }
    return (
        <div id="destinations" className="card">
          <div className="card-header bg-info text-white">
            Destinations
          </div>
          <div className="card-body">
            <p>Load destinations from a file.</p>
            <div className="form-group" role="group">
                <input type="file" className="form-control-file" onChange={this.loadTFFI} id="tffifile" />
            </div>
              {infoMessage}
          </div>
        </div>
    )
  }
}

export default Destinations;