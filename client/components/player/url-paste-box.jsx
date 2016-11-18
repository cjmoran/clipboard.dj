"use strict";

import "../../style/components/player/url-paste-box.scss";

import * as React from "react";

import {submitTrackUrl} from "../../actions/";

export default class UrlPasteBox extends React.Component {
  constructor() {
    super();

    this.state = { inputText: "", waitingForTrackInfo: false };

    this.onInputText = this.onInputText.bind(this);
    this.onSubmitTrack = this.onSubmitTrack.bind(this);
  }

  render() {
    return (
        <div className="url-paste-box">
          <div className="label">Paste URL</div>

          <input
            type="text"
            value={this.state.inputText}
            onChange={this.onInputText}
            disabled={this.state.waitingForTrackInfo} />

          <button type="button" onClick={this.onSubmitTrack} disabled={this.state.waitingForTrackInfo}>
            <img src="/images/icon-plus.svg"/>
          </button>
        </div>
    );
  }

  onInputText(event) {
    this.setState({ inputText: event.target.value });
  }

  onSubmitTrack() {
    // Disable input
    this.setState({ waitingForTrackInfo: true });

    this.props.dispatch( submitTrackUrl(this.state.inputText) ).then( () => {
      // Re-enable input once track submitted
      this.setState({ waitingForTrackInfo: false });
    });
  }
}
