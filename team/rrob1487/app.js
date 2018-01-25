class Header extends React.Component{
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Robbie Weinel</h1>
          robbie.weinel@gmail.com • 720-879-1618
        </div>
      </div>
    )
  }
}

class Experience extends React.Component{
  render() {
    return (
      <section id="Experience">
        <h3 className="title1">Experience</h3>

        <div id="experienceCarousel" className="carousel slide" data-ride="carousel" data-interval="10000">
          <ol className="carousel-indicators">
            <li data-target="#experienceCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#experienceCarousel" data-slide-to="1"></li>
            <li data-target="#experienceCarousel" data-slide-to="2"></li>
            <li data-target="#experienceCarousel" data-slide-to="3"></li>
          </ol>

          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className="card" id="card">
                <img className="card-img-top" src="https://www.kingsoopers.com/asset/582f2c9984ae6caca6ba1273?data=1"/>
                <div className="card-body">
                  <h5 className="card-title">King Supers</h5>
                  <p className="card-text">Deli Clerk <br/> July 2017 – September 2017</p>
                  <hr className="my-4"/>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card" id="card">
                <img className="card-img-top"
                  src="http://gimmegimmegames.com/wp-content/uploads/2013/10/nexusae0_Radio-Shack-Stacked-logo-011.jpg"/>
                <div className="card-body">
                  <h5 className="card-title">Radio Shack</h5>
                  <p className="card-text">Sales Associate <br/>  June 2016 – August 2016</p>
                  <hr className="my-4"/>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card" id="card">
                <div className="card-body">
                  <img className="card-img-top" 
                    src="https://media.defense.gov/2012/Jul/24/2000131525/-1/-1/0/120719-F-ZE476-005.JPG"/>
                  <h5 className="card-title">JP Total Landscaping</h5>
                  <p className="card-text">Crew Assistant <br/>  June 2015 – August 2015</p>
                  <hr className="my-4"/>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card" id="card">
                <div className="card-body">
                  <img className="card-img-top" 
                    src="https://d2q79iu7y748jz.cloudfront.net/s/_logo/cca19f1f5b3d7eba8881001dae61b6e5"/>
                  <h5 className="card-title">Kittredge Animal Clinic</h5>
                  <p className="card-text">Kennel Technichian <br/> May 2014 – March 2015</p>
                  <hr className="my-4"/>
                </div>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#experienceCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>

          </a>

          <a id="right" className="carousel-control-next" href="#experienceCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    )
  }
}

class Education extends React.Component{
  render() {
    return (
      <section id="Education">
        <h3 className="title1">Education</h3>

        <div id="educationCarousel" className="carousel slide" data-ride="carousel" data-interval="10000">
          <ol className="carousel-indicators">
            <li data-target="#educationCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#educationCarousel" data-slide-to="1"></li>
            <li data-target="#educationCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className="card" id="card">
                <img className="card-img-top" src="http://www.cs.colostate.edu/cstop/images/features/computer-science.jpg"/>
                <div className="card-body">
                  <h5 className="card-title">Colorado State University</h5>
                  <p className="card-text">Computer Science <br/> Grad May 2020</p>
                  <hr className="my-4"/>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card" id="card">
                <img className="card-img-top" src="http://davispartnership.com/wp-content/uploads/2013/09/CSU_RockwellHallBusinessAddition_01_exterior.jpg"/>
                <div className="card-body">
                  <h5 className="card-title">Colorado State University</h5>
                  <p className="card-text">Business <br/> Grad May 2020</p>
                  <hr className="my-4"/>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card" id="card">
                <img className="card-img-top" src="https://static.coloradohomeblog.com/uploads/2015/07/Homes-Near-Evergreen-High-School-Evergreen-CO.jpg"/>
                <div className="card-body">
                  <h5 className="card-title">Evergreen Senior Highschool</h5>
                  <p className="card-text">College Prep <br/> Grad May 2015</p>
                  <hr className="my-4"/>
                </div>
              </div>
            </div>

            <a className="carousel-control-prev" href="#educationCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>

            </a>

            <a id="right" className="carousel-control-next" href="#educationCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    )
  }
}

class Languages extends React.Component{
  render() {
    return(
      <section id="Languages">
        <h3 className="card-title">Languages</h3>
        <div className="card">

          <div className="card-body">
            <div id="accordion">

              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Java
                    </button>
                  </h5>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    Years: 4 <br/>
                    Comfort Level: 5/5 <br/>
                    Favorite Project: I built a black jack game with a jswing GUI and online 
                    online vs mode.
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      C++
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    Years: 1 <br/>
                    Comfort Level: 4/5 <br/>
                    Favorite Project: I built an A* path finding algorith for a internship 
                    test.  The code wasn't super complex, I just really liked my solution.
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      C
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body">
                    Years: 1.5 <br/>
                    Comfort Level: 3/5 <br/>
                    Favorite Project: I have never done a project in C outside of school, 
                    but my favorite C project was when I got to use shared memory and pipes. 
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingFour">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      HTML/CSS/JavaScript
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div className="card-body">
                    Years: 2 <br/>
                    Comfort Level: 3.5/5 <br/>
                    Favorite Project: I built a raspberry pi juke box that allows multiple
                    people to queue up music.
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingFive">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Arduino
                    </button>
                  </h5>
                </div>
                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                  <div className="card-body">
                    Years: 2 <br/>
                    Comfort Level: 3.5/5 <br/>
                    Favorite Project: I built a custom midi board for ableton using arcade
                    buttons and a plastic molded shell. 
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingSix">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      Python
                    </button>
                  </h5>
                </div>
                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                  <div className="card-body">
                    Years: >1 <br/>
                    Comfort Level: 2/5 <br/>
                    Favorite Project: I dont have too much experience, but I understand the 
                    basics and use the console for my calculator.
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingSev">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSev" aria-expanded="false" aria-controls="collapseSev">
                      LC3 Assembly
                    </button>
                  </h5>
                </div>
                <div id="collapseSev" className="collapse" aria-labelledby="headingSev" data-parent="#accordion">
                  <div className="card-body">
                    Years: 1 <br/>
                    Comfort Level: 4/5 <br/>
                    Favorite Project: This is a assembly enviornment that CSU uses to 
                    teach, but I enjoyed the lower level programming and am eagar to learn
                    other, more applicable, assembly languages. 
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingEig">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEig" aria-expanded="false" aria-controls="collapseEig">
                      Android
                    </button>
                  </h5>
                </div>
                <div id="collapseEig" className="collapse" aria-labelledby="heading" data-parent="#accordion">
                  <div className="card-body">
                    Years: 1 <br/>
                    Comfort Level: 3/5 <br/>
                    Favorite Project: I understand the basics and have outlined some ideas of things I would like to build
                    , but I haven't yet had the time to follow through on any of my ideas.
                  </div>
                </div>
              </div>


            </div>
            <hr className="my-4"/>
          </div>
        </div>
      </section>
    )
  }
}

class Skills extends React.Component{
  render() {
    return(
      <div>
        <section id="Skills">
          <h3 className="title1">Skills</h3>
          <div className="card">
            <div className="card-body">

              <div>
                <ul>
                  <li>Raspberry Pi Development</li>
                  <li>Linux Development</li>
                  <li>Github</li>
                  <li>Bootstrap</li>
                  <li>Team Development</li>
                  <li>Microsoft Office</li>
                  <li>API Integration</li>
                  <li>Leadership</li>
                  <li>Communication</li>
                  <li>Problem Solving</li>
                  <li>Teamwork</li>
                  <li>Willingness To Learn</li>
                  <li>Mentality</li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </div>
    )
  }
}

class Body extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-md-6 ">
            <Experience />
          </div>
          <div className="col-xs-12 col-md-6 ">
            <Education />
          </div>
          <div className="row">
            <hr className="my-4"/>
          </div>
        </div>

        <hr className="col-md"/>

        <div className="row">
          <div className="col-xs-12 col-md-6 ">
            <Languages />
          </div>
          <div className="col-xs-12 col-md-6 ">
            <Skills />
          </div>
        </div>
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

($carousel).carousel('pause');


