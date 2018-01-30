function degreesMinutesSeconds(match) {
  // Capture groups are 1-indexed, as 0 is the whole capture
  var lat = parseInt(match[1]);
  lat += match[2] == undefined ? 0 : parseInt(match[2]) / 60;
  lat += match[3] == undefined ? 0 : parseInt(match[3]) / 3600;
  lat *= match[4] == 'N' ? 1 : -1;
  var long = parseInt(match[5]);
  long += match[6] == undefined ? 0 : parseInt(match[6]) / 60;
  long += match[7] == undefined ? 0 : parseInt(match[7]) / 3600;
  long *= match[8] == 'E' ? 1 : -1;
  if (Number.isFinite(lat) && Number.isFinite(long)) {
    return new Coordinate(lat, long);
  } else {
    return null;
  }
}
function degreesDecimalMinutes(match) {
  var lat = parseInt(match[1]);
  lat += match[2] == undefined ? 0 : parseFloat(match[2]) / 60;
  lat *= match[3] == 'N' ? 1 : -1;
  var long = parseInt(match[4]);
  long += match[5] == undefined ? 0 : parseFloat(match[5]) / 60;
  long *= match[6] == 'E' ? 1 : -1;
  if (Number.isFinite(lat) && Number.isFinite(long)) {
    return new Coordinate(lat, long);
  } else {
    return null;
  }
}
function decimalDegrees(match) {
  var lat = parseFloat(match[1]);
  lat *= match[2] == 'N' ? 1 : -1;
  var long = parseFloat(match[3]);
  long *= match[4] == 'E' ? 1 : -1;
  if (Number.isFinite(lat) && Number.isFinite(long)) {
    return new Coordinate(lat, long);
  } else {
    return null;
  }
}
function floatingPoint(match) {
  var lat = parseFloat(match[1]);
  var long = parseFloat(match[2]);
  if (Number.isFinite(lat) && Number.isFinite(long)) {
    return new Coordinate(lat, long);
  } else {
    return null;
  }
}

function fileSelector(evt){
	/**
	 * This function is trigger when a file is uploaded
	 * A file reader is created that reads the JSON file
	 * The JSON file will get parsed into an array of JavaScript strings
	 *
	*/
	
  var file = evt.target.files[0];
  var fileReader = new FileReader();
  fileReader.onload = function(evt){
    var contents = evt.target.result;
    var scriptString = JSON.parse(contents);
	
	//logs results to console so we can see contents of scriptString array
    //console.log(scriptString);
	//still have to add a function that creates a table with data
    //this.fileInterpretor(scriptString);
    
    
  };
  fileReader.readAsText(file);
  
}

//Event listener for when a file is uploaded
document.getElementById('file').addEventListener('change', fileSelector, false);


