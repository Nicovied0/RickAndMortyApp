const {getAllInfo} = require("../controllers/character");
const {Character, Episode} = require("../db")

const characterID = async (id) => {
  const charactertotal = await getAllInfo();
  const filtercharacter = charactertotal.find((e) => e.id == id);
  if (!filtercharacter) {
    return "no se encontro ningun id";
  }
  return filtercharacter;
};

module.exports = {characterID};