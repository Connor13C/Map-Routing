class ProgressBar extends React.Component {
  render() {
    let inWidth = this.props.width === undefined ? "100%" : this.props.width + "%";
    return (
      <div className="progress">
                          <div className="progress-bar"
                            role="progressbar"
                            style={{width: inWidth}}></div>
                        </div>
    );
  }
}
