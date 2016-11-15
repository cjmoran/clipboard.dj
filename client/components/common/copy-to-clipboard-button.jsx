"use strict";

import "../../../style/components/common/copy-to-clipboard-button.scss";

import * as React from "react";
import Clipboard from "clipboard";

export default class CopyToClipboardButton extends React.Component {
  constructor() {
    super();
    this.clipboardLib = null;
  }

  render() {
    let targetSelector = this.props.targetSelector;

    return (
        <button id="copy-room-url-button" className="copy-to-clipboard-button" data-clipboard-target={targetSelector}>
          <img src="images/copy-to-clipboard.svg" alt="Copy to clipboard" />
        </button>
    );
  }

  componentDidMount() {
    this.clipboardLib = new Clipboard("#copy-room-url-button");
  }

  componentWillUnmount() {
    this.clipboardLib.destroy();
  }
}
