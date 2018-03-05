import React, {Component} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

/* Options allows the user to change the parameters for planning
 * and rendering the trip map and itinerary.
 * The options reside in the parent object so they may be shared with the Trip object.
 * Allows the user to set the options used by the application via a set of buttons.
 */
class Options extends Component{
  constructor(props) {
    super(props);
    this.changeOption = this.changeOption.bind(this);
    this.setMiles = this.setMiles.bind(this);
    this.setKilo = this.setKilo.bind(this);
    this.setNautMiles = this.setNautMiles.bind(this);
    this.getKilometersClassName = this.getKilometersClassName.bind(this);
    this.getMilesClassName = this.getMilesClassName.bind(this);
    this.getNautMilesClassName = this.getNautMilesClassName.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  changeOption(arg) {
    let options={
      distance: arg
    };
    this.props.updateOptions(options);
  }

  setMiles(){
    this.changeOption("miles");
  }

  setKilo(){
    this.changeOption("kilometers");

  }

  setNautMiles(){
        this.changeOption("nautical miles");

    }
  
  getMilesClassName(){
    if(this.props.options.distance === "miles"){
      return "btn btn-outline-dark active";
    }
    else{
      return "btn btn-outline-dark ";
    }
  }

  getKilometersClassName(){
      if(this.props.options.distance === "kilometers"){
          return "btn btn-outline-dark active";
      }
      else{
          return "btn btn-outline-dark ";
      }
  }
  
  getNautMilesClassName(){
        if(this.props.options.distance === "nautical miles"){
            return "btn btn-outline-dark active";
        }
        else{
            return "btn btn-outline-dark ";
        }
    }

  render() {
    return(
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Options</Button>
        <Collapse isOpen={this.state.collapse}>
          <div id="options" className="card">
            <div className="card-body">
              <p>Highlight the options you wish to use.</p>
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className={this.getMilesClassName()}>
                  <input type="radio" id="miles" name="distance" autcomplete="off" onClick={this.setMiles}/> Miles
                </label>
                <label className={this.getKilometersClassName()}>
                  <input type="radio" id="kilometers" name="distance" autcomplete="off" onClick={this.setKilo}/> Kilometers
                </label>
                <label className={this.getNautMilesClassName()}>
                  <input type="radio" id="nautmiles" name="distance" autcomplete="off" onClick={this.setNautMiles}/> Nautical Miles
                </label>
              </div>
            </div>
              <br/>
              <br/>
              <p> Choose your optimization level.</p>
              <div className="slidecontainer">
                  <input type="range" min="0" max="1" defaultValue="0" className="slider" id="slider">
                  </input>
              </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Options;
