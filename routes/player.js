const express = require("express");
const Router = express.Router();

const createPlayer = require("../controllers/player");

Router.route("/").post(createPlayer);

module.exports = Router;