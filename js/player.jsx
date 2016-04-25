"use strict";

import "../style/player.scss";

import React from "react";
import ReactDOM from "react-dom";

import NavBar from "./nav-bar.jsx";
import UrlPasteBox from "./components/player/url-paste-box.jsx";
import Playlist from "./components/player/playlist.jsx";

class Player extends React.Component {
  render() {
    return (
        <div className="player-wrapper">
          <NavBar />

          <div className="player">
            <UrlPasteBox />
            <Playlist />
          </div>
        </div>
    );
  }
}

ReactDOM.render(<Player />, document.getElementById("page-wrapper"));
