var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(4000);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

var clientList = {};
var id = Math.floor(Math.random() * 9000) + 1000;

io.on('connection', function (socket) {
  var uniqueID = id;

  socket.emit('server connect', { hello: 'world' });
  id = Math.floor(Math.random() * 9000) + 1000;

  socket.on('desktop connect', function (data) {
    clientList[uniqueID] = socket;

    socket.emit('unique id', { id : uniqueID });
  });
  socket.on('mobile_connection', function (data) {
    console.log(data);
  });

  socket.on('next_click', function (data) {
    console.log(data);
    var desktopClient = clientList[data.id];
    if (desktopClient !== undefined){
      desktopClient.emit('next click', { mobile: 'clicked next!' });
    }   
  });
  socket.on('shuffle_click', function (data) {
    console.log(data);
    var desktopClient = clientList[data.id];
    if (desktopClient !== undefined){
      desktopClient.emit('shuffle click', { mobile: 'clicked shuffle!' });
    }
  });
  socket.on('tag_click', function (data) {
    console.log(data);
    var inputValue = data.my;
    var desktopClient = clientList[data.id];
    if (desktopClient !== undefined){
      desktopClient.emit('tag click', { mobileinput: inputValue });
    }
  });


});