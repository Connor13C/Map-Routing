import React, {Component} from 'react';

class Itinerary extends Component {
  constructor(props) {
    super(props);

    this.createTable = this.createTable.bind(this);
  }

  createTable () {

    let distance = 0;
      for(let  i = 0; i < this.props.trip.distances.length; i++) {
          distance += this.props.trip.distances[i];
      }
    let units = this.props.trip.options.distance;
    let places = this.props.trip.places;

    //uploading each destination name to the itinerary
    let dests = places.slice(0);
      dests = dests.map((item) => <td>{item.name}</td>);
      dests.push(dests[0]);
      console.log(dests);

    //distance for each destination
    let dists = [];
      if(this.props.trip.distances.length > 0 ){
          dists = [<td>{0}</td>];
      }

      for(let i = 0; i < this.props.trip.distances.length; i++){
          dists.push(<td>{this.props.trip.distances[i]}</td>);
      }

      let c = 0;
      let cumulative = [];
      if(this.props.trip.distances.length > 0){
          cumulative = [<td>{0}</td>];
      }
      for (let i = 0; i < this.props.trip.distances.length; i++){
          cumulative.push(<td>{c+=this.props.trip.distances[i]}</td>);
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
              <th className="align-middle">Destination</th>
              {table.dests}
            </tr>
            </thead>
            <tbody>
            <tr>
              <th className="table-info align-middle">{table.units}</th>
              {table.dists}
            </tr>
            <tr>
              <th className="table-info align-middle">Cumulative</th>
                {table.cumulative}
            </tr>
            </tbody>
          </table>
        </div>
    )
  }
}

export default Itinerary;
