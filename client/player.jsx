"use strict";
/* global ServerInjected */

window.CDJ_GLOBALS = {};
const Globals = window.CDJ_GLOBALS;
Globals.roomName = ServerInjected.roomName;

import "./style/player.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";
import {compose, createStore, applyMiddleware} from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";

import audioPlayer from "./util/audio-player.js";
import initRoomSocket from "./util/init-socket-client.js";
import rootReducer from "./reducers/";
import NavBar from "./nav-bar.jsx";
import UrlPasteBox from "./components/player/url-paste-box.jsx";
import ConnectedPlaylist from "./components/player/playlist.jsx";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(createLogger(), thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f));

// Connects to the server-determined Socket.io namespace (my code calls it a 'room')
Globals.roomSocket = initRoomSocket(store, Globals.roomName);

class Player extends React.Component {
  render() {
    const roomName = this.props.roomName;

    return (
        <div className="player-wrapper">
          <NavBar roomName={roomName} />

          <div className="player">
            <a className="soundcloud-logo-link" href="https://soundcloud.com/" target="_blank">
              <img src="/images/powered-by-soundcloud.png" />
            </a>

            <UrlPasteBox dispatch={store.dispatch} />
            <ConnectedPlaylist />
          </div>
        </div>
    );
  }
}

ReactDOM.render(
    <Provider store={store}><Player roomName={Globals.roomName}/></Provider>,
    document.getElementById("page-wrapper"));
