const axios = requiere('axios');
const {Character, Episode} = require('../db')

const getApiCharacters = async()=>{
    try{
        await axios('')
    }catch(error){
        console.log('Error en get api',error)
    }
}





module.exports = {
    getApiCharacters,
}