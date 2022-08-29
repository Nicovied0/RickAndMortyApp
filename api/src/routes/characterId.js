const express = require ('express')
const {getAllInfo} = require ('../controllers/character')

const router = express.Router()

router.get("/:id",async (req, res)=>{
  const id = req.params.id;
  const characterTotal = await getAllInfo()
  if(id){
   let characterId = await characterTotal.filter(e => e.id == id)
   characterId.length?
   res.status(200).send(characterId):
   res.status(404).send('Error en character id')
  }
 })

 module.exports = router