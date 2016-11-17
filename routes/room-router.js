"use strict";

const router = require("express").Router();

const RoomHandler = require("../room-handler.js");

/** For "/room/{roomName}" */
router.get("/:roomName", function(req, res) {
  const requestedRoom = req.params.roomName;

  // If room doesn't exist
  if(!RoomHandler.roomData.has(requestedRoom)) {
    return res.status(404).end("Couldn't find a room with that name.");
  }

  // Join them to the room by sending them the player page with the room's Socket.io namespace injected
  res.render("player", {roomName: requestedRoom});
});

module.exports = router;
