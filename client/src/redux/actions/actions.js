import axios from 'axios';
export const GET_CHARACTER = 'GET_CHARACTER';
export const GET_DETAILS = 'GET_DETAILS';
// export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";


export const getCharacters = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/character/")
    return dispatch({
      type: GET_CHARACTER,
      payload: res.data
    })
  }
}

export function getDetails(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/character/${id}`);
      return dispatch({
        type: GET_DETAILS,
        payload: res.data
      });

    } catch {
      console.log('error en get detils')
    }

  };
};

