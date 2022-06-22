const express =require('express');
const {Server:HttpServer} = require('http');
const { emit } = require('process');
const {Server:IOServer}=require('socket.io')

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

// app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:__dirname})

})
httpServer.listen(3000,()=>{
    console.log('Servidor funcionando...');
})
const mensajes = [];
io.on('connection',(socket)=>{

    console.log('Se conecto un cliente');
    console.log(socket.id);
    
    socket.emit('mensaje',mensajes);//mensaje para todos los clientes

    socket.on('notificacion',(d)=>{
        console.log(d);
        mensajes.push({id:d.id,msg:d.msg});
        io.sockets.emit('mensaje',mensajes)
    })
})