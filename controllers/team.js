const Team = require("../models/Team");
const BarcaTeam = require("../Barca");
const RealTeam = require("../Real");

const createTeam = async (req, res) => {
  const team = await Team.create(BarcaTeam);
  res.status(200).json({ BarcaTeam });
};

const getAllTeams = async (req, res) => {
  const Teams = await Team.find();

  if (!Teams) {
    res.status(404).json({ message: "Request failed !" });
  }

  console.log(Teams);
  res.status(200).json({ size: Teams.length, Teams });
};

module.exports = { createTeam, getAllTeams };
