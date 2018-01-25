class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col offset-4">
            <h1>Connor Carey</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <h5>Phone: (970)217-6592</h5>
          </div>
          <div className="col-sm">
            <h5>Email: connorbcarey@hotmail.com</h5>
          </div>
          <div className="col-sm">
            <h5>Address: Fort Collins, CO 80525</h5>
          </div>
        </div>
      </div>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Objective:</h3>

        <p>
          To always exceed the trust placed in me, to lead by example, and be
          highly motivated and skilled in the workplace. To produce clean,
          easily readable programming code with low processing times.
        </p>

        <div className="row">
          <div className="col">
            <h3>Skills:</h3>
            <ul>
              <li> Good communication skills and teamwork</li>
              <li>Punctual</li>
              <li>Hardworking and dependable</li>
              <li>Strong analytical thinking</li>
              <li>Highly independent</li>
              <li>Comfortable in high stress environments</li>
              <li>Diligent and strong work ethic</li>
            </ul>
          </div>
          <div className="col">
            <h3>Education:</h3>
            <h5>Custer County High School</h5>
            <ul>
              <li>High School Diploma</li>
            </ul>
            <h5>Colorado State University</h5>
            <ul>
              <li>Computer Science</li>
              <li>Graduation Date: Fall 2018</li>
              <li>GPA: 3.1</li>
            </ul>
          </div>
          <div className="col">
            <h3>Computer Languages:</h3>
            <ul>
              <li>C++</li>
              <li>C</li>
              <li>Java</li>
              <li>Python</li>
              <li>Bootstrap</li>
              <li>Matlab</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class Body2 extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Work History:</h3>
            <h5>
              <strong>Lawn Doctor</strong>,<em>Route Manager</em>, Fort Collins
              CO, April 2011-August 2017
            </h5>
            <p>
              <ul>
                <li> Application of pesticides</li>
                <li> Sales</li>
                <li> Routing services</li>
                <li> Customer Service</li>
              </ul>
              Time at job: 6.5 years
            </p>
            <p>Reference: Mike Verde or Chad Tarkinson, (970)221-0441</p>
            <h5>
              <strong>Supermarket Liquors</strong>,<em> Stocker/Cashier</em>,
              Fort Collins CO, October 2015-Present
            </h5>
            <p>
              <ul>
                <li> Stocked inventory</li>
                <li> Handled money and sales</li>
                <li> Customer Service</li>
              </ul>
              Time at job: 2.4 years
            </p>
            <p>Reference: Kody Springsteen or Wayne Hunt, (970)221-2428</p>
            <h5>
              <strong>Noodles and Company</strong>,<em> Dishwasher/Cook</em>,
              Fort Collins CO, March 2010-July 2011
            </h5>
            <p>
              <ul>
                <li> Washed Dishes</li>
                <li> Prepared Food</li>
                <li> Customer Service</li>
              </ul>
              Time at job: 1.3 years
            </p>
            <p>Reference: Dan Dresel, (970)223-2808</p>
            <h5>
              <strong>Anlance Protection</strong>,<em> Armed Security Guard</em>,
              Fort Collins CO, August 2006-July 2009
            </h5>
            <p>
              <ul>
                <li> Patrolled and secured various locations</li>
                <li> Monitored surveillance equipment</li>
                <li> CB radio contact with other guards</li>
                <li> Firearm and hand-to-hand combat training</li>
              </ul>
              Time at job: 3 years
            </p>
            <p>Reference: Barry Wilson (970)223-2808</p>
          </div>
        </div>
        <h3>Personal References:</h3>
        <div className="row">
          <div className="col">
            <p>
              <strong>Morgan Carey</strong>
            </p>
            <p>Sister</p>
            (970)412-7100
          </div>
          <div className="col">
            <p>
              <strong>Jason Adams</strong>
            </p>
            <p>Brother-in-Law</p>
            (970)581-6233
          </div>
          <div className="col">
            <p>
              <strong>Tai Tran</strong>
            </p>
            <p>Friend</p>
            (970)402-6863
          </div>
          <div className="col">
            <p>
              <strong>Charles Orchard</strong>
            </p>
            <p>Martial Arts Instructor</p>
            (970)481-8641
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <Body />
        <Body2 />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
