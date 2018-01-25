
class Education extends React.Component {
  render() {
    return (
      <div className="col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Education
              </h5>
              <ul className="list-group list-group-flush">
                <div className="list-group-item">
                  <div className="row">
                    <div className="font-weight-bold col">Colorado State University</div>
                    <div className="col text-muted text-right">August 2016- May 2020</div>
                  </div>
                  <ul>
                    <li>Bachelors in Computer Science with a minor in Mathematics.</li>
                    <li>3.7 GPA</li>
                  </ul>
                </div>
                <div className="list-group-item">
                  <div className="row">
                    <div className="font-weight-bold col">Fossil Ridge High School</div>
                    <div className="col text-muted text-right">2011- 2016</div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
