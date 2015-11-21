"use strict";

import "../../../style/components/player/track.scss";

var Track = ({albumArt, artist, title, addedBy}) => (
    <li className="track">
      <img src={albumArt} />

      <div className="artist-title-wrapper">
        <div className="artist">{artist}</div>
        <div className="title">{title}</div>
      </div>

      <span className="added-by">{addedBy}</span>
    </li>
);

export default Track;
