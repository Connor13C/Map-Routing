import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card, Dropdown, DropdownMenu, DropdownToggle, DropdownItem} from 'reactstrap';

export default class FilteredSearch extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.secondToggle = this.secondToggle.bind(this);
        this.filterData = this.filterData.bind(this);
        this.populateDropDown2 = this.populateDropDown2.bind(this);
        this.selectValues = this.selectValues.bind(this);
        this.state = {
            dropdownOpen: false,
            dropdown2Open: false,
            dropdownValues: null,

        };
    }


    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }


    secondToggle(){
        this.setState({
            dropdown2Open: !this.state.dropdown2Open
        });
    }

    populateDropDown2(e) {
        let value = e.target.value;


    console.log("This is the props field");
    //console.log(this.props);
    //console.log(value);

       for(var i = 0; i < this.props.filters.length; i++){
           //console.log("Attribute: ");
           //console.log(this.props.filters[i].attribute);
           if(this.props.filters[i].attribute === value){
               console.log(this.props.filters[i].values);
               {this.selectValues(i)};

           }
       }
    }

    selectValues(index){
        this.setState({
            dropdownValues:
                <Dropdown isOpen={this.state.dropdown2Open} toggle={this.secondToggle()}>
                    <DropdownToggle caret>
                        Select
                    </DropdownToggle>
                    <DropdownMenu>
                        {this.props.filters[index].values.map((item)=> <DropdownItem> item </DropdownItem>)}
                    </DropdownMenu>
                </Dropdown>
        });
    }

    filterData(){

    }

    render() {
        return (
            <div>

                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Filters
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={this.populateDropDown2} value={"type"}>Airport type</DropdownItem>
                        <DropdownItem onClick={this.populateDropDown2} value={"country"}>Country</DropdownItem>
                        <DropdownItem onClick={this.populateDropDown2} value={"continent"}>Continent</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <br/>
            {this.state.dropdownValues}
            </div>

        );
    }
}

