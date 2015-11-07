"use strict";

import React from "react";

export default class LobbyUrl {
  render() {
    return (
        <div className="lobby-url">
          Invite friends:&nbsp;
          <input type="text" value="http://filler-url" />
        </div>
    );
  }
}
