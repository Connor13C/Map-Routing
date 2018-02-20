import React, {Component} from 'react';
import {Validator} from 'jsonschema';
import defaults from 'json-schema-defaults';

let optionsSchema = {
    id: "/options",
    type: "object",
    properties: {
        "distance": {
            type: "string",
            format: "miles|kilometers",

        },
        "optimization" : {
            type: "string",
            format: "none"
        }
    }
};
let placeSchema = {
    id: "/place",
    type: "object",
    properties: {
        "id": {
            type: "string",
            required: true
        },
        "name": {
            type: "string",
            required: true
        },
        "latitude": {
            type: "string",
            required: true
        },
        "longitude": {
            type: "string",
            required: true
        }
    }
};

let tffiSchema = {
    id: "/tffi",
    type: "object",
    properties: {
        "type": {
            type: "string",
            required: true
        },
        "title": {
            type: "string"
        },
        "options": {
            "$ref": "/options"
        },
        "places": {
            type: "array",
            items: {
                "$ref": "/place"
            },
            "default": []
        },
        "distances": {
            type: "array",
            items: {
                type:"integer"
            },
            "default": []
        },
        "map": {
            type:"string",
            "default": ""
        }
    }
};
let validator = new Validator();
validator.addSchema(optionsSchema);
validator.addSchema(placeSchema);
validator.addSchema(tffiSchema);


function setDefaults(tffi) {
    let defaultTffi = defaults(tffiSchema);
    for (let key in defaultTffi) {
        if (defaultTffi.hasOwnProperty(key) && tffi[key] === undefined) {
            tffi[key] = defaultTffi[key];
        }
    }
}


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
            let validation = validator.validate(json, tffiSchema);
            if (validation.valid) {
                this.setState({errorMessage: null});
                setDefaults(json);
                this.props.updateTrip(json);
            } else {
                this.setState({errorMessage: "Invalid TFFI file."});
            }
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
                <label className="btn btn-primary">
                    Browse <input type="file" onChange={this.loadTFFI} id="tffifile" hidden/>
                </label>
            </div>
              {infoMessage}
          </div>
        </div>
    )
  }
}

export default Destinations;