const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/HomeController");
const contactController = require("./src/controllers/ContactController");

route.get("/", homeController.homepage);
route.get("/contact", contactController.contactPage);

module.exports = route;
