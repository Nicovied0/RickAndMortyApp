const express = require("express");
const characters = require("./characters.js");
const episodes = require("./episodes.js");
const router = express.Router();

// Configurar los routers
router.use("/characters", characters);
router.use("/episodes", episodes);
module.exports = router;