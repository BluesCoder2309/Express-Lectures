import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("This is a GET request.");
});

server.post("/", (req, res) => {
  res.send("This is a POST request.");
});

server.put("/", (req, res) => {
  res.send("This is a PUT request.");
});

server.delete("/", (req, res) => {
  res.send("This is a DELETE request.");
});

server.listen(3100, ()=>{
    console.log(`Listening on localhost:3100`);
})