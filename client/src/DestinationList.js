import React, {Component} from 'react';
import Destination from './Destination';
import DestinationEditor from "./DestinationEditor";



export default class DestinationList extends Component {
    constructor(props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate(place, oldIndex, newIndex) {

    }

    render() {
        return (
            <div>
                <DestinationEditor/>
                <ul className="list-group">
                    {this.props.trip.places.map((place, index) => <Destination place={place} index={index} onUpdate={this.onUpdate}/>)}
                </ul>
            </div>
        );
    }
}

