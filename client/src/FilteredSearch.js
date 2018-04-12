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
        this.renderAirport = this.renderAirport.bind(this);
        this.selectValues = this.selectValues.bind(this);
        this.currentTab = this.currentTab.bind(this);
        this.state = {
            collapse: false,
            activeTab: '1',
            checkBoxValues1: null,
            checkBoxValues2: null,
            checkBoxValues3: null,
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

    renderAirport(tab) {
        console.log(this.props.filters);
        let index;
        if(tab == '1'){
            index = 0;
        }
           return(
               <TabContent activeTab={this.state.activeTab}>
                   {this.props.filters[index].values.map((item, index) =>
                       <FormGroup check>
                           <Label check>
                               <Input type="checkbox" key={index} value={item}/> {item}
                           </Label>
                       </FormGroup>)
                   }
               </TabContent>
           )
    }

    selectValues(index) {
        console.log("this is the index");
        console.log(index);
        if(this.state.activeTab == '1') {
            this.setState({
                checkBoxValues1: this.props.filters[index].values.map((item, i) =>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" onChange={(e) => this.query(e, index)} key={i} value={item}/> {item}
                        </Label>
                    </FormGroup>)

            });
        }

    }

    query(e, index) {
        console.log(index);
        console.log("this is checked");
        console.log(e.target.value);
        let checked = [];
        checked.push(e.target.value);
        if(this.state.activeTab='1') {
            console.log(checked);
            let filter = {
                attribute: "type",
                values: checked,
            }
            console.log(filter);
        }
    }
    currentTab(){

    }

    render() {


       let airport = (<div className="card-body" style={{overflow: 'auto'}}>
                <Form>
                    {this.state.checkBoxValues1}
                </Form>
                </div>);

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
                                            }}
                                    >
                                        Country
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '3' })}
                                        onClick={() => {
                                            this.toggleTab('3');
                                        }}
                                    >
                                        Continent
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            {this.renderAirport(this.state.activeTab)}
                        </div>
                    </div>
                </Collapse>
            </div>

    );
    }
    }

