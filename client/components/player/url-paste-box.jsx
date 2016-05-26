"use strict";

import "../../../style/components/player/url-paste-box.scss";

import React from "react";

export default class UrlPasteBox extends React.Component {
  constructor() {
    super();

    this.state = { inputText: "" };

    this.onInputText = this.onInputText.bind(this);
    this.onAddSong = this.onAddSong.bind(this);
  }

  render() {
    return (
        <div className="url-paste-box">
          <div className="label">Paste URL</div>
          <input type="text" value={this.state.inputText} onChange={this.onInputText} />
          <button type="button" onClick={this.onAddSong}> <img src="/images/icon-plus.svg"/> </button>
        </div>
    );
  }

  onInputText(event) {
    this.setState({ inputText: event.target.value });
  }

  onAddSong() {
    const songUrl = this.state.inputText;
    // TODO - call "add song" api
  }
}
