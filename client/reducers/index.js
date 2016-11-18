"use strict";
/* global ServerInjected */

import {combineReducers} from "redux";
import * as actions from "../actions/";

function room(state = {name: ServerInjected.roomName, addTrackError: null}, action) {
  switch(action.type) {
    case actions.UPDATE_ROOM_NAME:
      return Object.assign({}, state, { name: action.payload });

    case actions.ADD_TRACK_ERROR:
      return Object.assign({}, state, { addTrackError: action.payload });

    default:
      return state;
  }
}

function player(state = {playing: false, volume: 100}, action) {
  switch(action.type) {
    case actions.PLAY_MUSIC:
      return Object.assign({}, state, { playing: true });

    case actions.PAUSE_MUSIC:
      return Object.assign({}, state, { playing: false });

    case actions.CHANGE_VOLUME:
      return Object.assign({}, state, { volume: action.payload });

    default:
      return state;
  }
}

function playlist(state = [], action) {
  switch(action.type) {
    case actions.ADD_TRACK_TO_PLAYLIST:
      return [...state].push(action.payload);

    default:
      return state;
  }
}

function users(state = [], action) {
  switch(action.type) {
    default:
      return state;
  }
}

const clipboardDjApp = combineReducers({room, player, playlist, users});

export default clipboardDjApp;
