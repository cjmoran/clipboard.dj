"use strict";

import "../../../style/components/common/copy-to-clipboard-button.scss";

import React from "react";
import Clipboard from "clipboard";

export default class CopyToClipboardButton extends React.Component {
  constructor() {
    super();
    this.clipboardLibrary = null;
  }

  render() {
    let targetSelector = this.props.targetSelector;

    return (
        <button id="copy-lobby-url-button" className="copy-to-clipboard-button" data-clipboard-target={targetSelector}>
          <img src="public/images/copy-to-clipboard.svg" alt="Copy to clipboard" />
        </button>
    );
  }

  componentDidMount() {
    this.clipboardLibrary = new Clipboard("#copy-lobby-url-button");
  }

  componentWillUnmount() {
    this.clipboardLibrary.destroy();
  }
}
