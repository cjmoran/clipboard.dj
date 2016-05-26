"use strict";

import "../style/player.scss";

import React from "react";
import {ReactDOM} from "react-dom";
import {Provider} from "react-redux";
import {compose, createStore, applyMiddleware} from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";

import clipboardDjApp from "./reducers/index.js";
import NavBar from "./nav-bar.jsx";
import UrlPasteBox from "./components/player/url-paste-box.jsx";
import Playlist from "./components/player/playlist.jsx";

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
}

ReactDOM.render(<Provider store={store}> <Player/> </Provider>, document.getElementById("page-wrapper"));
