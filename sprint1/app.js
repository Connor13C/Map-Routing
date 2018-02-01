function degreesMinutesSeconds(match) {
  // Capture groups are 1-indexed, as 0 is the whole capture
  var lat = parseInt(match[1]);
  lat += match[2] == undefined ? 0 : parseInt(match[2]) / 60;
  lat += match[3] == undefined ? 0 : parseFloat(match[3]) / 3600;
  lat *= match[4] == 'N' ? 1 : -1;
  var long = parseInt(match[5]);
  long += match[6] == undefined ? 0 : parseInt(match[6]) / 60;
  long += match[7] == undefined ? 0 : parseFloat(match[7]) / 3600;
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
let CoordinateParser = {
  // There's a separate regex for each format along with a function to extract the information
  // from the capture groups. The links provide an explanation for the components of each regex
  // along with unit tests to verify that they work. These are designed to be as flexible as possible
  // and are fairly complicated for that reason.
  // Regexes:
  // https://regex101.com/r/q3ygIu/6/tests
  // https://regex101.com/r/SGceKs/3/tests
  // https://regex101.com/r/ZyvGn6/2/tests
  // https://regex101.com/r/gKpYIj/1/tests
  formats: [[/^\s*(\d+)°\s*(?:(\d+)(?:′|'))?\s*(?:(\d+(?:\.\d+)?)(?:″|"))?\s*(N|S)\s*(\d+)°\s*(?:(\d+)(?:′|'))?\s*(?:(\d+(?:\.\d+)?)(?:″|"))?\s*(E|W)\s*$/,
              degreesMinutesSeconds],
            [/^\s*(\d+)°\s*(?:(\d+(?:\.\d+)?)(?:′|'))\s*(N|S)\s*(\d+)°\s*(?:(\d+(?:\.\d+)?)(?:′|'))\s*(E|W)\s*$/,
              degreesDecimalMinutes],
            [/^\s*(\d+(?:\.\d+)?)°\s*(N|S)\s*(\d+(?:\.\d+)?)°\s*(E|W)\s*$/,
              decimalDegrees],
            [/^\s*(-?\d+(?:\.\d+)?)\s*(-?\d+(?:\.\d+)?)\s*$/,
              floatingPoint],
           ],
  parse(input) {
    for (var pair of this.formats) {
      var match = pair[0].exec(input);
      if (match !== null) {
        return pair[1](match);
      } 
    }
    return null;
  }
}
function degreesToRad(degree){//convert float input in degrees to radians
  return (degree/180)*Math.PI;
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
   * Gets the distance between this coordinate and another.
   * @param {Coordinate} other - the other coordinate
   * @param {number} conversionFactor - the unit used to convert
   *     to a standard unit.  Defaults to miles.
   * @returns {number} the distance between the two coordinates.
   */ 
  distanceTo(other, conversionFactor = 3958.7613) {
    var srcLat = degreesToRad(this.lat);
    var srcLong = degreesToRad(this.long);
    var destLat = degreesToRad(other.lat);
    var destLong = degreesToRad(other.long);
    var x = Math.cos(destLat)*Math.cos(destLong)-Math.cos(srcLat)*Math.cos(srcLong);//cos(Theta2)*cos(Lamda2)- cos(Theta1)*cos(Lamda1)
    var y = Math.cos(destLat)*Math.sin(destLong)-Math.cos(srcLat)*Math.sin(srcLong);//cos(Theta2)*sin(Lamda2)- cos(Theta1)*sin(Lamda1)
    var z = Math.sin(destLat)-Math.sin(srcLat);//sin(Theta2)-sin(Theta1)
    var c = Math.sqrt(Math.pow(x,2)+Math.pow(y,2)+Math.pow(z,2));//sqrt(x^2+y^2+z^2)
    var rho = 2*Math.asin(c/2);//2arcsin(C/2)
    var d = conversionFactor*rho;//radius*central angle (in miles km would be 6371.0088)
    return d;
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
/**
 * Represents a single leg of a trip.
 */ 
class TripLeg {
  /**
   *
   *@param {string} from - The source location
   *@param {string} to - The destination location
   *@param {number} length - Length of this leg
   *@param {number} cumulative - Length so far
   */
  constructor(from, to, length, cumulative) {
    this.from = from;
    this.to = to;
    this.length = length;
    this.cumulative = cumulative;
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
      units: "mi"
    };
 
    this.parser = this.parser.bind(this);
    this.parser2 = this.parser2.bind(this);
    this.getDistance = this.getDistance.bind(this);
    this.degreesToRad = this.degreesToRad.bind(this);
    this.setUnits = this.setUnits.bind(this);
  }
  parser(event){
      var coord = Coordinate.parse(event.target.value);
      if(coord==null){
        
      }
      else{
        this.setState({ sourceLat: Number(this.degreesToRad(coord.lat))});
        this.setState({ sourceLong: Number(this.degreesToRad(coord.long))});
      }
    }
   parser2(event){
      var coord = Coordinate.parse(event.target.value);
      if(coord==null){
        
      }
      else{
		this.setState({ destLat: Number(this.degreesToRad(coord.lat))});
		this.setState({ destLong: Number(this.degreesToRad(coord.long))});
	  }
   }
  
  getDistance(){
    if(this.state.sourceLat==""||this.state.sourceLong==""||this.state.destLat==""||this.state.destLong==""){
      return "Not correct format";
    }
    var unit;
    if(this.state.units==="mi"){
      unit=3958.7613;
    }
     if(this.state.units==="km"){
      unit=6371.0088;
    }
      var x = Math.cos(Number(this.state.destLat))*Math.cos(Number(this.state.destLong))-Math.cos(Number(this.state.sourceLat))*Math.cos(Number(this.state.sourceLong));//cos(Theta2)*cos(Lamda2)- cos(Theta1)*cos(Lamda1)
      var y = Math.cos(Number(this.state.destLat))*Math.sin(Number(this.state.destLong))-Math.cos(Number(this.state.sourceLat))*Math.sin(Number(this.state.sourceLong));//cos(Theta2)*sin(Lamda2)- cos(Theta1)*sin(Lamda1)
      var z = Math.sin(Number(this.state.destLat))-Math.sin(Number(this.state.sourceLat));//sin(Theta2)-sin(Theta1)
      var c = Math.sqrt(Math.pow(x,2)+Math.pow(y,2)+Math.pow(z,2));//sqrt(x^2+y^2+z^2)
      var rho = 2*Math.asin(c/2);//2arcsin(C/2)
      var d = unit*rho;//radius*central angle (in miles km would be 6371.0088)
      return d;
    }          

 degreesToRad(degree){//convert float input in degrees to radians
  return Number((degree/180)*Math.PI);
}
  setUnits(e){
    this.setState({units: e.target.value});
  }
  
  render() { 
    return (
      <div className="container"> 
	<div className="row">
	  <div className="col-9">
	   <h3>Enter Two Coordinates:</h3>
	    <div className="row">
	      <div className="col-lg-3 col-md-offset-1">
	        <input type="text" className="text" value={this.parser.value} onChange={this.parser}/>
	      </div>
	      <div className="col-lg-3">
	        <input type="text" className="text" value={this.parser2.value} onChange={this.parser2}/>
	      </div>
	    </div>
	  </div>
	</div>
	<br />
	<div className="row">
	  <div className="col-9">
            <h3>Calculated Distance:</h3>
            <input type="text" className="text" value={this.getDistance()} disabled/>
            <button type="button" className="btn btn-primary" onClick={this.setUnits} value="mi">Miles</button>
            <button type="button" className="btn btn-primary" onClick={this.setUnits} value="km">Kilometers</button>
	  </div>
	</div>
      </div>
    );
  }
}

class FileHandler extends React.Component{
  
  constructor(props){
    super(props);
    this.fileSelector = this.fileSelector.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.state = {trip:[]};
  }
  
  onFileChange(evt) {
    //need to call file interpreter here??
    var contents = evt.target.result;
    //console.log(contents);
    var brews = JSON.parse(contents);
    var trip = [];
    var cumulative = 0;
    var current = null;
    var currentCoord = null;
    for (var i = 0; i < brews.length; i++) {
      var dest = Coordinate.parse(brews[i].latitude + ' ' + brews[i].longitude);
      if (dest === null) {
        console.log('failed to parse ' + brews[i].latitude + ' ' +brews[i].longitude);
        console.log('belongs to ' + brews[i].id);
      } else if (current === null) {
        current = brews[i];
        currentCoord = dest;
      } else {
        var dist = currentCoord.distanceTo(dest);
        cumulative += dist;
        trip.push({from:current.name, to:brews[i].name, length:dist, cumulative:cumulative});
        current = brews[i];
        currentCoord = dest;
      }
    }
    //console.log(trip);
    //equivalent to {trip: trip}
    this.setState({trip});   
    
  }
  
  fileSelector(evt){
	/**
	 * This method is triggered when a file is uploaded
	 * A file reader is created that reads the JSON file
	 * The JSON file will get parsed into an array of JavaScript strings
	 *
	*/
    var file = evt.target.files[0];
    var fileReader = new FileReader();
    fileReader.onload = this.onFileChange;
    fileReader.readAsText(file);
  
  }
  
  render ()
    {
      console.log(this.state.trip);
        return <div>
          
          <div className="container">
            <br />
            <input type="file" onChange={this.fileSelector} />
          </div>
          <DestinationTable  info={this.state.trip} />
          
          
         </div>;
      

    }
  
}
class DestinationTable extends React.Component{
  constructor(props){
    super(props);
    
  }
  
  createTable(info){
    var arrayMap = info.map(brewery =>
      <tr>
        <td> {brewery.from} </td>
        <td> {brewery.to} </td>
        <td> {brewery.length} </td>
        <td> {brewery.cumulative} </td>
       </tr>
        
      
    );
    return arrayMap;
  }
  
  render()
  {
    var destTable = this.createTable(this.props.info);
    return (
      <div>
        <br />
        <div className="container-fluid">
            <div className="table-responsive-sm">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Source</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Length of leg</th>
                    <th scope="col">Cumulative</th>
                  </tr>
                </thead>
                <tbody>
                  {destTable}
                </tbody>
              </table>
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
	  <FileHandler />
    </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
