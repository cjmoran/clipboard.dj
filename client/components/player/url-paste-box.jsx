"use strict";

import "../../../style/components/player/url-paste-box.scss";

import * as React from "react";
import request from "superagent";

export default class UrlPasteBox extends React.Component {
  constructor() {
    super();

    this.state = { inputText: "", inputDisabled: false };

    this.onInputText = this.onInputText.bind(this);
    this.onAddTrack = this.onAddTrack.bind(this);
  }

  render() {
    return (
        <div className="url-paste-box">
          <div className="label">Paste URL</div>

          <input
            type="text"
            value={this.state.inputText}
            onChange={this.onInputText}
            disabled={this.state.inputDisabled} />

          <button type="button" onClick={this.onAddTrack} disabled={this.state.inputDisabled}>
            <img src="/images/icon-plus.svg"/>
          </button>
        </div>
    );
  }

  onInputText(event) {
    this.setState({ inputText: event.target.value });
  }

  onAddTrack() {
    const trackUrl = this.state.inputText;

    // Disable paste box and button while processing
    this.setState({ inputDisabled: true });

    // TODO enable input once the track is added
  }
}
