"use strict";

import "../../style/components/player/playlist.scss";

import * as React from "react";
import {connect} from "react-redux";

import Track from "./track.jsx";
import {requestFullPlaylist} from "../../actions/";

class Playlist extends React.Component {
  render() {
    const tracks = this.props.tracks || [];

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
                albumArtUrl={track.albumArtUrl}
                artist={track.artist}
                title={track.title}
                addedBy={track.addedBy} />
          })}
        </ul>
    );
  }

  componentDidMount() {
    // When the Playlist is ready, dispatch a request for all tracks currently in the room's playlist
    this.props.dispatch(requestFullPlaylist());
  }
}

// Create a wrapper for ConnectedPlaylist which subscribes it to the Redux store
const ConnectedPlaylist = connect(function mapStateToProps(state) {
  return { tracks: state.playlist }
})(Playlist);

export default ConnectedPlaylist;
