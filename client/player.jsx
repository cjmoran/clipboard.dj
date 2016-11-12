"use strict";

import "../style/player.scss";

import ReactDOM from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import {compose, createStore, applyMiddleware} from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";

import SoundCloudAudioSource from "./audio-sources/soundcloud-audio-source.js";
import clipboardDjApp from "./reducers/index.js";
import NavBar from "./nav-bar.jsx";
import UrlPasteBox from "./components/player/url-paste-box.jsx";
import Playlist from "./components/player/playlist.jsx";

window.CDJ_Globals = {};
const Globals = window.CDJ_Globals;

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
          <NavBar />

          <div className="player">
            <UrlPasteBox />
            <Playlist />
          </div>
        </div>
    );
  }

  componentDidMount() {
    initSoundCloudAudioSource();
  }
}

function initSoundCloudAudioSource() {
  Globals.soundCloudAudioSource = new SoundCloudAudioSource();
}

ReactDOM.render(<Provider store={store}><Player/></Provider>, document.getElementById("page-wrapper"));
