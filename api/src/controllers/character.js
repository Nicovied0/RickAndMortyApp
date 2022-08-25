const axios = require('axios')
const { Character, Episode } = require('../db')


const getApiCharacters = async () => {
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
  })
}




module.exports = {
  getApiCharacters,
}