import net from 'net';

const client = net.connect({port: 3000},()=>{ // Changed port from 300 to 3000
    console.log("Connected with Server")
    client.write("Hello Server how are You")
})

client.on("data",(data)=>{
    console.log(`Received:${data.toString()}`)
})
client.on("close",()=>{
    console.log("Thanks for joining metting")
})