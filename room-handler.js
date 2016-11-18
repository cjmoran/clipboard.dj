"use strict";

const Track = require("./models/track.js");
const SocketEvents = require("./util/socket-events.js");

/** Server-side utils for room management */
const RoomHandler = {
  /** Stores data for every room. Key = room name (also socket.io namespace name), value = room data */
  currentRooms: new Map(),

  /**
   * Creates new namespace in Socket.io to represent a room, and adds an entry to currentRooms.
   * @returns the new currentRooms entry.
   */
  createRoom: function(io, roomName, ownerSessionId) {
    const roomDataModel = {
      name: roomName,
      ownerSessionId,
      clientCount: 0,
      playlist: []
    };

    RoomHandler.currentRooms.set(roomName, roomDataModel);

    // Rooms are represented by socket.io namespaces (socket.io confusingly also has a feature called "rooms")
    // All namespaces are stored by socket.io and accessible later through io.nsps
    const newNamespace = io.of(roomName);
    newNamespace.on("connection", function(socket) {
      console.log(`Socket (id = ${socket.id}) connected to room "${roomName}"`);

      const roomData = RoomHandler.currentRooms.get(roomName);
      roomData.clientCount++;

      socket.on("disconnect", function() {
        console.log(`Socket (id = ${socket.id}) disconnected from room "${roomName}"`);
        roomData.clientCount--;

        // Empty room, delete it after 5 seconds of emptiness so the next person to use this name will be the owner
        if(roomData.clientCount <= 0) {
          setTimeout( () => {
            if(roomData.clientCount <= 0) {
              console.log(`Room "${roomName}" has been empty for 5 seconds, deleting...`);
              RoomHandler.currentRooms.delete(roomName);
            }
          }, 5000);
        }
      });

      // Handle new track URL submissions
      socket.on(SocketEvents.SubmitTrackUrl, function({url}, acknowledge) {
        // todo get real track data
        const trackData = new Track(
            "placeholder artist",
            "placeholder title",
            "/images/testing-static/placeholder-album-art.png",
            "/fakeStreamUrl");

        // todo if error getting track data,
        // acknowledge({ error: new Error(...) });
        // else...

        acknowledge({error: null});

        // Add the track info to our local currentRoom.playlist
        RoomHandler.currentRooms.get(roomName).playlist.push(trackData);

        // Send new track details to all in room
        newNamespace.emit(SocketEvents.AddTrackToPlaylist, trackData);
      });

      // Send
      socket.on(SocketEvents.RequestFullPlaylist, function(nothing, acknowledge) {
        acknowledge(RoomHandler.currentRooms.get(roomName).playlist);
      });
    });

    return roomDataModel;
  },

  /** Generates a random name for a new room (owner will be able to rename it later if they want) */
  generateRoomName: function(nameLength = 5) {
    const characters = "qwertyuiopasdfghjklzxcvbnm1234567890";
    let result = "";
    while(result.length < nameLength) {
      result += characters.charAt( Math.floor(Math.random() * characters.length) );
    }
    return result;
  }
};

module.exports = RoomHandler;
