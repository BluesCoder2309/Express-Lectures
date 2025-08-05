import express from "express";

const server = express();

// Handle request
// 1. Adding middlewares for the same request
// server.get(
//   "/",
//   // First Middleware
//   (req, res, next) => {
//     console.log("This is from the first Middleware");
//     next();    // To make it move to the next middleware
//   },
//   // Second Middleware
//   (req, res) => {
//     res.send("Welcome to Express Server from Utkarsh");
//   }
// );

// 2. Different handlers for same request
server.get("/", (req, res, next) => {
  console.log("First Middleware hit!");
  next();
});

server.get("/", (req, res) => {
  res.send("Welcome to Express Server by Utkarsh.");
});

server.listen(3100, () => console.log("Server running at 3100"));
