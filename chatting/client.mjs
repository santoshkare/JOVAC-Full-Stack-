import net from 'net';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const usernameIn = new Promise(resolve => {
    rl.question("Enter a username: ", answer => {
        resolve(answer);
    });
});

usernameIn.then((username) => {
    const client = net.connect({port: 8080}, function(){
        console.log("Connected to Server.");
    });

    rl.on('line', data => {
        client.write(username + " : " + data);
    });

    client.on('data', function(data){
        console.log(data.toString());
    });

    client.on('end', () => {
        console.log('Disconnected from server.');
        rl.close();
    });
});
