import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send("This is a GET request.");
});

server.post("/", (req, res) => {
  res.status(201).send("This is a POST request.");
});

server.listen(5000, () => console.log("Server running on localhost:5000"));
