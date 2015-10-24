"use strict";

var React = require("react");
var ReactDOM = require("react-dom");

class Player extends React.Component {
  render() {
    return (
        <div>
          Definitely a complete web app at this point
        </div>
    );
  }
}

ReactDOM.render(<Player />, document.getElementById("wrapper"));
