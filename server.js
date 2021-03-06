var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection',function(socket){
    console.log('User connected via socket .io!socketsocketsockdtsock');

    socket.on('message',function(message){
        console.log('message received:'+message.text);
        io.emit('message',message);
    });

    socket.emit('message',{
        text:'Welcome to my life.'
    });
});

app.use(express.static(__dirname+'/public'));

http.listen(PORT,function(){
    console.log('Server started');
});