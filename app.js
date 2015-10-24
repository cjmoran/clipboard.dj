"use strict";

var express = require("express"),
    app = express();

// Main player page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/player.html");
});

// Serve built JS
app.use("/build", express.static(__dirname + "/build"));

module.exports = app;
