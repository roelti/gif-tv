var express = require('express');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var fs = require('fs');

var port = 8001;

app.use('/dist', express.static(__dirname + '/web/dist'));

app.all('/m', function(req, res, next) {
    res.sendFile('web/mobile.html', { root: __dirname });
});

app.all('/*', function(req, res, next) {
    res.sendFile('web/index.html', { root: __dirname });
});



server.listen(port);

console.log('Server up and running on:', port);

var clientList = {};
var id = Math.floor(Math.random() * 9000) + 1000;

io.on('connection', function (socket) {
  
  var uniqueID = id;

  id = Math.floor(Math.random() * 9000) + 1000;

  socket.on('desktop connect', function (data) {
    clientList[uniqueID] = socket;
    socket.emit('unique id', { id : uniqueID });
  });

  // socket.on('next_click', function (data) {
  //   console.log(data);
  //   var desktopClient = clientList[data.id];
  //   if (desktopClient !== undefined){
  //     desktopClient.emit('next click', { mobile: 'clicked next!' });
  //   }   
  // });

  // socket.on('shuffle_click', function (data) {
  //   console.log(data);
  //   var desktopClient = clientList[data.id];
  //   if (desktopClient !== undefined){
  //     desktopClient.emit('shuffle click', { mobile: 'clicked shuffle!' });
  //   }
  // });

  // socket.on('tag_click', function (data) {
  //   console.log(data);
  //   var inputValue = data.my;
  //   var desktopClient = clientList[data.id];
  //   if (desktopClient !== undefined){
  //     desktopClient.emit('tag click', { mobileinput: inputValue });
  //   }
  // });

  socket.on('control', function (data) {
    var desktopClient = clientList[data.id];
    if (desktopClient !== undefined){
      desktopClient.emit('control', data );
    }
  });

});