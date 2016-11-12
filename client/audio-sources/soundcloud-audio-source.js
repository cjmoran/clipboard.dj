"use strict";
window.SM2_DEFER = true;

import SC from "soundcloud";
import {soundManager} from "soundmanager2";

const SoundCloud_Client_ID = "f33d55acd891cfdcd2412c829735df8d";

export default class SoundCloudAudioSource {
  constructor() {
    // Initialize soundManager
    this.soundManager = soundManager.setup({
      url: '/sm2-swfs/',
      flashVersion: 9, // optional: shiny features (default = 8)
      preferFlash: false, // optional: ignore Flash where possible, use 100% HTML5 mode
      onready: this.onSoundManagerReady
    });

    // Initialize SoundCloud API
    SC.initialize({ client_id: SoundCloud_Client_ID });
  }

  onSoundManagerReady() {
    console.log("SoundCloud Audio Source ready.");
  }
}
