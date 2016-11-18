"use strict";

import SocketEvents from "../../util/socket-events.js";

export const PLAY_MUSIC = "PLAY_MUSIC";
export function playMusic() {
  return {type: PLAY_MUSIC};
}

export const PAUSE_MUSIC = "PAUSE_MUSIC";
export function pauseMusic() {
  return {type: PAUSE_MUSIC};
}

export const CHANGE_VOLUME = "CHANGE_VOLUME";
export function changeVolume(newValue) {
  return {type: CHANGE_VOLUME, payload: newValue}
}

export const UPDATE_ROOM_NAME = "UPDATE_ROOM_NAME";
export function updateRoomName(newName) {
  return {type: UPDATE_ROOM_NAME, payload: newName};
}

/** Adds a track to the playlist */
export const ADD_TRACK_TO_PLAYLIST = "ADD_TRACK_TO_PLAYLIST";
export function addTrackToPlaylist(track) {
  return {type: ADD_TRACK_TO_PLAYLIST, payload: track};
}

export const ADD_TRACK_ERROR = "ADD_TRACK_ERROR";
export function addTrackError(message) {
  return {type: ADD_TRACK_ERROR, payload: message};
}

export function submitTrackUrl(trackUrl) {
  return (dispatch) => {

    return new Promise( (resolve) => {
      const Globals = window.CDJ_GLOBALS;

      // Submit track URL to server through Socket.io
      Globals.roomSocket.emit(SocketEvents.SubmitTrackUrl, {url: trackUrl}, (result) => {
        if(typeof result.error === "string") {
          dispatch(addTrackError(result.error));
        }

        return resolve();
      });
    });
  };
}
