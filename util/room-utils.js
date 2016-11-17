"use strict";

/** Server-side utils for room management */
const RoomUtils = {
  /** Stores data for every room. Key = room name (also socket.io namespace name), value = room data */
  roomData: new Map(),

  /** Express middleware which creates a new room and places the requesting user in it */
  joinToNewRoom: function(req, res) {
    // Create room
    let roomName = RoomUtils.generateRoomName();
    while(RoomUtils.roomData.has(roomName)) { roomName = RoomUtils.generateRoomName(); }
    const room = RoomUtils.createRoom(req.app.locals.io, roomName, req.session.id);

    // Redirect to room page
    res.redirect(`/room/${room.name}`);
  },

  /** Creates new namespace in Socket.io to represent a room, and adds an entry to roomData. Returns roomData entry. */
  createRoom: function(io, roomName, ownerSessionId) {
    const roomDataModel = {
      name: roomName,
      ownerSessionId
    };

    // Rooms are represented by socket.io namespaces (socket.io confusingly also has a feature called "rooms")
    // All namespaces are stored by socket.io and accessible later through io.nsps
    const newNamespace = io.of(roomName);
    newNamespace.on("connection", function(socket) {
      console.log(`Socket (id = ${socket.id}) connected to room "${roomName}"`);
    });

    RoomUtils.roomData.set(roomName, roomDataModel);
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

module.exports = RoomUtils;
