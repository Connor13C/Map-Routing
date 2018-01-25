class Header extends React.Component{
  render() {
    return (
      <div>
      <h1 className="text-center">Nicole Paul</h1>
        </div>

    )
  }
}

class Info extends React.Component {
  render() {
    return (
      <div>
       <p class="text-center">
       npaul64@gmail.com
    
        210-428-0160
      </p>
      <p class="text-center">
       1512 South Shields Street &nbsp Fort Collins, CO 80521
      </p>
        <hr></hr>
      </div>
    )
  }
}

class Objective extends React.Component {
  render() {
    return (
      <div>
      <div class="Objective">
          <h2><ul>Objective</ul></h2>
            <p><ul> To use use my privilege and abilities to help others and to always bring my best self into every endeaver I embark on. I am a highly motivated, bubbly, and hard working individual who decided to pursue a degree in technology in order to use those skills to teach others practical skills to change their lives and improve their communities. 
         </ul> </p>
        <hr></hr>
      </div>
        </div>
    )
  }
}

class Education extends React.Component {
  render() {
    return (
      <div>
    <div class="Education">
            <h2><ul>Education</ul></h2>
            <p><ul>Graduated Salutatorian from Cornerstone Christian High School (May 2012).</ul></p>
            <p><ul>Current student at Colorado State University majoring in Applied Computing Technology. Expected Graduation in May 2018.</ul></p>
      <hr></hr>
      </div>
        </div>
    )
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div>
       <div class="Skills">
         <h2><ul>Skills</ul></h2>
            
           <li><ul> GitHub
         </ul> </li>
              <li> <ul>Database Management (MySQL)
        </ul>  </li>
          <li> <ul>Raspberry Pi Development
        </ul>  </li>
          <li><ul> Web Development (PHP, JavaScript, HTML, CakePHP)
         </ul> </li>
         <hr></hr>
      </div>
       </div>
    )
  }
}
   class WorkExperience extends React.Component {
  render() {
    return (
      <div>
       <div class="Work Experience">
            <h2><ul>Work Experience</ul></h2>
            <li><ul>
              Software developer at the Research Software Facility of CSU (November 2016-Present)
         </ul> </li>
          <li><ul>
           IT staff at Ridgeview Classical School (November 2015-November 2016)
         </ul> </li>
          <li><ul>Event Planning team member at Cornerstone Church Events Department (August 2010- May 2012)
          </ul></li>
      </div>
        </div>
    )
  }
}

class Languages extends React.Component {
  render() {
    return (
      <div>
      <div class="Languages">
            <h2><ul>Languages</ul></h2>
            <li><ul>Java
          </ul></li>
              
<li><ul>C/C++
         </ul> </li>
          <li><ul>Python
          </ul></li>
      </div>
        <hr></hr>

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
        <Info />
       </div>
       <Objective />
        <Education />
        <Skills />
        <WorkExperience />
        <Languages />
       </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

