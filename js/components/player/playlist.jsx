"use strict";

import "../../../style/components/player/playlist.scss";

import React from "react";

import Track from "./track.jsx";

export default class Playlist extends React.Component {
  render() {
    return (
        <ul className="playlist">

          <div className="header">
            <span className="added-by-label">added by</span>
          </div>

          <Track
              albumArt="/public/images/testing-static/albumArt.png"
              artist="OBESØN"
              title="Control Me (Feat. Sakima)"
              addedBy="your mom" />
        </ul>
    );
  }
}
