var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send("bonjour");
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("prout", () => {
  	console.log("soquette")
  	socket.broadcast.emit("megaprout")
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
