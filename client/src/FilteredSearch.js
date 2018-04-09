import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card, Dropdown, DropdownMenu, DropdownToggle, DropdownItem} from 'reactstrap';

export default class FilteredSearch extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.filterData = this.filterData.bind(this);
        this.populateDropDown2 = this.populateDropDown2.bind(this);
        this.selectQuery = this.selectQuery.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }


    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    populateDropDown2(e) {
        let value = e.target.value;
        let index = e.target.index;

    console.log("This is the props field");
    console.log(this.props);
    console.log(value);

       for(var i = 0; i < this.props.filters.size; i++){
           if(this.props.filters[i] == value){
               <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                   <DropdownToggle caret>
                       Select
                   </DropdownToggle>
                   <DropdownMenu>
                       {this.selectQuery(i)}
                   </DropdownMenu>
               </Dropdown>

           }
       }
    }

    selectQuery(index) {
        for(var i = 0; i < this.props.filters[index].values.size; j++){
            <DropdownItem>this.props.filters[index].values[j]</DropdownItem>
        }
    }

    filterData(){

    }

    render() {
        return (

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
        );
    }
}

