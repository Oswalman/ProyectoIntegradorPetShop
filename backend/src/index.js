require('dotenv').config();
const app = require('./app');
require('./database');
const Socket=require('socket.io');

async function main() {
    const server=await app.listen(app.get('port'));
    const io=await Socket(server);
    io.on('connection', (socket)=>{
        console.log("new conection", socket.id)
        socket.on('chat:message', (data)=>{
            console.log(data);
            console.log("Recibio mensaje")
            io.emit('chat:message',data);
        })
    })
    console.log('Server on port', app.get('port'));
}

main();