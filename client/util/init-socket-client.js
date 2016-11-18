"use strict";

import SocketEvents from "../../util/socket-events.js";
import {addTrackToPlaylist} from "../actions/";
import Track from "../../models/track.js";

/**
 * Prepares and returns a configured socket.io client.
 *
 * @param store - The Redux store of the app (so we can call dispatch)
 * @param roomName - The name of the room for the client to connect to (socket.io namespace)
 * @returns {SocketIOClient.Socket} The socket.io client for the clipboard.dj room name
 */
export default function initRoomSocket(store, roomName) {
  const roomSocket = io.connect(`/${roomName}`);

  roomSocket.on(SocketEvents.AddTrackToPlaylist, function(trackData) {
    store.dispatch(addTrackToPlaylist( new Track(...trackData) ));
  });

  return roomSocket;
}
