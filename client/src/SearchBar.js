import React, {Component} from 'react';
import { AsyncCreatable } from 'react-select';
import DestinationEditor from "./DestinationEditor";



export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            editorOpen: false
        };
        this.onChange = this.onChange.bind(this);
        this.onNewDestinationClick = this.onNewDestinationClick.bind(this);
        this.addDestination = this.addDestination.bind(this);
        this.query = this.query.bind(this);
    }

    onChange(value) {
        // Called whenever they type something
        this.setState({
            value
        })
    }

    onNewDestinationClick() {
        // Called when they click the button to add a destination
        this.setState({
            editorOpen: true
        })
    }

    addDestination(place) {
        // Called by the DestinationEditor Modal
        // If place is null then they cancelled the creation
        this.setState({
            value: "",
            editorOpen: false
        })
    }



    query(input) {
        // Needs to call search endpoint
        return Promise.resolve({ options: [] });
        // Example from the demo:
        /*
        return fetch(`https://api.github.com/search/users?q=${input}`)
		.then((response) => response.json())
		.then((json) => {
			return { options: json.items };
		});
        */
    }


    render() {
        //https://github.com/JedWatson/react-select
        // Check that out if you need to add more properties
        return (
            <div className="pb-2">
                <DestinationEditor isOpen={this.state.editorOpen} onFinish={this.addDestination} initialId={this.state.value}/>
                <AsyncCreatable valueKey="id"
                                labelKey="query"
                                placeholder="Enter place name..."
                                multi={false}
                                value={this.state.value}
                                onChange={this.onChange}
                                loadOptions={this.query}
                                promptTextCreator={(input) => "Create new destination " + input}
                                onNewOptionClick={this.onNewDestinationClick}
                                backSpaceRemoves />
            </div>
        );
    }

}