import React, {Component} from 'react'
import {compose, withProps} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Polyline, Marker} from 'react-google-maps'

/* MapContainer obtains and renders the map for the trip.
 * Might be an SVG or KML contained in the server response.
 */
class MapContainer extends Component {
  constructor(props){
    super(props);
    this.planCoordinates;
    this.getCoordinates.bind(this);
    this.getCenter.bind(this);
  }

  getCoordinates(){
      this.planCoordinates = this.props.trip.places.map(p => ({lat: p.latitude, lng: p.longitude}));
      console.log("Coordinates For GM API", this.planCoordinates);
  }

  getCenter(){
      if(this.planCoordinates.size === 0){
          console.log("Center: ", {lat: 39.87, lng: -104});
          return {lat: 39.87, lng: -104};
      }
      else{
          console.log("Center: ", this.planCoordinates[0]);
          return this.planCoordinates[0];
      }
  }
    // Create our path from the places array
    makePath(places) {
        let path = places.map(
            x => ({lat: x.latitude, lng: x.longitude})
        );
        path.push({lat: places[0].latitude, lng: places[0].longitude});
        return path;
    }

    // Create our markers
    makeMarkers(places) {
        let markers = places.map(
            x => <Marker position={{lat: x.latitude, lng: x.longitude}}/>
        );
        return markers;
    }

    render() {
        const places = this.props.trip.places;
        return (
            <GoogleMap
                defaultCenter={{lat: 0, lng: 0}}
                defaultZoom={1}
            >
                <Polyline path={this.makePath(places)}
                          options={{strokeColor: 'DeepSkyBlue'}}
                />
                {this.makeMarkers(places)}
            </GoogleMap>
        );
    }
}

 /* render() {
      const style = {
          width: '1%',
          height: '1%'
      }
      let svgHeader='data:image/svg+xml;charset=UTF-8,';
      let svgData = this.props.trip.map;
      this.getCoordinates();
       //<figure className="figure" id="map">
       //    <img className="figure-img img-fluid" alt="Map"
       //         src={svgHeader.concat(svgData)}/>
       //</figure>

      return (
          <div style={style}>
            <Map
                google={this.props.google}
                zoom={5}
                initialCenter={this.getCenter()}>
                <Polyline
                    paths={this.planCoordinates}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2} />
            </Map>
          </div>
      )

  }
}

//export default MapContainer;
export default GoogleApiWrapper({
    apiKey: ("AIzaSyB8UZTGK61XwzNflBMnQQ0C2Xfva9AzUDg")
})(MapContainer) */

const TripMap = compose(
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?' +
        'key=' + 'AIzaSyB8UZTGK61XwzNflBMnQQ0C2Xfva9AzUDg' +
        '&v=3.exp' +
        '&libraries=geometry,drawing,places',
        loadingElement: <div />,
        containerElement: <div/>,
        mapElement: <div style={{ height: `30%` }} />
    }),
    withScriptjs,
    withGoogleMap,
)(MapContainer);  // (2)

export default TripMap;