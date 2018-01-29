class Header extends React.Component{
    render() {
        return (
                <div>
                <h1 className="text-center"> Distance Calculator</h1>
                </div>
                
                )
    }
}

class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      sourceLat: "",
      sourceLong: "",
      destLat: "",
      destLong: "",
      distance: 0
    };
 
    this.parser = this.parser.bind(this);
    this.setLat1 = this.setLat1.bind(this);
    this.setLong1 = this.setLong1.bind(this);
    this.setLat2 = this.setLat2.bind(this);
    this.setLong2 = this.setLong2.bind(this);
    this.getDistance = this.getDistance.bind(this);
  }
  parser(number){//not the real parser
    this.setLat1(number);
    this.setLong1(number);
    this.setLat2(number);
    this.setLong2(number);
    }
  
  setLat1(number){
      this.setState({ sourceLat: Number(this.degreesToRad(number.target.value))});
  }
  
    setLong1(number){
      this.setState({ sourceLong: Number(this.degreesToRad(number.target.value))});
  }
  
    setLat2(number){
      this.setState({ destLat: Number(this.degreesToRad(number.target.value))});
  }
    setLong2(number){
      this.setState({ destLong: Number(this.degreesToRad(number.target.value))});
  }
    getDistance(){//not correctly implemented yet
  //var x = Math.cos(Number(this.state.destLat))*Math.cos(Number(this.state.destLong))-Math.cos(Number(this.state.sourceLat))*Math.cos(Number(this.state.sourceLong));//cos(Theta2)*cos(Lamda2)- cos(Theta1)*cos(Lamda1)
	//var y = Math.cos(Number(this.state.destLat))*Math.sin(Number(this.state.destLong))-Math.cos(Number(this.state.sourceLat))*Math.sin(Number(this.state.sourceLong));//cos(Theta2)*sin(Lamda2)- cos(Theta1)*sin(Lamda1)
	//var z = Math.sin(Number(this.state.destLat))-Math.sin(Number(this.state.sourceLat));//sin(Theta2)-sin(Theta1)
	//return Math.sqrt(Math.po      var a = Math.cos(Number(this.state.sourceLat));
      //var a = Math.cos(Number(this.state.sourceLat));
      //return a;//Number(Obj.degreesToRadians(a));
      return this.state.destLat;
    }         

 degreesToRad(degree){//convert float input in degrees to radians
  return Number((degree/180)*Math.PI);
}
  
  render() {
    return (
      <div className="container"> 
		<h3>Input</h3>
        <input type="text" className="text" 
          value={this.parser.value} onChange={this.parser}/>
        <h3>Output</h3>
         <input type="text" className="text" 
          value={this.getDistance()} disabled/>
      </div>
    );
  }
}


class Main extends React.Component {
  render() {
    return (
      <div className="jumbotron">
		<Header />
        <hr />
        <Body />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
