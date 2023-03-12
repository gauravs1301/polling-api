const mongoose = require("mongoose");

//Creating Schema for Options
const optionSchema = mongoose.Schema({
  text: {
    type: String,
  },
  votes: {
    type: Number,
    default: 0,
  },
  link_to_votes: {
    type: String,
  },
});

// Creating Options Model from the Schema
const Options = mongoose.model("Options", optionSchema);

module.exports = Options;
