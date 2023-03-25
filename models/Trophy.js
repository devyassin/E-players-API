const mongoose = require("mongoose");

const TrophySchema = mongoose.Schema({
  picture: {
    type: String,
  },
  number: {
    type: String,
  },
});

module.exports = TrophySchema;
