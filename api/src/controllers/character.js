const axios = require('axios')
const { Character, Episode } = require('../db')


const getApiCharacters = async () => {
  try {
    const allCharacter = []
    let apiUrl = 'https://rickandmortyapi.com/api/character'

    for(let i = 0; i <= 1; i++){
      let apiData = await axios(apiUrl)
      
    }

  } catch {
    console.log('Error get api')
  }


}