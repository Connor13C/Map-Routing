import React, {Component} from 'react'


class SVGMap extends Component {
    constructor(props){
        super(props);

    }

    render() {
        let svgHeader='data:image/svg+xml;charset=UTF-8,';
        let svgData = this.props.trip.map;

        return(
            <figure className="figure" id="map">
                <img className="figure-img img-fluid" alt="Map" src={svgHeader.concat(svgData)}/>
            </figure>
            );
    }
}

export default SVGMap;