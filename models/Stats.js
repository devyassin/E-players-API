const mongoose = require("mongoose");

const StatsSchema = mongoose.Schema({
  placeOfBirth: {
    type: String,
    required: [true, "please provide a place of birth"],
    maxlength: 50,
  },
  dateOfBirth: {
    type: String,
    required: [true, "please provide a date of birth"],
    maxlength: 50,
  },
  clubStart: {
    type: String,
    required: [true, "please provide a date of club starting"],
    maxlength: 50,
  },
  weight: {
    type: String,
    required: [true, "please provide a weight"],
    maxlength: 50,
  },
  height: {
    type: String,
    required: [true, "please provide a height"],
    maxlength: 50,
  },
  marketValue: {
    type: String,
    required: [true, "please provide a marketValue"],
    maxlength: 50,
  },
});

module.exports = StatsSchema;
// module.exports = mongoose.model("Stats", StatsSchema);
