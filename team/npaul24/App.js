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
          "Nicole Paul"
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Info = function (_React$Component2) {
  _inherits(Info, _React$Component2);

  function Info() {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).apply(this, arguments));
  }

  _createClass(Info, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          { "class": "text-center" },
          "npaul64@gmail.com 210-428-0160"
        ),
        React.createElement(
          "p",
          { "class": "text-center" },
          "1512 South Shields Street &nbsp Fort Collins, CO 80521"
        ),
        React.createElement("hr", null)
      );
    }
  }]);

  return Info;
}(React.Component);

var Objective = function (_React$Component3) {
  _inherits(Objective, _React$Component3);

  function Objective() {
    _classCallCheck(this, Objective);

    return _possibleConstructorReturn(this, (Objective.__proto__ || Object.getPrototypeOf(Objective)).apply(this, arguments));
  }

  _createClass(Objective, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { "class": "Objective" },
          React.createElement(
            "h2",
            null,
            React.createElement(
              "ul",
              null,
              "Objective"
            )
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "ul",
              null,
              " To use use my privilege and abilities to help others and to always bring my best self into every endeaver I embark on. I am a highly motivated, bubbly, and hard working individual who decided to pursue a degree in technology in order to use those skills to teach others practical skills to change their lives and improve their communities."
            ),
            " "
          ),
          React.createElement("hr", null)
        )
      );
    }
  }]);

  return Objective;
}(React.Component);

var Education = function (_React$Component4) {
  _inherits(Education, _React$Component4);

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
          { "class": "Education" },
          React.createElement(
            "h2",
            null,
            React.createElement(
              "ul",
              null,
              "Education"
            )
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "ul",
              null,
              "Graduated Salutatorian from Cornerstone Christian High School (May 2012)."
            )
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "ul",
              null,
              "Current student at Colorado State University majoring in Applied Computing Technology. Expected Graduation in May 2018."
            )
          ),
          React.createElement("hr", null)
        )
      );
    }
  }]);

  return Education;
}(React.Component);

var Skills = function (_React$Component5) {
  _inherits(Skills, _React$Component5);

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
          { "class": "Skills" },
          React.createElement(
            "h2",
            null,
            React.createElement(
              "ul",
              null,
              "Skills"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "ul",
              null,
              " GitHub"
            ),
            " "
          ),
          React.createElement(
            "li",
            null,
            " ",
            React.createElement(
              "ul",
              null,
              "Database Management (MySQL)"
            ),
            "  "
          ),
          React.createElement(
            "li",
            null,
            " ",
            React.createElement(
              "ul",
              null,
              "Raspberry Pi Development"
            ),
            "  "
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "ul",
              null,
              " Web Development (PHP, JavaScript, HTML, CakePHP)"
            ),
            " "
          ),
          React.createElement("hr", null)
        )
      );
    }
  }]);

  return Skills;
}(React.Component);

var WorkExperience = function (_React$Component6) {
  _inherits(WorkExperience, _React$Component6);

  function WorkExperience() {
    _classCallCheck(this, WorkExperience);

    return _possibleConstructorReturn(this, (WorkExperience.__proto__ || Object.getPrototypeOf(WorkExperience)).apply(this, arguments));
  }

  _createClass(WorkExperience, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { "class": "Work Experience" },
          React.createElement(
            "h2",
            null,
            React.createElement(
              "ul",
              null,
              "Work Experience"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "ul",
              null,
              "Software developer at the Research Software Facility of CSU (November 2016-Present)"
            ),
            " "
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "ul",
              null,
              "IT staff at Ridgeview Classical School (November 2015-November 2016)"
            ),
            " "
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "ul",
              null,
              "Event Planning team member at Cornerstone Church Events Department (August 2010- May 2012)"
            )
          )
        )
      );
    }
  }]);

  return WorkExperience;
}(React.Component);

var Languages = function (_React$Component7) {
  _inherits(Languages, _React$Component7);

  function Languages() {
    _classCallCheck(this, Languages);

    return _possibleConstructorReturn(this, (Languages.__proto__ || Object.getPrototypeOf(Languages)).apply(this, arguments));
  }

  _createClass(Languages, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { "class": "Languages" },
          React.createElement(
            "h2",
            null,
            React.createElement(
              "ul",
              null,
              "Languages"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "ul",
              null,
              "Java"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "ul",
              null,
              "C/C++"
            ),
            " "
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "ul",
              null,
              "Python"
            )
          )
        ),
        React.createElement("hr", null)
      );
    }
  }]);

  return Languages;
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
          React.createElement(Info, null)
        ),
        React.createElement(Objective, null),
        React.createElement(Education, null),
        React.createElement(Skills, null),
        React.createElement(WorkExperience, null),
        React.createElement(Languages, null)
      );
    }
  }]);

  return Main;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById("root"));