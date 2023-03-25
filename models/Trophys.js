const mongoose = require("mongoose");
const TrophySchema = require("./Trophy");

const TrophysSchema = mongoose.Schema({
  ChampionsLeague: {
    type: TrophySchema,
  },
  EuropienLeague: {
    type: TrophySchema,
  },
  FifaClubWorldCup: {
    type: TrophySchema,
  },
  SpanishCup: {
    type: TrophySchema,
  },
  UEAFcup: {
    type: TrophySchema,
  },
});

module.exports = TrophysSchema;
