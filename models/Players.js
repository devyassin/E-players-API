const mongoose = require("mongoose");
const PlayerSchema = require("./Player");

const PlayersSchema = mongoose.Schema({
  player1: {
    type: PlayerSchema,
  },
  player2: {
    type: PlayerSchema,
  },
  player3: {
    type: PlayerSchema,
  },
  player4: {
    type: PlayerSchema,
  },
  player5: {
    type: PlayerSchema,
  },
  player6: {
    type: PlayerSchema,
  },
  player7: {
    type: PlayerSchema,
  },
  player8: {
    type: PlayerSchema,
  },
  player9: {
    type: PlayerSchema,
  },
  player10: {
    type: PlayerSchema,
  },
  player11: {
    type: PlayerSchema,
  },
});

module.exports = PlayersSchema;
