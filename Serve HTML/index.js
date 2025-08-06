import express from "express";

const server = express();

server.get("/", (req, res) => {
  return res.send("Welcome to Express");
});

// Serve the static files in the public folder
server.use(express.static("public"));

server.listen(4000);
