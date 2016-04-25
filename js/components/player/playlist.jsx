"use strict";

import "../../../style/components/player/playlist.scss";

import React from "react";

import Track from "./track.jsx";

export default class Playlist extends React.Component {
  render() {
    const tracks = [
      {
        albumArt: "/images/testing-static/albumArt.png",
        artist: "OBESØN",
        title: "Control Me (Feat. Sakima)",
        addedBy: "username"
      },
      {
        albumArt: "/images/testing-static/albumArt.png",
        artist: "OBESØN",
        title: "Control Me (Feat. Sakima)",
        addedBy: "username"
      }
    ];

    return (
        <ul className="playlist">

          <div className="header">
            <span className="added-by-label">added by</span>
            <hr />
          </div>

          {tracks.map( (track, index) => {
            return <Track
                key={index}
                nowPlaying={index === 0}
                albumArt={track.albumArt}
                artist={track.artist}
                title={track.title}
                addedBy={track.addedBy}  />
          })}
        </ul>
    );
  }
}
