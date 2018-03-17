import React, {Component} from 'react';
import Destination from './Destination';
import SearchBar from "./SearchBar";



export default class DestinationList extends Component {
    constructor(props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);
        this.addDestination.bind(this);
    }

    onUpdate(place, oldIndex, newIndex) {

    }

    addDestination(place) {

    }

    render() {
        return (
            <div>
                <SearchBar addDestination={this.addDestination}/>
                <ul className="list-group">
                    {this.props.trip.places.map((place, index) => <Destination place={place} index={index} onUpdate={this.onUpdate}/>)}
                </ul>
            </div>
        );
    }
}

