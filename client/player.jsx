"use strict";
/* global ServerInjected */

window.CDJ_GLOBALS = {};
const Globals = window.CDJ_GLOBALS;

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
Globals.roomSocket = initRoomSocket(store, ServerInjected.roomName);

class Player extends React.Component {
  render() {
    const roomName = this.props.roomName || "";

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

// Subscribe to Redux store updates with react-redux's `connect()`
const ConnectedPlayer = connect(function mapStateToProps(state) {
  return { roomName: state.room.name }
})(Player);

ReactDOM.render(<Provider store={store}><ConnectedPlayer/></Provider>, document.getElementById("page-wrapper"));
