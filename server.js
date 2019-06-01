const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

// Put the dang routers right here!!
const projectRouter = require("./projects/projects-router.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("tiny"));

// ROUTER PATHSSSSS
server.use("/api/projects", projectRouter);

// Trash online test
server.get("/", (req, res) => {
  res.send("<h1>The API is online</h1>");
});

//server export
module.exports = server;
