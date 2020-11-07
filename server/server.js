const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const port = process.env.PORT || 4002;
const index = require("./src/routes/index");

const app = express();
app.use(cors());
app.use(index);

const server = http.createServer(app);

const io = socketIo(server, { origins: '*:*', cors: true});

server.listen(port, () => console.log(`Listening on port ${port}`));