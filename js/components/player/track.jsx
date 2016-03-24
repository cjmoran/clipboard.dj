"use strict";

import classNames from "classnames";
import "../../../style/components/player/track.scss";

export default ({nowPlaying, albumArt, artist, title, addedBy}) => (
    <li className={classNames("track", {"now-playing": nowPlaying})}>
      <div className="album-art">
        <img src={albumArt} />
      </div>

      <div className="artist-title-wrapper">
        <div className="artist">{artist}</div>
        <div className="title">{title}</div>
      </div>

      <span className="added-by">{addedBy}</span>
    </li>
);
