var express = require("express");
var connectToDB = require("./db/connect");

var app = express();
var port = 3001;
function start() {
  let connection =
    "mongodb+srv://anvesh:1130@cluster0.eb87jva.mongodb.net/playersData?retryWrites=true&w=majority&appName=Cluster0";
  connectToDB(connection);
  app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
  });
}

start();
