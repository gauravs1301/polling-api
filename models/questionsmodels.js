const mongoose = require("mongoose");
const Options = require("./optionsmodels");

//creating Schema for Questions
const questionSchema = mongoose.Schema({
  title: {
    type: String,
  },

  options: [
    {
      type: mongoose.Schema.ObjectId, //Reference to the Options Schema
      ref: "Options",
    },
  ],
});
const Questions = mongoose.model("Questions", questionSchema);
module.exports = Questions;
