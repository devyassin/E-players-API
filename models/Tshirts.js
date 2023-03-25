const mongoose = require("mongoose");

const TshirtsSchema = mongoose.Schema({
  Tshirt1: {
    type: String,
  },
  Tshirt2: {
    type: String,
  },
  Tshirt3: {
    type: String,
  },
});

module.exports = TshirtsSchema;
