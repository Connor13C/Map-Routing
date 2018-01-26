class Header extends React.Component{
    render() {
        return (
                <div>
                <h1 className="text-center"> Distance Calculator</h1>
                </div>
                
                )
    }
}

class Main extends React.Component {
    render() {
        return (
                <div>
                <div className="jumbotron">
                <Header />
                <hr/>
                </div>
                </div>
                );
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));
