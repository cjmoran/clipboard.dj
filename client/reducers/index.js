"use strict";

import {combineReducers} from "redux";
import * as actions from "../actions/";

function room(state = {name: ""}, action) {
  switch(action.type) {
    case actions.actionTypes.UPDATE_ROOM_NAME:
      return Object.assign({}, state, { name: action.payload });

    default:
      return state;
  }
}

function player(state = {playing: false, volume: 100}, action) {
  switch(action.type) {
    case actions.actionTypes.PLAY_MUSIC:
      return Object.assign({}, state, { playing: true });

    case actions.actionTypes.PAUSE_MUSIC:
      return Object.assign({}, state, { playing: false });

    case actions.actionTypes.CHANGE_VOLUME:
      return Object.assign({}, state, { volume: action.payload });

    default:
      return state;
  }
}

function playlist(state = [], action) {
  switch(action.type) {
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
