"use strict";

const express = require("express");
const serveFavicon = require("serve-favicon");
const cookieSession = require("cookie-session");
const uuid = require("uuid");

const roomRouter = require("./routes/room-router.js");
const RoomHandler = require("./room-handler.js");

const app = express();

app.use(serveFavicon(__dirname + "/public/images/favicon.ico"));

// Set up sessions which store data in signed browser cookies
app.use(cookieSession({
  name: 'session',
  keys: [
    toString(Math.floor(Math.random() * 100)),
    toString(Math.floor(Math.random() * 100)),
    toString(Math.floor(Math.random() * 100))
  ],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Setup EJS template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/templates");

// Serve built JS
app.use("/build", express.static(__dirname + "/build"));

// Give every visitor a session cookie containing their UUID
app.use( (req, res, next) => {
  if(typeof req.session.id !== "string") {
    req.session.id = uuid.v4();
  }
  return next();
});

// Handle arrival at root URL "/" - for now just redirect to /room which places user in a new room
app.get("/", (req, res) => { res.redirect("/room") });

// Handle "/room/*" URLs
app.use("/room/", roomRouter);

// Serve public files
app.use(express.static(__dirname + "/public"));

module.exports = app;
