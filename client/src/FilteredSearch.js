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
        this.toggleTab = this.toggleTab.bind(this);
        this.query = this.query.bind(this);
        this.populateCheckBoxes = this.populateCheckBoxes.bind(this);
        this.selectValues = this.selectValues.bind(this);
        this.state = {
            collapse: false,
            activeTab: '1',
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

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    populateCheckBoxes(tab) {

        //console.log(this.props);
        console.log(tab);

        if(tab == '1'){
            this.selectValues(0);
        }
        else if(tab == '2'){
            this.selectValues(1);
        }
        else{
            this.selectValues(2);
        }
    }

    selectValues(index) {
        console.log("this is the index");
        console.log(index);
        this.setState({
            checkBoxValues: this.props.filters[index].values.map((item, i) =>
                <FormGroup check>
                <Label check>
                    <Input type="checkbox" onChange={(e) => this.query(e, index)} key={i} value={item}/> {item}
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
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => {
                                            this.toggleTab('1');
                                            this.populateCheckBoxes('1');
                                                }}
                                    >
                                        Airport Type
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => {
                                            this.toggleTab('2');
                                            this.populateCheckBoxes('2');}}
                                    >
                                        Country
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '3' })}
                                        onClick={() => {
                                            this.toggleTab('3');
                                            this.populateCheckBoxes('3');
                                        }}
                                    >
                                        Continent
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                {checkBoxes}
                            </TabContent>
                        </div>
                    </div>
                </Collapse>
            </div>

    );
    }
    }

