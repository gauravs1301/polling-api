const express = require("express");
const router = express.Router();
const questionscontroller = require("../controller/questionscontroller");
const optionscontroller = require("../controller/optionscontroller");

//Add a Question to the database
router.post("/question/create", questionscontroller.createQuestions);

//Get a particular Question from the database
router.get("/question/:id", questionscontroller.getQuestions);

//Delete a particular Question if it options has no votes
router.delete("/question/:id/delete", questionscontroller.deleteQuestion);

//Create options for a particular question
router.post("/questions/:id/options/create", optionscontroller.createOptions);

//Deleting an option of a particular question if it has no vote
router.delete("/option/:id/delete", optionscontroller.deleteOptions);

// //Update the Vote Count for an option
router.get("/option/:id/add_vote", optionscontroller.increaseVotes);

module.exports = router;
