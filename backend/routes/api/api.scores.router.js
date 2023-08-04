const router = require("express").Router();
const { User, Question } = require("../../db/models");

router.put("/", async (req, res) => {
  const { score } = req.body;
  const UserScoreUpd = await User.update(
    {
      score,
    },
    {
      where: { id: req.session.userId },
    }
  );
  if (UserScoreUpd[0]) {
    res.json({ score });
  } else {
    res.json({ message: "беда" });
  }
});

module.exports = router;
