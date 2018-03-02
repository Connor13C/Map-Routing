import React, {Component} from 'react';

export default class DestinationEditor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Id</span>
                    </div>
                    <input type="text" className="form-control"/>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Name</span>
                    </div>
                    <input type="text" className="form-control"/>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Lat</span>
                    </div>
                    <input type="text" className="form-control"/>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Long</span>
                    </div>
                    <input type="text" className="form-control"/>
                    <button type="button" className="btn btn-success">Add</button>
                </div>
            </div>
        );
    }
}