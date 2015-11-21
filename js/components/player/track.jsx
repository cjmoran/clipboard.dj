"use strict";

import "../../../style/components/player/track.scss";

var Track = ({albumArt, artist, title, addedBy}) => (
    <div className="track">
      <img src={albumArt} />

      <div>
        <div className="artist">{artist}</div>
        <div className="title">{title}</div>
      </div>

      <span>{addedBy}</span>
    </div>
);

export default Track;
