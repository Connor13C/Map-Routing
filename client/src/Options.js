import React, {Component} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Options.css';

/* Options allows the user to change the parameters for planning
 * and rendering the trip map and itinerary.
 * The options reside in the parent object so they may be shared with the trip object.
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
    this.optimizationValue = this.optimizationValue.bind(this);
    this.optimizationValueName = this.optimizationValueName.bind(this);
    this.renderSlider = this.renderSlider.bind(this);
    this.sliderSteps = this.sliderSteps.bind(this);
    this.getKMLClassName = this.getKMLClassName.bind(this);
    this.getSVGClassName = this.getSVGClassName.bind(this);
    this.setKML = this.setKML.bind(this);
    this.setSVG = this.setSVG.bind(this);
    this.state = {
        collapse: false,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  changeOption(arg) {
   let options = this.props.options;
   var result = "";
   for (var p in arg) {
       if( arg.hasOwnProperty(p)) {
           options[p] = arg[p];
       }
   }
    console.log(result);
    this.props.updateOptions(options);
  }

  setMiles(){
    this.changeOption({distance : "miles"});
  }

  setKML(){
      this.changeOption({map: "kml"});
  }

  setSVG(){
      this.changeOption({map: "svg"});
  }

  setKilo(){
    this.changeOption({distance: "kilometers"});

  }

  setNautMiles(){
        this.changeOption({distance: "nautical miles"});

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

    getKMLClassName(){
        if(this.props.options.map === "kml"){
            return "btn btn-outline-dark active";
        }
        else{
            return "btn btn-outline-dark ";
        }
    }

    getSVGClassName(){
        if(this.props.options.map === "svg"){
            return "btn btn-outline-dark active";
        }
        else{
            return "btn btn-outline-dark ";
        }
    }

    optimizationValue(e){
      let value = e.target.value;
      console.log(value);
      this.changeOption({optimization: value});

  }
  optimizationValueName(){
    if(this.props.options.optimization == 0.0){
        return ("No Optimization");
    }
    else{
        return ("Nearest Neighbor");
    }

  }

  renderSlider(){
   return(
          <input type="range" min={0.0} max={1.0} className="slider" id="rangeSlider" onChange={this.optimizationValue}
                 value={this.props.options.optimization} step={this.sliderSteps()}>
          </input>
   )
  }

  sliderSteps(){
    let opt = this.props.optimization;
    let step = 1 / opt;
    step.toFixed(2);
    let returnValue = "" + step;
    return returnValue;
  }

    render() {
        return(
            <div>
              <Button color="primary" onClick={this.toggle} style={{backgroundColor:"#1E4D2B"}}>Options</Button>
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
                      <br/>
                    <p>Choose The Map type you wish to use.</p>
                    <div className="btn-group btn-group-toggle">
                        <label className={this.getKMLClassName()}>
                            <input type="radio" id="miles" name="distance" autcomplete="off" onClick={this.setKML}/> Google Maps
                        </label>
                        <label className={this.getSVGClassName()}>
                            <input type="radio" id="kilometers" name="distance" autcomplete="off" onClick={this.setSVG}/> SVG
                        </label>
                    </div>
                  </div>

                  <div className="container-fluid">
                      <p> Optimization level: {this.optimizationValueName()}</p>
                      {this.renderSlider()}
                     <br/>
                      <br/>
                  </div>
                </div>
              </Collapse>
            </div>
        );
    }
}


export default Options;
