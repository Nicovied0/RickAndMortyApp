const axios = require('axios')
const { Character, Episode } = require('../db')


const getApiCharacter = async () => {
  try {
    const allCharacter = []
    let apiUrl = 'https://rickandmortyapi.com/api/character'

    for (let i = 0; i <= 1; i++) {
      let apiData = await axios(apiUrl)

      apiData.data.results?.forEach(e => {
        return allCharacter.push({
          id: e.id,
          name: e.name,
          species: e.species,
          origin: e.origin.name,
          image: e.image,
          characterApi: true,
        });
      });
      apiUrl = apiData.data.info.next
    }
    return allCharacter
  } catch {
    console.log('Error get api')
  }
}

const getDbCharacter = async () => {
  return await Character.findAll({
    include: {
      model: Episode,
      attributes: ["name"],
      through: {
        attributes: [],
      }
    }
  });
}

const getAllInfo = async() => {
  try{
    const dbInfo = await getDbCharacter();
    const apiInfo = await getApiCharacters();

    const InfoTotal = dbInfo?.concat(apiInfo)
    return InfoTotal;
  }catch{
    console.log('Error al hacer el llamdo a all Info')
  }
}



module.exports = {
  getApiCharacter,
  getDbCharacter,
  getAllInfo
}