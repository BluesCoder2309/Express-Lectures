// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here

import express from "express"

const server = express();

server.get("/", (req,res)=>{
    res.send("Be a Coding Ninja")
})

module.exports = { server };
