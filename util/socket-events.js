"use strict";

/** A repository of socket events for use on both client and server, along with expected data structure */
module.exports = {
  SubmitTrackUrl: "SubmitTrackUrl"/*
    Server expects: { url: "" }
    Server acknowledges with: { error: null } OR { error: "error message" }
  */,

  AddTrackToPlaylist: "AddTrackToPlaylist"/*
    Clients expect: { artist: "", title: "", albumArtUrl: "", streamUrl: "" }
  */
};
