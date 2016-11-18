"use strict";

const router = require("express").Router();

const RoomHandler = require("../room-handler.js");

/** For "/room/{roomName}" */
router.get("/:roomName", function(req, res) {
  const requestedRoom = req.params.roomName;

  // If room doesn't exist
  if(!RoomHandler.currentRooms.has(requestedRoom)) {
    return res.status(404).end("Couldn't find a room with that name.");
  }

  // Join them to the room by sending them the player page with the room's Socket.io namespace injected
  res.render("player", {roomName: requestedRoom});
});

/** /room root URL: Creates a new room and places the requesting user in it */
router.get("/", function(req, res) {
  // Create room
  let roomName = RoomHandler.generateRoomName();
  while(RoomHandler.currentRooms.has(roomName)) { roomName = RoomHandler.generateRoomName(); }
  const room = RoomHandler.createRoom(req.app.locals.io, roomName, req.session.id);

  // Redirect to room page
  res.redirect(`/room/${room.name}`);
});

module.exports = router;
