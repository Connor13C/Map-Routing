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
               {this.selectValues(i)};

           }
       }
    }

    selectValues(index){
    let Key = "attribute" + index;
        this.setState({
            dropdownValues: this.props.filters[index].values.map((item, Key)=> <DropdownItem onClick={this.filterData} key={Key}> {item} </DropdownItem>)
        });
    }

    filterData(){
        console.log("query has been selected");
    }

    render() {
        let dropdown;
        if(this.state.dropdownValues == null){
            dropdown = null;
        }
        else {
            dropdown = <Dropdown style={{backgroundColor:"#1E4D2B"}} isOpen={this.state.dropdown2Open} toggle={this.secondToggle}>
                <DropdownToggle caret >
                    Select
                </DropdownToggle>
                <DropdownMenu>
                    {this.state.dropdownValues}
                </DropdownMenu>
            </Dropdown>;
        }
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
                {dropdown}
            </div>

        );
    }
}

