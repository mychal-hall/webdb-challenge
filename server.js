const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

// Put the dang routers right here!!

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("tiny"));

// ROUTER PATHSSSSS

// Trash online test
server.get("/", (req, res) => {
  res.send("<h1>The API is online</h1>");
});

//server export
module.exports = server;
