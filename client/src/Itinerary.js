import React, {Component} from 'react';

class Itinerary extends Component {
    constructor(props) {
        super(props);

        this.createTable = this.createTable.bind(this);
    }

    createTable () {

        let units = this.props.trip.options.distance;
        let places = this.props.trip.places;

      //uploading each destination name to the itinerary
      let dests = places.slice(0);
      dests = dests.map((item) => <td style={{backgroundColor:"#A9DFBF", border: "2px solid black"}}><b>{item.name}</b></td>);
      dests.push(dests[0]);
      console.log(dests);

      //distance for each destination
      let distance = 0;
      let dists = [];
      let initial = 0;
      let cumulative = [];
      if(this.props.trip.distances.length > 0){
          cumulative = [<td style={{backgroundColor:"#A9DFBF", border: "2px solid black"}}>{0}</td>];
          dists = [<td style={{backgroundColor:"#A9DFBF", border: "2px solid black"}}>{0}</td>];
      }
      for (let i = 0; i < this.props.trip.distances.length; i++){
          dists.push(<td style={{backgroundColor:"#A9DFBF", border: "2px solid black"}}>{this.props.trip.distances[i]}</td>);
          cumulative.push(<td style={{backgroundColor:"#A9DFBF", border: "2px solid black"}}>{initial+=this.props.trip.distances[i]}</td>);
          distance += this.props.trip.distances[i];
        }

        return {distance, units, dests, dists, cumulative};
    }

  render() {
    let table = this.createTable();
    return(
        <div id="itinerary">
          <h4>Round trip distance of {table.distance} {table.units}. </h4>
          <table className="table table-responsive table-bordered" style={{border: "2px solid black"}}>
            <thead>
            <tr className="table-info">
              <th className="align-middle" style={{backgroundColor:"#A9DFBF", border: "2px solid black"}}>Destination</th>{table.dests}
            </tr>
            </thead>
            <tbody>
            <tr>
              <th className="table-info align-middle" style={{backgroundColor:"#A9DFBF", border: "2px solid black"}}>{table.units}</th>{table.dists}
            </tr>
            <tr>
              <th className="table-info align-middle" style={{backgroundColor:"#A9DFBF", border: "2px solid black"}}>Cumulative</th>{table.cumulative}
            </tr>
            </tbody>
          </table>
        </div>
    )
  }
}

export default Itinerary;