let CoordinateParser = {
  // There's a separate regex for each format along with a function to extract the information
  // from the capture groups. The links provide an explanation for the components of each regex
  // along with unit tests to verify that they work. These are designed to be as flexible as possible
  // and are fairly complicated for that reason.
  // Regexes:
  // https://regex101.com/r/q3ygIu/5/tests
  // https://regex101.com/r/SGceKs/3/tests
  // https://regex101.com/r/ZyvGn6/2/tests
  // https://regex101.com/r/gKpYIj/1/tests
  formats: [[/^\s*(\d+)°\s*(?:(\d+)(?:′|'))?\s*(?:(\d+)(?:″|"))?\s*(N|S)\s*(\d+)°\s*(?:(\d+)(?:′|'))?\s*(?:(\d+)(?:″|"))?\s*(E|W)\s*$/,
              degreesMinutesSeconds],
            [/^\s*(\d+)°\s*(?:(\d+(?:\.\d+)?)(?:′|'))\s*(N|S)\s*(\d+)°\s*(?:(\d+(?:\.\d+)?)(?:′|'))\s*(E|W)\s*$/,
              degreesDecimalMinutes],
            [/^\s*(\d+(?:\.\d+)?)°\s*(N|S)\s*(\d+(?:\.\d+)?)°\s*(E|W)\s*$/,
              decimalDegrees],
            [/^\s*(-?\d+(?:\.\d+)?)\s*(-?\d+(?:\.\d+)?)\s*$/,
              floatingPoint],
           ],
  parse(input) {
    for (pair of this.formats) {
      var match = pair[0].exec(input);
      if (match !== null) {
        return pair[1](match);
      } 
    }
    return null;
  }
}

/**
 * A coordinate point on the globe.
 */
class Coordinate {
  /**
   * @param {number} lat - the coordinate point's latitude.
   * @param {number} long - the coordinate point's longitude.
   */
  constructor(lat, long) {
    this.lat = lat;
    this.long = long;
  }
  /**
   * Parses the input string to a Coordinate.
   * @param {string} input - the input string
   * @returns {Coordinate} - the Coordinate conversion of the string, or null
   *     if the input was invalid.
   */
  static parse(input) {
    return CoordinateParser.parse(input);
  }
}




class Header extends React.Component{
    render() {
        return (
                <div>
                <h1 className="text-center"> Distance Calculator</h1>
                </div>
                
                )
    }
}

class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      sourceLat: "",
      sourceLong: "",
      destLat: "",
      destLong: "",
      distance: 0
    };
 
    this.parser = this.parser.bind(this);
    this.setLat1 = this.setLat1.bind(this);
    this.setLong1 = this.setLong1.bind(this);
    this.setLat2 = this.setLat2.bind(this);
    this.setLong2 = this.setLong2.bind(this);
    this.getDistance = this.getDistance.bind(this);
  }
  parser(number){//not the real parser
    this.setLat1(number);
    this.setLong1(number);
    this.setLat2(number);
    this.setLong2(number);
    }
  
  setLat1(number){
      this.setState({ sourceLat: Number(this.degreesToRad(number.target.value))});
  }
  
    setLong1(number){
      this.setState({ sourceLong: Number(this.degreesToRad(number.target.value))});
  }
  
    setLat2(number){
      this.setState({ destLat: Number(this.degreesToRad(number.target.value))});
  }
    setLong2(number){
      this.setState({ destLong: Number(this.degreesToRad(number.target.value))});
  }
    getDistance(){//not correctly implemented yet
  //var x = Math.cos(Number(this.state.destLat))*Math.cos(Number(this.state.destLong))-Math.cos(Number(this.state.sourceLat))*Math.cos(Number(this.state.sourceLong));//cos(Theta2)*cos(Lamda2)- cos(Theta1)*cos(Lamda1)
	//var y = Math.cos(Number(this.state.destLat))*Math.sin(Number(this.state.destLong))-Math.cos(Number(this.state.sourceLat))*Math.sin(Number(this.state.sourceLong));//cos(Theta2)*sin(Lamda2)- cos(Theta1)*sin(Lamda1)
	//var z = Math.sin(Number(this.state.destLat))-Math.sin(Number(this.state.sourceLat));//sin(Theta2)-sin(Theta1)
	//return Math.sqrt(Math.po      var a = Math.cos(Number(this.state.sourceLat));
      //var a = Math.cos(Number(this.state.sourceLat));
      //return a;//Number(Obj.degreesToRadians(a));
      return this.state.destLat;
    }         

 degreesToRad(degree){//convert float input in degrees to radians
  return Number((degree/180)*Math.PI);
}
  
  render() {
    return (
      <div className="container"> 
	<div className="row">
	  <div className="col-9">
	    <h3>Input</h3>
	    <div className="row">
	      <div className="col-lg-3 col-md-offset-1">
	        <input type="text" className="text" value={this.parser.value} onChange={this.parser}/>
	      </div>
	      <div className="col-lg-3">
	        <input type="text" className="text" value={this.parser.value} onChange={this.parser}/>
	      </div>
	    </div>
	  </div>
	</div>
	<br />
	<div className="row">
	  <div className="col-9">
            <h3>Output</h3>
            <input type="text" className="text" value={this.getDistance()} disabled/>
	  </div>
	</div>
      </div>
    );
  }
}


class Main extends React.Component {
  render() {
    return (
    <div>
      <div className="jumbotron bg-info text-white">
	<Header />
        <hr />
      </div>
      <Body />
    </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
