"use strict";

import "../../../style/components/player/playlist.scss";

import * as React from "react";

import Track from "./track.jsx";

export default class Playlist extends React.Component {
  render() {
    const tracks = [
      {
        albumArt: "/images/testing-static/placeholder-album-art.png",
        artist: "Track Artist",
        title: "Track Title",
        addedBy: "user who added it"
      },
      {
        albumArt: "/images/testing-static/placeholder-album-art.png",
        artist: "Track Artist",
        title: "Track Title",
        addedBy: "user who added it"
      }
    ];

    return (
        <ul className="playlist">

          <div className="header">
            <div className="header-text">
              <span className="now-playing-label">now playing</span>
              <span className="added-by-label">added by</span>
            </div>
            <hr />
          </div>

          {tracks.map( (track, index) => {
            return <Track
                key={index}
                nowPlaying={index === 0}
                albumArt={track.albumArt}
                artist={track.artist}
                title={track.title}
                addedBy={track.addedBy} />
          })}
        </ul>
    );
  }
}
