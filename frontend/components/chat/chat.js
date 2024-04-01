const express = require("express");
const app = express();
const server = require("http").createServer(app);
const socket = require("socket.io");
const io = socket(server);



app.get('/',(req, res)=> {
    res.sendFile(`${__dirname}/chat.html`)
})



io.on('connection',(socket)=>{



    console.log('un utilisateur s est connecter');



    socket.on('disconnect', ()=>{
        console.log("User disconnected")
    })



    socket.on("chat message", (msg) => {
        io.emit("chat message", msg)
    });


    
})



server.listen(4000, ()=>{
    console.log('ecoute sur le port 4000')
})