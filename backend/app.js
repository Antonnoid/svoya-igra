require("dotenv").config();
require("@babel/register");

const express = require("express");
const serverConfig = require("./config/serverConfig");
const indexRoute = require("./routes/index.route");
const { sequelize } = require("./db/models");

const app = express();

const { PORT } = process.env;

serverConfig(app);

app.use("/", indexRoute);

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connection BD has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
