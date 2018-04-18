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
        this.toggleChecked = this.toggleChecked.bind(this);
        this.loadCheckboxes = this.loadCheckboxes.bind(this);
        this.checkBoxState = this.checkBoxState.bind(this);
        this.defaultChecked = this.defaultChecked.bind(this);
        this.renderTab = this.renderTab.bind(this);
        this.renderCheckboxes = this.renderCheckboxes.bind(this);
        this.state = {
            collapse: false,
            checked: false,
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
    toggleChecked(){
        this.setState({ checked: !this.state.checked});
    }

   renderTab(index){
        if(index == 0){
            this.setState({
                airportsTab: this.renderCheckboxes(index),
            });
        }
        else if(index == 1){
            this.setState({
                countryTab: this.renderCheckboxes(index),
            })
        }
        else{
            this.setState({
                continentTab: this.renderCheckboxes(index),
            })
        }
   }

   renderCheckboxes(index){
       return(this.props.filters[index].values.map((item, index) =>
           <FormGroup check>
               <Label check>
                   <Input type="checkbox"  defaultChecked={this.state.checked} onClick={(e)=>{this.checkBoxState(e, 0)}} key={index} value={item}/> {item}
               </Label>
           </FormGroup>));
   }





    checkBoxState(e, index){
        let checkBoxes;
        //console.log(this.state.airportsCheckboxes);
        if(index == 0) {
            if (this.state.airportsCheckboxes.indexOf(e.target.value) >= 0) {
                this.state.airportsCheckboxes.splice(this.state.airportsCheckboxes.indexOf(e.target.value), 1);
                checkBoxes = this.state.airportsCheckboxes.slice();
                this.setState({
                    airportsCheckboxes: checkBoxes,

                }, console.log(this.state.airportsCheckboxes))

            }
            else {
                this.state.airportsCheckboxes.push(e.target.value);
                checkBoxes = this.state.airportsCheckboxes.slice();
                this.setState({
                    airportsCheckboxes: checkBoxes,
                }, console.log(this.state.airportsCheckboxes))
            }

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
                                            this.renderTab(0);
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
                                            this.renderTab(1);
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
                                            this.renderTab(2);
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

