const express = require('express');
const router = express.Router();
const {Character, Episode} = require("../db");
const {getAllInfo} = require('../controllers/character')

router.get('/', async( req, res, next)=>{

  const allCharacters = await getAllInfo()
  allCharacters? 
  res.status(200).send(allCharacters):
  res.status(400).send('Error get /character')
});

module.exports = router