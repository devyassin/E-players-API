const express = require("express");
const Router = express.Router();

const createStats = require("../controllers/state");

Router.route("/").post(createStats);

module.exports = Router;
