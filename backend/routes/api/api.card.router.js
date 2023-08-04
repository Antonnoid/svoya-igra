const express = require("express");

const router = express.Router();

const { Theme, Question } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const themes = await Theme.findAll({
      include: [
        {
          model: Question,
        },
      ],
    });
    res.json(themes);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
