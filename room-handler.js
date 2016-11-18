"use strict";

const Track = require("./models/track.js");
const SocketEvents = require("./util/socket-events.js");

/** Server-side utils for room management */
const RoomHandler = {
  /** Stores data for every room. Key = room name (also socket.io namespace name), value = room data */
  roomData: new Map(),

  /** Creates new namespace in Socket.io to represent a room, and adds an entry to roomData. Returns roomData entry. */
  createRoom: function(io, roomName, ownerSessionId) {
    const roomDataModel = {
      name: roomName,
      ownerSessionId,
      clientCount: 0
    };

    RoomHandler.roomData.set(roomName, roomDataModel);

    // Rooms are represented by socket.io namespaces (socket.io confusingly also has a feature called "rooms")
    // All namespaces are stored by socket.io and accessible later through io.nsps
    const newNamespace = io.of(roomName);
    newNamespace.on("connection", function(socket) {
      console.log(`Socket (id = ${socket.id}) connected to room "${roomName}"`);

      const roomData = RoomHandler.roomData.get(roomName);
      roomData.clientCount++;

      socket.on("disconnect", function() {
        console.log(`Socket (id = ${socket.id}) disconnected from room "${roomName}"`);
        roomData.clientCount--;

        // Empty room, delete it so the next person to use this name will be the owner
        if(roomData.clientCount <= 0) {
          console.log(`Room "${roomName}" is now empty, deleting...`);
          RoomHandler.roomData.delete(roomName);
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

        // Send new track details to all in room
        newNamespace.emit(SocketEvents.AddTrackToPlaylist, trackData);
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
