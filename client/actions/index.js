"use strict";

export const actionTypes = {
  PLAY_MUSIC: "PLAY_MUSIC",
  PAUSE_MUSIC: "PAUSE_MUSIC",
  CHANGE_VOLUME: "CHANGE_VOLUME",
  UPDATE_ROOM_NAME: "UPDATE_ROOM_NAME"
};

export function playMusic() {
  return {type: ActionTypes.PLAY_MUSIC};
}

export function pauseMusic() {
  return {type: ActionTypes.PAUSE_MUSIC};
}

export function changeVolume(newValue) {
  return {type: ActionTypes.CHANGE_VOLUME, payload: newValue}
}

export function updateRoomName(newName) {
  return {type: ActionTypes.UPDATE_ROOM_NAME, payload: newName};
}
