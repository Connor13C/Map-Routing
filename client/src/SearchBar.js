import React, {Component} from 'react';
import { AsyncCreatable } from 'react-select';
import 'react-select/dist/react-select.css';
import DestinationEditor from "./DestinationEditor";



export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeName: "",
        };
        this.onNewDestinationClick = this.onNewDestinationClick.bind(this);
        this.addDestination = this.addDestination.bind(this);
        this.query = this.query.bind(this);
    }

    onNewDestinationClick(option) {
        // Called when they click the button to add a destination
        this.setState({
            placeName: option.query
        });
    }

    addDestination(place) {
        // Called by the DestinationEditor Modal
        // If place is null then they cancelled the creation
        this.setState({
            placeName: "",
        });
        if (place != null) {
            this.props.addDestination(place);
        }
    }



    query(input) {
        let options = {
            method: "POST",
            body: JSON.stringify({
                version: 2,
                type: "query",
                query: input
            })
        };
        return fetch('http://' + location.host + '/query', options)
            .then(response => response.json())
            .then(json => {
                if (json === undefined) {
                    console.log("Invalid response.");
                    return [];
                } else {
                    return json.places;
                }
            }, err => {
                console.log(err.message);
                return [];
            });
    }


    render() {
        //https://github.com/JedWatson/react-select
        // Check that out if you need to add more properties
        return (
            <div className="pb-2">
                <DestinationEditor isOpen={this.state.placeName.length !== 0}
                                   onFinish={this.addDestination}
                                   place={{name: this.state.placeName}}/>
                <AsyncCreatable valueKey="id"
                                labelKey="query"
                                placeholder="Add a destination..."
                                multi={false}
                                loadOptions={this.query}
                                promptTextCreator={(input) => "Create new destination " + input}
                                onNewOptionClick={this.onNewDestinationClick}
                                backSpaceRemoves />
            </div>
        );
    }

}