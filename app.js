"use strict";

var express = require("express"),
    app = express();

// Main player page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/player.html");
});

// Serve built JS
app.use("/build", express.static(__dirname + "/build"));

// Serve public files
app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
