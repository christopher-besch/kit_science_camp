const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT, () => {
    console.log(`Server open on http://localhost:${PORT}...`);
});

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", socket => {
    socket.on("message", msg => {
        console.log(msg);

        socket.emit("message", "Hello Client");
        socket.broadcast.emit("message", "Hello other Clients");
        io.emit("message", "Hello Everyone");
    });
});
