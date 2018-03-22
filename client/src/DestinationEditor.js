import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const defaultState = () => ({
    id: "",
    name: "",
    latitude: "",
    longitude: ""
});

export default class DestinationEditor extends Component {
    constructor(props) {
        super(props);
        this.finish = this.finish.bind(this);
        this.cancel = this.cancel.bind(this);
        this.state = defaultState();
        this.query = this.query.bind(this);
    }

    finish() {
        this.props.onFinish(this.state);
        this.setState(defaultState());
    }

    cancel() {
        this.props.onFinish(null);
        this.setState(defaultState());
    }

    componentWillReceiveProps(nextProps) {
        this.setState(Object.assign({}, defaultState(), nextProps.place));
    }

    setField(name) {
        return (event) => {
            let obj = {};
            obj[name] = event.target.value;
            this.setState(obj);
        };
    }

    async query(){
        try {
            let serverResponse = await this.fetchResponse();
            let query = await serverResponse.json();
            console.log(query);
            this.props.updateQuery(query);
          } catch(err) {
            console.error(err);
          }
        }

    createInput(name, id) {
        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">{name}</span>
                </div>
                <input type="text" className="form-control"
                       value={this.state[id]}
                       onChange={this.setField(id)}/>
            </div>
        );
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.cancel}>
                <ModalHeader>{this.props.title}</ModalHeader>
                <ModalBody>
                    {this.createInput("Id", "id")}
                    {this.createInput("Name", "name")}
                    {this.createInput("Lat", "latitude")}
                    {this.createInput("Long", "longitude")}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.finish}>
                        {this.props.confirmation}
                    </Button>
                    <Button color="secondary" onClick={this.cancel}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

DestinationEditor.defaultProps = {
    isOpen: false,
    place: {
        id: "",
        name: "",
        latitude: "",
        longitude: ""
    },
    title: "Create new Destination",
    confirmation: "Add Destination"
};