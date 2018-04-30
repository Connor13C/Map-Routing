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
import Select from 'react-select';

export default class FilteredSearch extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.checkBoxState = this.checkBoxState.bind(this);
        this.renderFilter = this.renderFilter.bind(this);
        this.state = {
            collapse: false,
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    renderFilters() {
        return this.props.filters.map(this.renderFilter);

    }

   renderFilter(filter) {
        if (filter.values.length < 10) {
            return (
                <FormGroup key={filter.attribute}>
                    {filter.attribute}
                    {this.renderCheckboxes(filter)}
                </FormGroup>
            );
        } else {
            return this.renderSearchbar(filter);
        }
   }

   renderSearchbar(filter) {
        let active = this.getActiveFilter(filter.attribute);
        let value = active ? active.values : [];
        return (
            <div key={filter.attribute}>
                {filter.attribute}
                <Select
                    multi
                    options={filter.values.map(this.createOption)}
                    value={value.map(this.createOption)}
                    placeholder="Search..."
                    onChange={values => {
                        this.modFilter(filter.attribute, f => {
                            f.values = values.map(option => option.value);
                        })
                    }}
                />
            </div>
        );
   }

   createOption(value) {
        return {value, label: value};
   }

   renderCheckboxes(filter) {
        let activeFilter = this.getActiveFilter(filter.attribute);
       return(
           filter.values.map((item, index) =>
               <div key={index} className="form-check">
                   <Label check>
                       <Input type="checkbox"
                              onClick={this.checkboxToggler(filter.attribute, item)}
                              value={item}
                              checked={!!activeFilter && activeFilter.values.includes(item)}
                       /> {item}
                   </Label>
               </div>
       ))
   }

   checkboxToggler(attribute, key) {
        return () => {
            this.modFilter(attribute, filter => {
                if (!filter.values.includes(key)) {
                    filter.values.push(key);
                } else {
                    let index = filter.values.indexOf(key);
                    filter.values.splice(index, 1);
                }
            });
        };
   }

   modFilter(attribute, fn) {
        let newFilters = this.props.activeFilters.slice();
        let found = false;
        for (let i = 0; i < newFilters.length; i++) {
            let filter = newFilters[i];
            if (filter.attribute === attribute) {
                let values = filter.values.slice();
                let newFilter = {attribute, values};
                fn(newFilter);
                if (newFilter.values.length > 0) {
                    newFilters[i] = newFilter;
                } else {
                    newFilters.splice(i, 1);
                }
                found = true;
                break;
            }
        }
        if (!found) {
            let newFilter = {attribute, values: []};
            fn(newFilter);
            if (newFilter.values.length > 0) {
                newFilters.push(newFilter);
            }
        }
        this.props.setFilters(newFilters);
   }

   getActiveFilter(attribute) {
        return this.props.activeFilters.find(filter => filter.attribute === attribute);
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
        return (
            <div>
                <Button color="primary" onClick={this.toggle} style={{backgroundColor: "#1E4D2B"}}>Filters</Button>
                <Collapse isOpen={this.state.collapse}>
                    <div id="filters" className="card">
                        <div className="card-body">
                            <p> Select your filter type </p>
                            {this.renderFilters()}
                        </div>
                    </div>
                </Collapse>
            </div>

    );
    }
    }

