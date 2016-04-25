"use strict";

const express = require("express");
const app = express();

// Main player page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/templates/player.html");
});

// Serve built JS
app.use("/build", express.static(__dirname + "/build"));

// Serve public files
app.use(express.static(__dirname + "/public"));

module.exports = app;
