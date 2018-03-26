import React, {Component} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default class FilteredSearch extends Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.filterData = this.filterData.bind(this);
        this.state = {collapse: false};
    }


toggle(){
    this.setState({ collapse: !this.state.collapse });
}

filterData(){

}

render() {
    return (
        <div>
            <br/>
            <br/>
            <Button color="primary" onClick={this.toggle} style={{backgroundColor: "#1E4D2B"}}>Filters</Button>
            <Collapse isOpen={this.state.collapse}>
                <div id="filter" className="card">
                    <div id="filters" className="card-body">
                        <p> select your filters here</p>
                    </div>
                </div>
            </Collapse>
        </div>
    );
    }
}
