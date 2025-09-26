import net from 'net';

let sockets = []; // FIXED plural
function broadcast(data){
    sockets.forEach(s => {  // renamed param
        s.write(data);
    });
}

const server = net.createServer(function(socket){
    sockets.push(socket);

    socket.on('data', function(data){
        broadcast(data);
    });

    socket.on('error', function(err){
        console.log(err);
    });

    socket.on('end', () => {
        console.log('see you soon');
        sockets = sockets.filter(s => s !== socket); // remove closed socket
    });
});

server.listen(8080, function(){
    console.log("server is listening....");
});
