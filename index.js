const express = require("express");
const cors = require("cors");
const jsonServer = require("json-server");
require("dotenv").config();

const server = jsonServer.create();
const router = jsonServer.router("projects.json");
const middlewares = jsonServer.defaults();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONT,
    optionsSuccessStatus: 200,
  })
);
app.use(middlewares);
app.use(router);

app.listen(process.env.PORT || 5000, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});

module.exports = app;
