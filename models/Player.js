const mongoose = require("mongoose");
const StatsSchema = require("./Stats");
const PlayerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
    maxlength: 100,
  },
  role: {
    type: String,
    required: [true, "please provide a role"],
    enum: ["midfield", "forward", "defender", "goalkeeper"],
    maxlength: 100,
  },
  biography: {
    type: String,
    required: [true, "please provide a biography"],
  },
  picture: {
    type: String,
    required: [true, "please provide a Url picture"],
  },
  stats: StatsSchema,
});

module.exports = PlayerSchema;
