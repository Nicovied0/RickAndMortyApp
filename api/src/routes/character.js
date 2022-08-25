const express = require('express');
const router = express.Router();
const {Character, Episode} = require("../db");
const {getAllInfo} = require('../controllers/character')

router.get('/',async(req,res) =>{
  const allCharacters = await getAllInfo()
  allCharacters?
  res.status(200).send(allCharacters):
  res.status(404).send('Error en get /character')
})

module.exports = router