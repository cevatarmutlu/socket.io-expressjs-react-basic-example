const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const Product = require("./src/models/product");

const port = process.env.PORT || 4002;
const index = require("./src/routes/index");

const app = express();
app.use(cors());
app.use(index);

const server = http.createServer(app);

const io = socketIo(server, { origins: '*:*', cors: true});

let interval;

io.on("connection", (socket) => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);

  socket.on("disconnect", () => {
    clearInterval(interval);
  });
});

const getApiAndEmit = async (socket) => {
  const response = await Product.findById(socket.handshake.query.id);
  const date = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("RealTimePrice", {price: response.price, date: date});
  socket.emit("RealTimeProduct", {data: response, date: date});
};

server.listen(port, () => console.log(`Listening on port ${port}`));