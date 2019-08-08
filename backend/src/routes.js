const express = require("express");
const DevController = require("./controller/DevController");

const routes = express.Router();

routes.post("/devs", DevController.store);

module.exports = routes;
