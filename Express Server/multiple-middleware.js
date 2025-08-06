import express from "express";

const server = express();

function firstMiddleware(req, res, next) {
  console.log("First middleware hit.");
  next();
}

function secondMidlleware(req, res, next) {
  console.log("Second middleware hit.");
  next();
}

function globalMiddleware(req, res, next) {
  console.log("This is the Application-level Middleware.");
  next();
}

// This is going to be executed for all requests
server.use(globalMiddleware);

// This is going to be executed for the /send path only
server.get("/send", [firstMiddleware, secondMidlleware], (req, res) => {
  res.send("Welcome to Express server");
});

server.listen(3200, () => console.log(`Listening on localhost:3200`));
