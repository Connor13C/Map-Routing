import React, {Component} from 'react';
import { Collapse, Button, InputGroup, Input} from 'reactstrap';
import './Options.css';
import Port from "./Port.js";
/* Options allows the user to change the parameters for planning
 * and rendering the trip map and itinerary.
 * The options reside in the parent object so they may be shared with the trip object.
 * Allows the user to set the options used by the application via a set of buttons.
 */
class Options extends Component{
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    this.changeOption = this.changeOption.bind(this);
    this.toggle = this.toggle.bind(this);
    this.optimizationValue = this.optimizationValue.bind(this);
    this.optimizationValueName = this.optimizationValueName.bind(this);
    this.renderSlider = this.renderSlider.bind(this);
    this.sliderSteps = this.sliderSteps.bind(this);
    this.setOption = this.setOption.bind(this);
    this.getClassName = this.getClassName.bind(this);
    this.createOption = this.createOption.bind(this);

      this.state = {
        collapse: false,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  clear(){
    this.props.reset();
  }

  changeOption(arg) {
   let options = this.props.options;
   var result = "";
   for (let p in arg) {
       if( arg.hasOwnProperty(p)) {
           options[p] = arg[p];
       }
   }
    this.props.updateOptions(options);
  }

    optimizationValue(e){
      let value = e.target.value;
      //console.log(value);
      this.changeOption({optimization: value});

  }

  optimizationValueName(){
    if(this.props.optimizationLabels === undefined){return("No Label");}
    //console.log(this.props.options.optimization);
    if(this.props.options.optimization == 0.0){return "None";}
    let steps = this.props.optimization;
    for(let i = 0.0; i <= steps; i++){
        //console.log("i/steps: ", i/steps);
        //console.log("Optimization Value: ", this.props.options.optimization);
        if(this.props.options.optimization <= (i/steps)){
            //console.log('label: ', this.props.optimizationLabels);
            return(this.props.optimizationLabels[i-1].label);
        }
        else{
            //console.log("Did Not Hit If Statement");
        }
    }
    return ("None");
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

  setOption(key, value) {
      let obj = {};
      obj[key] = value;
    this.changeOption(obj);
  }


  getClassName(key, value) {
      if(this.props.options[key] === value){
          return "btn btn-outline-dark active";
      }
      else{
          return "btn btn-outline-dark ";
      }
  }


  createOption(type, name, prettyName) {
      return (
          <label className={this.getClassName(type, name)}>
              <input type="radio" id={name} autoComplete="off" onClick={() => this.setOption(type, name)} /> {prettyName}
          </label>
      );
  }

  customUnitForm() {
      if (this.props.options.distance === "user defined") {
          return (
              <div>
              <InputGroup>
                  <Input placeholder="unit name" value={this.props.options.userUnit} onChange={e => this.setOption("userUnit", e.target.value)}/>
              </InputGroup>
                  <br />
              <InputGroup>
                  <Input placeholder="radius" value={this.props.options.userRadius} onChange={e => this.setOption("userRadius", e.target.value)}/>
              </InputGroup>
              </div>
          );
      } else {
          return;
      }
  }

    render() {
        return(
            <div>
              <Button color="primary" onClick={this.toggle} style={{backgroundColor:"#1E4D2B"}}>Options</Button>
              <Button className="float-right" color="primary" onClick={this.clear} style={{backgroundColor:"#1E4D2B"}}>Clear Destinations</Button>
              <Collapse isOpen={this.state.collapse}>
                <div id="options" className="card">
                  <div className="card-body">
                   <Port updateLocation={this.props.updateLocation}/>
                    <p>Highlight the options you wish to use.</p>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        {this.createOption("distance", "miles", "Miles")}
                        {this.createOption("distance", "kilometers", "Kilometers")}
                        {this.createOption("distance", "nautical miles", "Nautical Miles")}
                        {this.createOption("distance", "user defined", "Custom")}
                    </div>
                      {this.customUnitForm()}
                    <br/>
                    <p>Choose The Map type you wish to use.</p>
                    <div className="btn-group btn-group-toggle">
                        {this.createOption("map", "kml", "Google Maps")}
                        {this.createOption("map", "svg", "SVG")}
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
