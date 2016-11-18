"use strict";

import "./style/nav-bar.scss";

import * as React from "react";

import CopyToClipboardButton from "./components/common/copy-to-clipboard-button.jsx";

export default class NavBar extends React.Component {
  render() {
    const roomUrl = `${window.location.protocol}//${window.location.host}/room/${this.props.roomName}`;

    return (
      <div className="nav-bar-wrapper">
        <nav className="nav-bar">

          <div className="logo-title">
            <img className="logo" src="/images/logo.svg" />
            <span className="title">clipboard.dj</span>
          </div>

          <div className="room-url">
            <span className="label">Invite friends:&nbsp;</span>
            <input id="roomUrl" type="text" value={roomUrl} readOnly="true" />
            <CopyToClipboardButton targetSelector="#roomUrl" />
          </div>

        </nav>
      </div>
    );
  }
}
