import net from 'net';

const server =net.createServer((socket)=>{
    console.log("Someone is connected with me")
    socket.write("Hello Client")
    socket.on("data",(data)=>{
        console.log(`From Client:${data.toString()}`)
    })
    socket.on("error",()=>{
        console.log(`******Someone left the meeting******`)
    })
})

server.listen(3000,()=> console.log("Server Started at http://localhost:3000"))