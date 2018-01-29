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

class Main extends React.Component {
    render() {
        return (
                <div>
                <div className="jumbotron">
                <Header />
                <hr/>
                </div>
                </div>
                );
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));
