const express=require('express') ;
const app=express() ;
const http=require('http'); 
const cors=require('cors') ;

const {Server}=require('socket.io') ; 


app.use(cors())

const server=http.createServer(app); 
const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173", 
        methods:["GET","POST"]
    }
}) ;


io.on("connection",(socket)=>{
    console.log(`User Connected:${socket.id}`) 

    socket.on("send-message",(message)=>{ 
console.log(message)
        io.emit("received-message",message)

        console.log(message);
    })
    socket.on("disconnect",()=>console.log("User Disconnected"))
})




server.listen(7000,()=>{
    console.log("Server running at 7000")
})

