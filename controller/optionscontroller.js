const mongoose = require("mongoose");
const Questions = require("../models/questionsmodels");
const Options = require("../models/optionsmodels");

//Create an Option
module.exports.createOptions = async (req, res) => {
  try {
    const question = await Questions.findById(req.params.id);

    //Check whether the Question is present or not
    if (!question) {
      res.status(400).json({
        message: "Option can not be created",
      });
    } else {
      // if Question is present then create option with text and has default value of votes as 0
      const option = await Options.create({
        text: req.body.text,
      });
      //Dynamically Entering link to Add Vote to the option
      option.link_to_votes = `http://localhost:7000/option/${option.id}/add_vote`;
      //save option collection
      option.save();
      //   Add option _id to the Question collection
      question.options.push(option.id);
      //Save Question collection
      question.save();
      res.status(200).json({
        option,
        data: {
          message: "Options Created Successfully",
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "There is some server error hence Option can not be created",
      error: err.message,
    });
  }
};

//Update the vote count for an Option
module.exports.increaseVotes = async (req, res) => {
  try {
    const option = await Options.findById(req.params.id);
    if (option) {
      //add vote count by 1 everytime Get Request is made to the link
      option.votes = option.votes + 1;
      await option.save();
      return res.status(200).json({
        message: "vote is added to the Option Successfully",
      });
    } else {
      return res.status(400).json({
        message: "vote can not be added to the option",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "There is some Internal Error while trying to vote",
      error: err.message,
    });
  }
};
//Delete the Option from the question
module.exports.deleteOptions = async function (req, res) {
  try {
    const id = req.params.id;

    const option = await Options.findById(id);
    //check if option has any vote in it or not
    if (option.votes > 0) {
      return res.status(400).json({
        message: "You cannot delete this vote as there are votes in it",
      });
    }
    //update the Question collection
    await Questions.updateOne(
      { options: { $in: id } }, //update only that collection where params id exist in options field
      { $pull: { options: { $eq: id } } } //remove the option field where the id matches
    );

    await option.remove(); //remove the particular option from the Option collection

    return res.status(200).json({
      message: "option deleted succesfully as there were no votes",
    });
  } catch (err) {
    return res.status(404).json({
      message:
        "There is some server error that occured while trying to delete the option",
      error: err.message,
    });
  }
};
