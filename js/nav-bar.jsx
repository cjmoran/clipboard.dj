"use strict";

import "../style/nav-bar.scss";

import React from "react";

import LobbyUrl from "./components/nav-bar/lobby-url.jsx";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar-wrapper">
        <nav className="nav-bar">

          <div className="logo-title">
            <img className="logo" src="/public/images/logo.svg" />
            <span className="title">clipboard.dj</span>
          </div>

          <LobbyUrl />

        </nav>
      </div>
    );
  }
}
