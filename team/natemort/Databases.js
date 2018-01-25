
class Databases extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Databases
              </h5>
              <ul className="list-group list-group-flush">
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col">SQL(MySQL,SQLite)</div>
                          <div className="col text-muted text-right">Expert</div>
                        </div>
                        <ProgressBar width="100" />
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col">MongoDB</div>
                          <div className="col text-muted text-right">Experienced</div>
                        </div>
                        <ProgressBar width="80" />
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col">Redis</div>
                          <div className="col text-muted text-right">Experienced</div>
                        </div>
                        <ProgressBar width="80" />
                      </div>
                    <div className="list-group-item">
                        <div className="row">
                          <div className="col">PostgreSQL</div>
                          <div className="col text-muted text-right">Moderate</div>
                        </div>
                        <ProgressBar width="70" />
                      </div>
                    <div className="list-group-item">
                        <div className="row">
                          <div className="col">RethinkDB</div>
                          <div className="col text-muted text-right">Moderate</div>
                        </div>
                        <ProgressBar width="70" />
                      </div>
                   </ul>
            </div>
          </div>
        </div>
    );
  }
}
