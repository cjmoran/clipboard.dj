"use strict";
window.SM2_DEFER = true;

import {soundManager} from "soundmanager2";

/** Uses SoundManager2 to play audio over HTML5/Flash */
class AudioPlayer {
  constructor() {
    // Initialize soundManager
    this.soundManager = soundManager.setup({
      url: '/sm2-swfs/',
      flashVersion: 9, // optional: shiny features (default = 8)
      preferFlash: false, // optional: ignore Flash where possible, use 100% HTML5 mode
      defaultOptions: {
        multiShot: false,
        onFinish: function() {}
      }
    });
  }

  /**
   * Immediately starts playing from the url.
   * @param {string} url - the URL to play from
   * @param {int} from - where to start playing, in milliseconds
   */
  playUrl(url, from = 0) {
    this.soundManager.createSound({
      url,
      from,
      volume: 50,
      autoPlay: false
    });
  }
}

export default new AudioPlayer();
