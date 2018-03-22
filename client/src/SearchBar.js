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
        this.onChange = this.onChange.bind(this);
        this.onNewDestinationClick = this.onNewDestinationClick.bind(this);
        this.addDestination = this.addDestination.bind(this);
        this.query = this.query.bind(this);
    }

    onChange(value) {
        let ids = new Set();
        for (let i = 0; i < this.props.places.length; i++) {
            ids.add(this.props.places[i].id);
        }
        if (ids.has(value.id)) {
            for (let i = 0; i <= ids.size; i++) {
                if (!ids.has(value.id+i)) {
                    value.id+= i;
                    break;
                }
            }
        }
        this.props.addDestination(value);
    }

    onNewDestinationClick(option) {
        console.log(option);
        // Called when they click the button to add a destination
        this.setState({
            placeName: option.id
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
                console.log(json);
                if (json === undefined) {
                    console.log("Invalid response.");
                    return [];
                } else {
                    return {options: json.places};
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
                                labelKey="name"
                                placeholder="Add a destination..."
                                loadingPlaceholder="Loading..."
                                cache={false}
                                multi={false}
                                loadOptions={this.query}
                                filterOption={(option, filter) => {
                                    // Do no filtering, just return all options
                                    return true;
                                }}
                                promptTextCreator={(input) => "Create new destination " + input}
                                onNewOptionClick={this.onNewDestinationClick}
                                onChange={this.onChange}
                                backSpaceRemoves />
            </div>
        );
    }

}