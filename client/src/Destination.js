import React, {Component} from 'react';



export default class Destination extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="list-group-item">
                {this.props.place.id} / {this.props.place.name} / {this.props.place.longitude} / {this.props.place.latitude}
            </div>)
    }
}