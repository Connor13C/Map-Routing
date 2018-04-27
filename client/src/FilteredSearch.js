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

export default class FilteredSearch extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.checkBoxState = this.checkBoxState.bind(this);
        this.renderFilter = this.renderFilter.bind(this);
        this.state = {
            collapse: false,
            filters: []
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }


    renderFilters() {
        return this.props.filters.map((_, index) => this.renderFilter(index));

    }

   renderFilter(index) {
        let filter = this.props.filters[index];
        return (
            <FormGroup>
                {this.renderChoices(index, filter)}
            </FormGroup>
        );

   }

   renderChoices(index, filter) {
       if(this.props.filters.length > 0) {
           return(
               this.props.filters[0].values.map((item, index) =>
                   <Label key={index} check>
                       <Input type="checkbox" onClick={this.checkboxToggler(filter.attribute, item)} value={item}/> {item}
                   </Label>
           ))
       }
       else{
           return <div></div>;
       }
   }

   checkboxToggler(attribute, key) {
        return (e) => {
            this.modFilter(attribute, filter => {
                if (!filter.values.includes(key)) {
                    filter.values.push(key);
                } else {
                    let index = filter.values.indexOf
                }
            });
        };
   }

   modFilter(attribute, fn) {
        let newFilters = this.props.filters.slice();
        for (let i = 0; i < newFilters.length; i++) {
            let filter = newFilters[i];
            if (filter.attribute === attribute) {
                let values = filter.values.slice();
                let newFilter = {attribute, values};
                newFilters[i] = fn(newFilter);
            }
        }
        this.props.setFilters(newFilters);
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

