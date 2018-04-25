import React, {Component} from 'react';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    CardTitle,
    CardText,
    Row,
    Col,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import classnames from 'classnames';

export default class FilteredSearch extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.checkBoxState = this.checkBoxState.bind(this);
        this.renderFilter = this.renderFilter.bind(this);
        this.state = {
            collapse: false,
            airports: [],
            airportsCheckboxes:[],
            filter: [{
                attribute: "",
                values: [],
            }],

        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }



   renderFilter(){
       if(this.props.filters.length > 0) {
           return(
               this.props.filters[0].values.map((item, index) =>
                   <FormGroup check>
                       <Label check>
                           <Input type="checkbox" onClick={this.checkBoxState} key={index} value={item}/> {item}
                       </Label>
                   </FormGroup>)
           );
       }
       else{
           return <div></div>;
       }
   }
    checkBoxState(e){
        let checkBoxes;
        //console.log(this.state.airportsCheckboxes);
            if (this.state.airportsCheckboxes.indexOf(e.target.value) >= 0) {
                this.state.airportsCheckboxes.splice(this.state.airportsCheckboxes.indexOf(e.target.value), 1);
                checkBoxes = this.state.airportsCheckboxes.slice();
                this.setState({
                    airportsCheckboxes: checkBoxes,
                    filter:{
                        attribute: "type",
                        values: checkBoxes,
                    }


                })

            }
            else {
                this.state.airportsCheckboxes.push(e.target.value);
                checkBoxes = this.state.airportsCheckboxes.slice();
                this.setState({
                    airportsCheckboxes: checkBoxes,
                    filter:{
                        attribute: "type",
                        values: checkBoxes,
                    }
                })
            }

        this.props.setFilters(this.state.filter);
    }


    render() {
        let checkBoxes = this.renderFilter();
        return (
            <div style={{overflow: 'auto'}}>
                <Button color="primary" onClick={this.toggle} style={{backgroundColor: "#1E4D2B"}}>Filters</Button>
                <Collapse isOpen={this.state.collapse}>
                    <div id="filters" className="card">
                        <div className="card-body">
                            <p> Select your filter type </p>
                            {checkBoxes}
                        </div>
                    </div>
                </Collapse>
            </div>

    );
    }
    }

