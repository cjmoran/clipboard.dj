"use strict";
/* global ServerInjected */

import "../style/player.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {compose, createStore, applyMiddleware} from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";

import audioPlayer from "./audio/audio-player.js";
import clipboardDjApp from "./reducers/index.js";
import NavBar from "./nav-bar.jsx";
import UrlPasteBox from "./components/player/url-paste-box.jsx";
import Playlist from "./components/player/playlist.jsx";

// Connect to the server-determined Socket.io namespace
const socket = io.connect(`/${ServerInjected.roomName}`);

const store = createStore(
    clipboardDjApp,
    compose(
        applyMiddleware(createLogger(), thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

class Player extends React.Component {
  render() {
    return (
        <div className="player-wrapper">
          <NavBar roomName={ServerInjected.roomName} />

          <div className="player">
            <a className="soundcloud-logo-link" href="https://soundcloud.com/" target="_blank">
              <img src="/images/powered-by-soundcloud.png" />
            </a>

            <UrlPasteBox />
            <Playlist />
          </div>
        </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><Player/></Provider>, document.getElementById("page-wrapper"));
