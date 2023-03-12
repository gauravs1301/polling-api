const Questions = require("../models/questionsmodels");

const Options = require("../models/optionsmodels");

//Create Question
module.exports.createQuestions = async (req, res) => {
  try {
    const question = await new Questions({ title: req.body.title });
    question.save();

    if (question) {
      return res.status(200).json({
        question,
        data: {
          message: "Question Created Successfully",
        },
      });
    } else {
      return res.status(500).json({
        message: "Question cannot be created",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Sorry,The Question cannot be created!",
      error: err.message,
    });
  }
};
// View Question
module.exports.getQuestions = async (req, res) => {
  try {
    //populating question with path options so as to view all fields of collection Options in Questions
    const question = await Questions.findById(req.params.id).populate({
      path: "options",
    });
    if (question) {
      return res.status(200).json({
        question,
      });
    } else {
      return res.status(400).json({
        message: "Such Question does not exist",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "There is some internal error hence question can not be fetched",
      error: err.message,
    });
  }
};
//Delete Question
module.exports.deleteQuestion = async function (req, res) {
  try {
    const question = await Questions.findById(req.params.id);

    //Check each option of the question for the votes
    for (let id of question.options) {
      let option = await Options.findById(id);

      //check if votes that are in Option collection has value greater than 0 or not
      if (option.votes > 0) {
        return res.status(400).json({
          message: "Question can not be deleted as Vote is there",
        });
      }

      //Remove option that has 0 votes from the option collection
      await option.remove();
    }

    //remove question from the question collection
    await question.remove();

    return res.status(200).json({
      message: "Question deleted succesfully",
    });
  } catch (err) {
    res.status(404).json({
      message: "There is some internal error hence question can not be deleted",
      error: err.message,
    });
  }
};
