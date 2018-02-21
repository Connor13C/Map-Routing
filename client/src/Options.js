import React, {Component} from 'react';

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
    this.getKilometersClassName = this.getKilometersClassName.bind(this);
    this.getMilesClassName = this.getMilesClassName.bind(this);
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

  render() {
    return(
        <div id="options" className="card">
          <div className="card-header bg-info text-white">
            Options
          </div>
          <div className="card-body">
            <p>Highlight the options you wish to use.</p>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className={this.getMilesClassName()}>
                <input type="radio" id="miles" name="distance" autcomplete="off" onClick={this.setMiles}/> Miles
              </label>
              <label className={this.getKilometersClassName()}>
                <input type="radio" id="kilometers" name="distance" autcomplete="off" onClick={this.setKilo}/> Kilometers
              </label>
            </div>
          </div>
        </div>
    )
  }
}

export default Options;