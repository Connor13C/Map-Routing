import React, {Component} from 'react'
import GoogleMapElement from './GoogleMapElement'
import SVGMap from './SVGMap'
import {Button} from 'reactstrap';


class Map extends Component {
    constructor(props){
        super(props);
        this.getKML = this.getKML.bind(this);

    }

    getKML(){
        let fileDownload = require('react-file-download');
        let data = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n <kml xmlns=\"http://earth.google.com/kml/2.0\">\n";
        let coords = "";
        data= data.concat("<Placemark>\n<name>trip</name>\n<LineString>\n<coordinates>\n");
        let arraylength = this.props.trip.places.length;
        for (let i = 0; i < arraylength; i++){
            data = data.concat(this.props.trip.places[i].longitude, ",", this.props.trip.places[i].latitude, ",0\n");
            coords = coords.concat("<Placemark>\n<name>",this.props.trip.places[i].name, "</name>\n",
            "<Point>\n<coordinates>",this.props.trip.places[i].longitude, ",", this.props.trip.places[i].latitude, ",0\n",
            "</coordinates>\n</Point>\n</Placemark>");
        }
        data = data.concat(this.props.trip.places[0].longitude, ",", this.props.trip.places[0].latitude, ",0\n",
        "</coordinates>\n</LineString>\n</Placemark>\n");
        data= data.concat(coords, "\n</kml>");
        fileDownload(data, 'map.kml');
    }

    render() {
        const places = this.props.trip.places;
        if(this.props.trip.distances.length === 0){
            return (<div></div>);
        }
        //console.log("this.props.trip.options.map: ", this.props.trip.options.map);
        if(this.props.trip.options.map==="svg") {
            return (
                <div>
                    <SVGMap trip={this.props.trip}/>
                    <Button className="float-right" color="primary" onClick={this.getKML} style={{backgroundColor:"#1E4D2B", marginBottom: "10px"}}>Download KML</Button>
                </div>
            );
        }else{
            return (
                <div>
                  <GoogleMapElement trip={this.props.trip}/>
                  <Button className="float-right" color="primary" onClick={this.getKML} style={{backgroundColor:"#1E4D2B", marginBottom: "10px"}}>Download KML</Button>
                </div>
            );
        }
    }
}

export default Map;