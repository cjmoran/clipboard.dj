"use strict";

import "../style/player.scss";

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {compose, createStore, applyMiddleware} from "redux";
import createLogger from 'redux-logger';

import clipboardDjApp from "./reducers/index.js";
import NavBar from "./nav-bar.jsx";
import UrlPasteBox from "./components/player/url-paste-box.jsx";
import Playlist from "./components/player/playlist.jsx";

const store = createStore(
    clipboardDjApp,
    compose(
        applyMiddleware(createLogger()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

class Player extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <div className="player-wrapper">
            <NavBar />

            <div className="player">
              <UrlPasteBox />
              <Playlist />
            </div>
          </div>
        </Provider>
    );
  }
}

ReactDOM.render(<Player />, document.getElementById("page-wrapper"));
