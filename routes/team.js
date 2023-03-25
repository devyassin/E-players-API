const express = require("express");
const Router = express.Router();

const { createTeam, getAllTeams } = require("../controllers/team");

Router.route("/").post(createTeam).get(getAllTeams);

module.exports = Router;
