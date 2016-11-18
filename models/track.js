"use strict";

module.exports = class Track {
  constructor(artist, title, albumArtUrl, streamUrl) {
    this.artist = artist;
    this.title = title;
    this.albumArtUrl = albumArtUrl;
    this.streamUrl = streamUrl;
  }
};
