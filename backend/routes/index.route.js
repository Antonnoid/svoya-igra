const router = require("express").Router();
const apiAuthRout = require("./api/api.auth.router");
const apiCardsRouter = require("./api/api.card.router");
const apiScoresRout = require("./api/api.scores.router");

router.use("/api/auth", apiAuthRout);
router.use("/api/questions", apiCardsRouter);
router.use("/api/scores", apiScoresRout);

module.exports = router;
