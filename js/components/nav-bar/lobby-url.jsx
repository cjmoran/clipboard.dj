"use strict";

import React from "react";

export default class LobbyUrl extends React.Component {
  render() {
    return (
        <div className="lobby-url">
          <span className="label">Invite friends:&nbsp;</span>
          <input type="text" value="http://filler-url" readOnly="true" />
        </div>
    );
  }
}
