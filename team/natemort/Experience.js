
class Experience extends React.Component {
  render() {
    return (
      <div className="col-12 col-lg-7 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title h5">
                Experience
              </div>
              <ul className="list-group list-group-flush">
                <div className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <strong>Software Developer</strong>
                    </div>
                    <div className="col text-muted text-right">October 2016 - April 2017</div>
                  </div>
                  Mineplex LLC
                  <ul>
                    <li>
                      Maintained and improved legacy codebases.
                    </li>
                    <li>
                       Designed a new metrics system for analyzing player interactivity and retention using InfluxDB.
                    </li>
                    <li>
                      Designed and created a matchmaking service which was optimized for processing tens of thousands of players per second.
                    </li>
                  </ul>
                </div>
                
                <div className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <strong>Software Developer</strong>
                    </div>
                    <div className="col text-muted text-right">December 2015 - August 2016</div>
                  </div>
                  LuckyPrison Minecraft Server
                  <ul>
                    <li>
                      Added features to existing codebase utilizing Java, MySQL, and redis.
                    </li>
                    <li>
                       Designed a distributed approach to
Minecraft servers utilizing Docker and Kubernetes for container orchestration.
                    </li>
                  </ul>
                </div>
                <div className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <strong>Independent Contractor</strong>
                    </div>
                    <div className="col text-muted text-right">May - August 2015</div>
                  </div>
                  Battleline Games
                  <ul>
                    <li>
                      Structured frontend development stack and ported 2D games from Flash to Javascript and Typescript using
Pixi.js as a game engine.
                    </li>
                    
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
