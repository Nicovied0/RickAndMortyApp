const { Router } = require("express");
const { getAllEpisodes } = require("../utils/index.js");
const router = Router();

router.get("/", async (req, res) => {
    try {
        const info = await getAllEpisodes();
        res.status(200).send(info)
    } catch (error) {
        console.log("Error", error);
    }
})

module.exports = router;