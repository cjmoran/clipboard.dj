"use strict";

/** Global Socket.io connection entry point */
module.exports = function(app, io) {
  io.on("connection", function(socket) {
    console.log(`Socket ${socket.id} connected.`);

    socket.on("disconnect", function() {
      console.log(`Socket ${socket.id} disconnected.`)
    });
  });

  // Make io object available throughout express routes by using req.app.locals.io
  app.locals.io = io;
};
