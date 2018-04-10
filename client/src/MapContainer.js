import React, {Component} from 'react'
import {compose, withProps} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Polyline, Marker} from 'react-google-maps'

/* MapContainer obtains and renders the map for the trip.
 * Might be an SVG or KML contained in the server response.
 */
class MapContainer extends Component {
  constructor(props){
    super(props);
    this.getCenter.bind(this);
  }

  getCenter(places){
      if(this.props.trip.distances.length === 0){
          console.log("Center: ", {lat: 39.87, lng: -104});
          return {lat: 39.87, lng: -104};
      }
      else{
          let center = {
              lat: Number(places[0].latitude),
              lng: Number(places[0].longitude)
          }
          console.log("Center: ", center);
          return center;
      }
  }
    // Create our path from the places array
    makePath(places) {
        let path = places.map(
            x => ({lat: Number(x.latitude), lng: Number(x.longitude)})
        );
        path.push({lat: Number(places[0].latitude), lng: Number(places[0].longitude)});
        return path;
    }

    // Create our markers
    makeMarkers(places) {
        let markers = places.map(
            x => <Marker position={{lat: Number(x.latitude), lng: Number(x.longitude)}}/>
        );
        return markers;
    }

    render() {
        const places = this.props.trip.places;
        if(this.props.trip.distances.length === 0){
            return (<div></div>);
        }
        console.log("this.props.trip.options.map: ", this.props.trip.options.map);
        if(this.props.trip.options.map==="kml") {
            return (
                <GoogleMap
                    defaultCenter={this.getCenter(places)}
                    defaultZoom={3}
                >
                    <Polyline path={this.makePath(places)}
                              options={{strokeColor: 'DeepSkyBlue'}}
                    />
                    {this.makeMarkers(places)}
                </GoogleMap>
            );
        }else if(this.props.trip.options.map === "svg"){
            let svgHeader='data:image/svg+xml;charset=UTF-8,';
            let svgData = this.props.trip.map;

            return(
                <figure className="figure" id="map">
                    <img className="figure-img img-fluid" alt="Map"
                         src={svgHeader.concat(svgData)}/>
                </figure>
            );

        }
        else{
            return(
              <div>
                  <p className="text-warning">
                      There Was An Issue With The Map
                  </p>
              </div>
            );
        }
    }
}

const TripMap = compose(
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?' +
        'key=' + 'AIzaSyB8UZTGK61XwzNflBMnQQ0C2Xfva9AzUDg' +
        '&v=3.exp' +
        '&libraries=geometry,drawing,places',
        loadingElement: <div />,
        containerElement: <div/>,
        mapElement: <div style={{ height: `40%` }} />
    }),
    withScriptjs,
    withGoogleMap,
)(MapContainer);  // (2)

export default TripMap;