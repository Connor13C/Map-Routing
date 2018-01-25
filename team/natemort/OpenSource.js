
class OpenSource extends React.Component {
  render() {
    return (
      <div className="col-12 col-lg-5 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <div className="row">
                  <div className="col-6">
                  <h5>Open source</h5>
                  </div>
                  <a className="text-muted text-right col-5" href="https://github.com/natemort">Github:// natemort</a>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <a className="list-group-item list-group-item-action" href="http://bukkit.org">
                  <div className="row">
                    <div className="font-weight-bold col">Bukkit Project</div>
                    <div className="col text-muted text-right">2012-2014</div>
                  </div>
                  <ul>
                    <li>
                      Last release received 2.25 million downloads. Used by 82% of Minecraft servers. Estimated 10 million+
                      end users.
                    </li>
                    <li>
                      Volunteered as a project maintainer for 2 years, with an emphasis on integrating community pull
                      requests and updating for changes to the game while maintaining ABI compatibility.
                    </li>
                  </ul>
                </a>
                <a className="list-group-item list-group-item-action" href="https://github.com/natemort/PluginInject">
                  <div className="row">
                    <div className="font-weight-bold col">PluginInject</div>
                    <div className="col text-muted text-right">2017-</div>
                  </div>
                  <ul>
                    <li>
                      Created inversion of control and injection framework for consumption along Bukkit API.
                    </li>
                    <li>
                      Built around HK2, the reference implementation of JSR-330(Dependency Injection).
                    </li>
                  </ul>
                </a>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
