import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class DestinationEditor extends Component {
    constructor(props) {
        super(props);
        this.finish = this.finish.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    finish() {
        // Add the destination from the inputs
        // They pressed the button to finish
    }

    cancel() {
        this.props.onFinish(null);
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.cancel}>
                <ModalHeader>Create new Destination</ModalHeader>
                <ModalBody>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Id</span>
                        </div>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Name</span>
                        </div>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Lat</span>
                        </div>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Long</span>
                        </div>
                        <input type="text" className="form-control"/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.finish}>Add Destination</Button>{' '}
                    <Button color="secondary" onClick={this.cancel}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}