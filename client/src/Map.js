import React, {Component} from 'react'
import GoogleMapElement from './GoogleMapElement'
import SVGMap from './SVGMap'


class Map extends Component {
    constructor(props){
        super(props);

    }

    render() {
        const places = this.props.trip.places;
        if(this.props.trip.distances.length === 0){
            return (<div></div>);
        }
        //console.log("this.props.trip.options.map: ", this.props.trip.options.map);
        if(this.props.trip.options.map==="kml") {
            return (
                <GoogleMapElement trip={this.props.trip}/>
            );
        }else if(this.props.trip.options.map === "svg"){
            return (
            <SVGMap trip={this.props.trip}/>
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

export default Map;