"use strict";

/** Global Socket.io connection entry point */
module.exports = function(io) {
  io.on("connection", function(socket) {
    console.log(`Socket ${socket.id} connected.`);

    socket.on("disconnect", function() {
      console.log(`Socket ${socket.id} disconnected.`)
    });
  })
};
