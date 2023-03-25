const mongoose = require("mongoose");
const PlayersSchema = require("./Players");
const PlayerSchema = require("./Player");
const TrophySchema = require("./Trophys");
const TshirtsSchema = require("./Tshirts");

const TeamSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: 50,
  },

  logo: {
    type: String,
    required: [true, "Please provide a logo"],
  },
  players: {
    type: [PlayerSchema],
  },
  Trophys: {
    type: TrophySchema,
  },
  Tshirts: {
    type: TshirtsSchema,
  },
});

module.exports = mongoose.model("Team", TeamSchema);
