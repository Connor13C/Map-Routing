import React, {Component} from 'react';
import {Map, Polyline, GoogleApiWrapper} from 'google-maps-react';


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

  render() {
      const style = {
          width: '10%',
          height: '10%'
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
})(MapContainer)