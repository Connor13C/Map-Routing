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
        this.renderAirport = this.renderAirport.bind(this);
        this.renderCountries = this.renderCountries.bind(this);
        this.renderContinents = this.renderContinents.bind(this);
        this.loadCheckboxes = this.loadCheckboxes.bind(this);
        this.checkBoxState = this.checkBoxState.bind(this);
        this.defaultChecked = this.defaultChecked.bind(this);
        this.state = {
            collapse: false,
            activeTab: '1',
            airportsTab:"",
            countryTab:"",
            continentTab:"",
            airportsCheckboxes:[],
            countryCheckboxes:[],
            continentCheckboxes:[],
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

    renderAirport() {
        //console.log(this.props.filters[0]);
        if(this.props.filters.length != 0) {
            this.setState({
                airportsTab:
                    this.props.filters[0].values.map((item, index) =>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox"  onClick={(e)=>{this.checkBoxState(e, 0)}} key={index} value={item}/> {item}
                        </Label>
                    </FormGroup>),
            });
        }
    }
    renderCountries(){
        if(this.props.filters.length != 0) {
            this.setState({
                countryTab:
                    this.props.filters[1].values.map((item, index) =>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox"  key={index} value={item}/> {item}
                            </Label>
                        </FormGroup>),
            });
        }
    }
    renderContinents(){
        if(this.props.filters.length != 0) {
            this.setState({
                continentTab:
                    this.props.filters[2].values.map((item, index) =>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" key={index} value={item}/> {item}
                            </Label>
                        </FormGroup>),
            });
        }
    }



    checkBoxState(e, index){
        let checkBoxes;
        //console.log(this.state.airportsCheckboxes);
        if(index == 0){
           checkBoxes = this.state.airportsCheckboxes.push(e.target.value);
            this.setState({
                airportsCheckboxes: checkBoxes
            }, console.log(this.state.airportsCheckboxes))
        }
    }

    defaultChecked(index){

    }

    loadCheckboxes(){
        let checkBoxes;
        if(this.state.activeTab == '1'){
            checkBoxes = this.state.airportsTab;
        }
        if(this.state.activeTab == '2'){
            checkBoxes = this.state.countryTab
        }
        if(this.state.activeTab == '3') {
            checkBoxes = this.state.continentTab
        }
        return checkBoxes
    }

    render() {
        let checkBoxes = this.loadCheckboxes();
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
                                            this.renderAirport();
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
                                            this.renderCountries();
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
                                            this.renderContinents();
                                        }}
                                    >
                                        Continent
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <div className="container-fluid">
                                    {checkBoxes}
                                </div>
                            </TabContent>
                        </div>
                    </div>
                </Collapse>
            </div>

    );
    }
    }

