"use strict";

import "../style/player.scss";

import React from "react";
import ReactDOM from "react-dom";

import NavBar from "./nav-bar.jsx";

class Player extends React.Component {
  render() {
    return (
        <div className="player">
          <NavBar />
        </div>
    );
  }
}

ReactDOM.render(<Player />, document.getElementById("wrapper"));
