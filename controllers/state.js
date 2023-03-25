const Stats = require("../models/Stats");

const createStats = async (req, res) => {
  const stats = await Stats.create(req.body);
  res.status(200).json({ stats });
};

module.exports = createStats;
