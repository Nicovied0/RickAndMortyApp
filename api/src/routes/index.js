const { Router } = require("express");
const characterRoute = require('./character');
const episodeRoute = require('./episode')

const router = Router();

// Configurar los routers
router.use('/character', characterRoute)
router.use('/episode',episodeRoute)

module.exports = router;
