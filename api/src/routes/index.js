const { Router } = require("express");
const characterRoute = require('./character');
const episodeRoute = require('./episode')
const characterIdRoute = require('./characterId')

const router = Router();

// Configurar los routers
router.use('/characterId/', characterIdRoute)
router.use('/character', characterRoute)
router.use('/episode', episodeRoute)

module.exports = router;
