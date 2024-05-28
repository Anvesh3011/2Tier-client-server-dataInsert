var mongoose = require("mongoose");
var PlayerSchema = require("./schema");
var Player = mongoose.model("Player", PlayerSchema);

async function dataToDB() {
  let cummins = new Player({
    name: "Pat Cummins",
    age: 27,
    team: "Australia",
  });
  let bumrah = new Player({
    name: "Jasprit Bumrah",
    age: 25,
    team: "India",
  });
  let root = new Player({
    name: "Joe Root",
    age: 29,
    team: "England",
  });
  let stokes = new Player({
    name: "Ben Stokes",
    age: 29,
    team: "England",
  });
  let smith = new Player({
    name: "Steve Smith",
    age: 31,
    team: "Australia",
  });

  try {
    await Player.insertMany([cummins, bumrah, root, stokes, smith]);
    console.log("Data inserted successfully");
  } catch (e) {
    console.log("Error inserting data");
  }
}

module.exports = dataToDB;
