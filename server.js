<!-- This code is imprtant and responsibvle for importing libraries-->
const express = request("express");// repsponsible for senfing files
const http = require("http");//responsible for connecting to the internet
const socketIo = require("socket.io");//responsible for sending anf receiving real time date(text and data)
const path = require("path");//responible for finding and navigating file paths
const app = express();intitiating the express library
const server = http.createServer(app); //creating server that sends files
const io = socketIo(server); //making socket.io responsible for the real-time connection logic


//Means that anyone that enters pur website, we sent him the index.html
first and they start seeing our page

cosnt clientLandingPagePath = path.join(__dirname, "../", "/client/index.html");
app.get("/", (req, res) => {
res.sendfileclientLandingPagePath);
});

//starting the server on port 2008, we can have multiple servers on multiple ports - localhost:2000
server.listen(2000, () => {
console.log("Sever is up on: 2000");//print anything for test or whatevs
});

//The socket.oi connection logic (This is going to make the game look fluid or run smooth)
io.on("connection", (socket) => {
//Code for the moment someone connects
console.log("a user connected")

//Code for the moment someone disconnects
socket.on("disconnect", () => {
console.log("user disconnected");
});
});

//in the TERMINAL input this text = npm install express

//nex installation require is = npm install socket.io

//lastly fill in the pathway to your server like so = node Server/server.js