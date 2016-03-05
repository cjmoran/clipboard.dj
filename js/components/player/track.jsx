"use strict";

import "../../../style/components/player/track.scss";

export default ({albumArt, artist, title, addedBy}) => (
    <li className="track now-playing">
      <img src={albumArt} />

      <div className="artist-title-wrapper">
        <div className="artist">{artist}</div>
        <div className="title">{title}</div>
      </div>

      <span className="added-by">{addedBy}</span>
    </li>
);
