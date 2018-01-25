class Header extends React.Component{
  render() {
    return (
      <div>
      <h1 className="text-center">Lettia Wilson</h1>
        </div>

    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div>
        <p className="text-center">
       13993 E. Oxford Pl, Aurora CO, 80014 - (720) 938-0590 - lettia.wilson@gmail.com
      </p>
      </div>
    )
  }
}

class Education extends React.Component {
  render() {
    return (
      <div>
      <div className="container-fluid">
      <p><u><b>Education</b></u></p>
      <p> Colorado State University, Fort Collins, CO </p>
      <p> Bachleor of Science Applied Computing Technology</p>
      <p> Graduation: Spring 2018 </p>
    </div>
        </div>
    )
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div>
      <div className="container-fluid">
      <p><u><b>Skills</b></u></p>
      <p><i>Languages</i>: Java, C, C++, Perl, SQL, HTML, Javascript </p>
      <p><i>Operating Systems</i>: Mac OSX, Ubuntu, Linux, Kali Linux </p>
      <p><i>Developmental tools</i>: Eclipse, InelliJ, WindIDE </p>
        <ul>
          <li>Strong sense of discipline and work ethic gained through Division I athletics </li>
          <li>Excellent time management skills with ability to manage multiple projects and meet deadlines </li>
          <li>Goal-oriented and results focused individual who has achieved success in the classroom and on the field</li>
          <li>Have good team skills, oral, analytical skills, written communication skills</li>
      </ul>
          </div>
        </div>
    )
  }
}

class Projects extends React.Component {
  render() {
    return (
      <div>
      <div className="container-fluid">
        <p><u><b>Class Projects</b></u></p>
        <p> Raspberry Pi Project </p>
          <ul>
            <li>Working with a partner to design and implement an embedded system utilizing Raspberry Pi </li>
            <li>Writing code in Pyhton to establish communication between two computers using sockets </li>
            <li>Performing testing and integration work</li>
        </ul>
        <p> Text Analyzer </p>
          <ul>
            <li> Utilizing C++ to analyze text documents for similar word content </li>
            <li> Utilizing the Porter-Stemming algorithm to separate and define word roots </li>
            <li> Utilized TFIDF to create algorithm that checks occurences of each word accross a library of documents</li>
        </ul>
            </div>
        </div>
    )
  }
}

class Leadership extends React.Component {
  render() {
    return (
      <div>
      <div className="container-fluid">
          <p><u><b>Leadership</b></u></p>
          <p>Colorado State University, Fort Collins, CO</p>
          <p>Division I Student-Athlete, Track and Field,					2014 - present</p>
          <ul>
            
            <li>Student-athlete who balances and manages time wisely by training 30 plus hours per week, attending school on a full-time basis and participating in extra events with athletics</li>
            <li>Ranked 4th in the indoor Mountain West Regional championship</li>
            <li>Ranked 3rd going into Mountain West outdoor championships in 100 dash</li>
            <li>Member of the women’s 4 x 100 relay team that won outdoor Mountain West Conference championship</li>
            <li>Member of Mountain West Conference Champions outdoor: 2015, 2016</li>
            <li>Member of Mountain West Conference Champions indoor: 2016, 2017</li>
          </ul>
        </div>
        </div>
    )
  }
}

class Experience extends React.Component {
  render() {
    return (
      <div>
      <div className="container-fluid">
          <p><u><b>Experience</b></u></p>
          <p>ASAP Services, Denver, January 2013 to May 2014                  </p> 
          <p>Administrative Assistant</p>
          <ul>
            <li>Performed various clerical duties such as documenting, photocopying, mailing and organizing filing system.</li>
            <li>Interacted with organizational staff, clients, employees and visitors regularly to assist them.</li>
            <li>Input paperwork into office data entry system for individual employees and clients.</li>
            <li>Proficient in Microsoft Office</li>
          </ul>
        </div>
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
        <Contact />
       </div>
       <Education />
        <Skills />
        <Projects />
        <Leadership />
        <Experience />
       </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));