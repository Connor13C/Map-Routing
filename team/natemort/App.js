
class App extends React.Component {
  render() {
    return (
      <div>
      <Header />
            <div className="container">
        <div className="row">
          <Languages />
          <Databases />
          <Tools />
          <Experience />
          <OpenSource />
          <Education />
        </div>
      </div>
       </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
