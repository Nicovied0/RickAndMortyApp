import axios from 'axios';
export const GET_CHARACTER = 'GET_CHARACTER';
export const DETAILS = "DETAILS";


export const getCharacters = () => {
  return async (dispatch) => {
    const json = await axios.get("http://localhost:3001/character/")
    return dispatch({
      type: GET_CHARACTER,
      payload: json.data
    })
  }
}
export const getDetails = (id) =>{
  return async function (dispatch) {
    const res = await axios.get(`http://localhost:3001/character/${id}`);
    return dispatch({
      type: DETAILS,
      payload: res.data
    });

  };
};
