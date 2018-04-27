import React, {Component} from 'react';
import {Collapse, Button, InputGroup, Input, Form, FormGroup, Label} from 'reactstrap';

class Port extends Component {
    constructor(props) {
        super(props);
        this.handleEntry = this.handleEntry.bind(this);
        this.storeHost = this.storeHost.bind(this);
        this.storePort = this.storePort.bind(this);
        this.state = {
            host:"",
            port:"",
        }
    }

    storeHost(e){
        //console.log(e.target.value);
        this.setState(
            {
                host: e.target.value,
            }
        )
    }

    storePort(e){
        //console.log(e.target.value);
        this.setState(
            {
                port: e.target.value,
            }
        )
    }

    handleEntry() {
        this.props.updateLocation(this.state.host, this.state.port);
        //e.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="float-right">
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">Host: </Label>
                            <Input type="text" name="port" id="portNumber" placeholder="Host" onChange={this.storeHost}/>
                            <Label for="exampleEmail" className="mr-sm-2">Port: </Label>
                            <Input type="text" name="port" id="portNumber" placeholder="Port number" onChange={this.storePort}/>
                            <button type="button" onClick={this.handleEntry}>Submit</button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}


export default Port;