var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          { className: "text-center" },
          "Lettia Wilson"
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Contact = function (_React$Component2) {
  _inherits(Contact, _React$Component2);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          { className: "text-center" },
          "13993 E. Oxford Pl, Aurora CO, 80014 - (720) 938-0590 - lettia.wilson@gmail.com"
        )
      );
    }
  }]);

  return Contact;
}(React.Component);

var Education = function (_React$Component3) {
  _inherits(Education, _React$Component3);

  function Education() {
    _classCallCheck(this, Education);

    return _possibleConstructorReturn(this, (Education.__proto__ || Object.getPrototypeOf(Education)).apply(this, arguments));
  }

  _createClass(Education, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "p",
            null,
            React.createElement(
              "u",
              null,
              React.createElement(
                "b",
                null,
                "Education"
              )
            )
          ),
          React.createElement(
            "p",
            null,
            " Colorado State University, Fort Collins, CO "
          ),
          React.createElement(
            "p",
            null,
            " Bachleor of Science Applied Computing Technology"
          ),
          React.createElement(
            "p",
            null,
            " Graduation: Spring 2018 "
          )
        )
      );
    }
  }]);

  return Education;
}(React.Component);

var Skills = function (_React$Component4) {
  _inherits(Skills, _React$Component4);

  function Skills() {
    _classCallCheck(this, Skills);

    return _possibleConstructorReturn(this, (Skills.__proto__ || Object.getPrototypeOf(Skills)).apply(this, arguments));
  }

  _createClass(Skills, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "p",
            null,
            React.createElement(
              "u",
              null,
              React.createElement(
                "b",
                null,
                "Skills"
              )
            )
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "i",
              null,
              "Languages"
            ),
            ": Java, C, C++, Perl, SQL, HTML, Javascript "
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "i",
              null,
              "Operating Systems"
            ),
            ": Mac OSX, Ubuntu, Linux, Kali Linux "
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "i",
              null,
              "Developmental tools"
            ),
            ": Eclipse, InelliJ, WindIDE "
          ),
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              "Strong sense of discipline and work ethic gained through Division I athletics "
            ),
            React.createElement(
              "li",
              null,
              "Excellent time management skills with ability to manage multiple projects and meet deadlines "
            ),
            React.createElement(
              "li",
              null,
              "Goal-oriented and results focused individual who has achieved success in the classroom and on the field"
            ),
            React.createElement(
              "li",
              null,
              "Have good team skills, oral, analytical skills, written communication skills"
            )
          )
        )
      );
    }
  }]);

  return Skills;
}(React.Component);

var Projects = function (_React$Component5) {
  _inherits(Projects, _React$Component5);

  function Projects() {
    _classCallCheck(this, Projects);

    return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));
  }

  _createClass(Projects, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "p",
            null,
            React.createElement(
              "u",
              null,
              React.createElement(
                "b",
                null,
                "Class Projects"
              )
            )
          ),
          React.createElement(
            "p",
            null,
            " Raspberry Pi Project "
          ),
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              "Working with a partner to design and implement an embedded system utilizing Raspberry Pi "
            ),
            React.createElement(
              "li",
              null,
              "Writing code in Pyhton to establish communication between two computers using sockets "
            ),
            React.createElement(
              "li",
              null,
              "Performing testing and integration work"
            )
          ),
          React.createElement(
            "p",
            null,
            " Text Analyzer "
          ),
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              " Utilizing C++ to analyze text documents for similar word content "
            ),
            React.createElement(
              "li",
              null,
              " Utilizing the Porter-Stemming algorithm to separate and define word roots "
            ),
            React.createElement(
              "li",
              null,
              " Utilized TFIDF to create algorithm that checks occurences of each word accross a library of documents"
            )
          )
        )
      );
    }
  }]);

  return Projects;
}(React.Component);

var Leadership = function (_React$Component6) {
  _inherits(Leadership, _React$Component6);

  function Leadership() {
    _classCallCheck(this, Leadership);

    return _possibleConstructorReturn(this, (Leadership.__proto__ || Object.getPrototypeOf(Leadership)).apply(this, arguments));
  }

  _createClass(Leadership, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "p",
            null,
            React.createElement(
              "u",
              null,
              React.createElement(
                "b",
                null,
                "Leadership"
              )
            )
          ),
          React.createElement(
            "p",
            null,
            "Colorado State University, Fort Collins, CO"
          ),
          React.createElement(
            "p",
            null,
            "Division I Student-Athlete, Track and Field,     2014 - present"
          ),
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              "Student-athlete who balances and manages time wisely by training 30 plus hours per week, attending school on a full-time basis and participating in extra events with athletics"
            ),
            React.createElement(
              "li",
              null,
              "Ranked 4th in the indoor Mountain West Regional championship"
            ),
            React.createElement(
              "li",
              null,
              "Ranked 3rd going into Mountain West outdoor championships in 100 dash"
            ),
            React.createElement(
              "li",
              null,
              "Member of the women\u2019s 4 x 100 relay team that won outdoor Mountain West Conference championship"
            ),
            React.createElement(
              "li",
              null,
              "Member of Mountain West Conference Champions outdoor: 2015, 2016"
            ),
            React.createElement(
              "li",
              null,
              "Member of Mountain West Conference Champions indoor: 2016, 2017"
            )
          )
        )
      );
    }
  }]);

  return Leadership;
}(React.Component);

var Experience = function (_React$Component7) {
  _inherits(Experience, _React$Component7);

  function Experience() {
    _classCallCheck(this, Experience);

    return _possibleConstructorReturn(this, (Experience.__proto__ || Object.getPrototypeOf(Experience)).apply(this, arguments));
  }

  _createClass(Experience, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "p",
            null,
            React.createElement(
              "u",
              null,
              React.createElement(
                "b",
                null,
                "Experience"
              )
            )
          ),
          React.createElement(
            "p",
            null,
            "ASAP Services, Denver, January 2013 to May 2014                  "
          ),
          React.createElement(
            "p",
            null,
            "Administrative Assistant"
          ),
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              "Performed various clerical duties such as documenting, photocopying, mailing and organizing filing system."
            ),
            React.createElement(
              "li",
              null,
              "Interacted with organizational staff, clients, employees and visitors regularly to assist them."
            ),
            React.createElement(
              "li",
              null,
              "Input paperwork into office data entry system for individual employees and clients."
            ),
            React.createElement(
              "li",
              null,
              "Proficient in Microsoft Office"
            )
          )
        )
      );
    }
  }]);

  return Experience;
}(React.Component);

var Main = function (_React$Component8) {
  _inherits(Main, _React$Component8);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "jumbotron" },
          React.createElement(Header, null),
          React.createElement("hr", null),
          React.createElement(Contact, null)
        ),
        React.createElement(Education, null),
        React.createElement(Skills, null),
        React.createElement(Projects, null),
        React.createElement(Leadership, null),
        React.createElement(Experience, null)
      );
    }
  }]);

  return Main;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById("root"));