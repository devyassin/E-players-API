const Player = require("../models/Player");


const createPlayer = async (req, res) => {
  const player = await Player.create(req.body);
  res.status(200).json({ player });
};

module.exports = createPlayer;
