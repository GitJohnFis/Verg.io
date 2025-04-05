//<!-- This code is imprtant and responsibvle for importing libraries -->

//UPDATED server.js v1.0.0
// This code is imprtant and responsibvle for importing libraries
const express = require("express");// repsponsible for senfing files
const http = rquire("http");//responsible for connecting to the internet
const socketIo = require("socket.io");//responsible for sending anf receiving real time date(text and data)
const path = require("path");//responible for finding and navigating file paths
const app = express(); //intitiating the express library
const server = http.createServer(app); //creating server that sends files
const io = socketIo(server); //making socket.io responsible for the real-time connection logic


//Means that anyone that enters pur website, we sent him the index.html first and they start seeing our page

const clientLandingPagePath = path.join(__dirname, "../",
    "/Client/socket.html");
app.get("/", (req, res) => {
    res.sendFile(clientLandingPagePath);
});

//starting the server on port 2008, we can have multiple servers on multiple ports - localhost:2000
server.listen(2008, () => {
    console.log("Sever is up on: 2008");//print anything for test or whatevs
});

let players = {}; //this is where we store the information for all the connected players

//The socket.oi connection logic (This is going to make the game look fluid or run smooth)
io.on("connection", (socket) => {
    //Code for the moment someone connects
    console.log("a user connected")

    //Code for the moment someone disconnects
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

//Our tick function
let framerate = 60;
setInteraval(function () {
    io.emit("state", "players"); // send the list of the players and all their info to everyone

}, 1000 / framerate);

//in the TERMINAL input this text = npm install express

//nex installation require is = npm install socket.io

//lastly fill in the pathway to your server like so = node Server/server.js
