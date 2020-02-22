const express = require("express");

const router = express.Router();
const controllerOne = require("./controllers/controllerOne");
const controllerTwo = require("./controllers/controllertwo");

router.get("/", controllerOne);
router.get("/cool", controllerTwo);

module.exports = router;
