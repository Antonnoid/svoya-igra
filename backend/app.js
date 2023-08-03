require("dotenv").config();
require("@babel/register");

const express = require("express");
const serverConfig = require("./config/serverConfig");
const indexRoute = require("./routes/index.route");

const app = express();

const { PORT } = process.env;

serverConfig(app);

app.use("/", indexRoute);

app.listen(PORT, () => console.log(`наш сервер вкалывает на ${PORT}  порту`));
