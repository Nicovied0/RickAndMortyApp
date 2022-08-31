import axios from 'axios';
export const GET_CHARACTER = 'GET_CHARACTER'


export const getCharacters = () => {
  return async (dispatch) =>{
    const json = await axios.get("http://localhost:3001/character/")
      return dispatch({
        type: GET_CHARACTER,
        payload: json.data
      })
  }
}