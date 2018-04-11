import React, {Component} from 'react';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';
import Destinations from "./Destinations";

export default class FilteredSearch extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.secondToggle = this.secondToggle.bind(this);
        this.query = this.query.bind(this);
        this.populateCheckBoxes = this.populateCheckBoxes.bind(this);
        this.selectValues = this.selectValues.bind(this);
        this.state = {
            collapse: false,
            dropdownOpen: false,
            dropdown2Open: false,
            checkBoxValues: null,
            filter: [{
                attribute: "",
                values: [],
            }],

        };
    }


    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }


    secondToggle() {
        this.setState({
            dropdown2Open: !this.state.dropdown2Open
        });
    }

    populateCheckBoxes(e) {
        let value = e.target.value;

        //console.log(this.props);
        console.log(value);

        for (var i = 0; i < this.props.filters.length; i++) {
            //console.log("Attribute: ");
            //console.log(this.props.filters[i].attribute);
            if (this.props.filters[i].attribute === value) {
                {
                    this.selectValues(i)
                }
                ;
               }


        }
    }

    selectValues(index) {
        //console.log(index);
        this.setState({
            checkBoxValues: this.props.filters[index].values.map((item, i) =>
                <FormGroup check>
                <Label check>
                    <Input type="checkbox" onClick={(e) => this.query(e, index)} key={i} value={item}/> {item}
                </Label>
                </FormGroup>)

        });
    }

    query(e, index) {

        let value = this.state.filter[0].values.push(e.target.value);
        //this.state.filter[0].attribute += this.props.filters[index].attribute;
        //console.log("This is value");
        //console.log(value);
        //console.log(this.state.filter[0].values);
        let filters = {
            attribute: this.props.filters[index].attribute,
            value: this.state.filter[0].values
        }
        this.setState({
                filter: filters
            }, () => console.log(this.state.filter)
        );
        this.props.setFilters(this.state.filter);

    }

    render() {
        let checkBoxes;
        if (this.state.checkBoxValues == null) {
            checkBoxes= null;
        }
        else {
            checkBoxes = (<div className="card-body" style={{overflow: 'auto'}}>
                <Form>
                    {this.state.checkBoxValues}
                </Form>
                </div>);
        }
        return (
            <div style={{overflow: 'auto'}}>
                <Button color="primary" onClick={this.toggle} style={{backgroundColor: "#1E4D2B"}}>Filters</Button>
                <Collapse isOpen={this.state.collapse}>
                    <div id="filters" className="card">
                        <div className="card-body">
                            <p> Select your filter type </p>
                            <Form>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="checkbox" value={"type"} onChange={this.populateCheckBoxes}/> Airport Type
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="checkbox" value={"country"} onChange={this.populateCheckBoxes} /> Country
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="checkbox" value={"continent"} onChange={this.populateCheckBoxes}/> Continent
                                    </Label>
                                </FormGroup>
                            </Form>
                            {checkBoxes}
                        </div>
                    </div>
                </Collapse>
            </div>

    );
    }
    }

