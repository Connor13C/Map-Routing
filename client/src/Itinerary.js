import React, {Component} from 'react';

class Itinerary extends Component {
  constructor(props) {
    super(props);

    this.createTable = this.createTable.bind(this);
  }

  createTable () {

      let units = this.props.trip.options.distance;
      let places = this.props.trip.places;
      let dests=[];
      let distance = 0;
      let dists = [];
      let initial = 0;
      let cumulative = [];
      if(this.props.trip.distances.length > 0){
          dests = places.map((item, index) => <td key={index + 1}>{item.name}</td>);
          dests.push(<td key={places.size + 1}>{places[0].name}</td>);
          cumulative = [<td key={0}>{0}</td>];
          dists = [<td key={0}>{0}</td>];
      }
      for (let i = 0; i < this.props.trip.distances.length; i++){
          dists.push(<td key={i+1}>{this.props.trip.distances[i]}</td>);
          cumulative.push(<td key={i+1}>{initial+=this.props.trip.distances[i]}</td>);

          distance += this.props.trip.distances[i];

      }

    return {distance, units, dests, dists, cumulative};
  }

  render() {
    let table = this.createTable();
    return(
        <div id="itinerary">
          <h4>Round trip distance of {table.distance} {table.units}. </h4>
          <table className="table table-responsive table-bordered">
            <thead>
            <tr className="table-info">
              <th className="align-middle" style={{backgroundColor:"#A9DFBF"}}>Destination</th>{table.dests}
            </tr>
            </thead>
            <tbody>
            <tr>
              <th className="table-info align-middle" style={{backgroundColor:"#A9DFBF"}}>{table.units}</th>{table.dists}
            </tr>
            <tr>
              <th className="table-info align-middle" style={{backgroundColor:"#A9DFBF"}}>Cumulative</th>{table.cumulative}
            </tr>
            </tbody>
          </table>
        </div>
    )
  }
}

export default Itinerary;
