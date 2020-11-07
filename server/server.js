const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4002;

const app = express();

const server = http.createServer(app);

const io = socketIo(server, { origins: '*:*', cors: true});

server.listen(port, () => console.log(`Listening on port ${port}`));