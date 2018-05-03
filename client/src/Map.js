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
        let data = "<?xml version=\"1.0\" encoding=\"UTF-8\"?> <kml xmlns=\"http://earth.google.com/kml/2.0\"><Document><Placemark><LineString><coordinates>";
        let coords = "";
        let arraylength = this.props.trip.places.length;
        for (let i = 0; i < arraylength; i++){
            coords = coords.concat(this.props.trip.places[i].longitude, ", ", this.props.trip.places[i].latitude, ", 0. ");
        }
        coords.concat(this.props.trip.places[0].longitude, ", ", this.props.trip.places[0].latitude, ", 0. ");
        data= data.concat(coords, "</coordinates></LineString><Style><LineStyle><color>#ff0000ff</color><width>5</width></LineStyle></Style></Placemark></Document></kml>");
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