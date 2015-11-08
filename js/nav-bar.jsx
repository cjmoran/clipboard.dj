"use strict";

import "../style/nav-bar.scss";

import React from "react";

import CopyToClipboardButton from "./components/common/copy-to-clipboard-button.jsx";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar-wrapper">
        <nav className="nav-bar">

          <div className="logo-title">
            <img className="logo" src="/public/images/logo.svg" />
            <span className="title">clipboard.dj</span>
          </div>

          <div className="lobby-url">
            <span className="label">Invite friends:&nbsp;</span>
            <input id="lobbyUrl" type="text" value="http://filler-url" readOnly="true" />
            <CopyToClipboardButton targetSelector="#lobbyUrl" />
          </div>

        </nav>
      </div>
    );
  }
}
