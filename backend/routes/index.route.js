const router = require("express").Router();
const apiAuthRout = require("./api/api.auth.router");
const apiCardsRouter = require("./api/api.card.router");

router.use("/api/auth", apiAuthRout);
router.use("/api/cards", apiCardsRouter);

module.exports = router;
