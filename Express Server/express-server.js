import express from "express";

// Create Server
const server = express();

// Handle default request
// If a get request
server.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

// Listen to reqest on specified port
server.listen(3100, () => console.log("Server is listening on 3100"));
