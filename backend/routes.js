const express = require("express");

const router = express.Router();
const controllerOne = require("./controllers/controllerOne");

router.get("/", controllerOne);

module.exports = router;
