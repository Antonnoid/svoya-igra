const express = require("express");

const router = express.Router();

const { Theme, Question } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: [
        {
          model: Theme,
        },
      ],
    });
    res.json(questions);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
