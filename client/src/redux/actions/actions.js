import axios from 'axios';
export const GET_CHARACTER = 'GET_CHARACTER';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_BY_NAME = 'GET_BY_NAME';
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

export function getByName(payload) {
  return async function (dispatch) {//Dispatch que podemos usar gracias a la asincronia provista por el middleware 
      try {
          var json = await axios.get(`http://localhost:3001/character?name=${payload}`) //axios.get(`${urlMyApi}/dogs?name=${payload}`)
          return dispatch({
              type: GET_BY_NAME,
              payload: json.data
          })
      } catch (error) {
          console.log(error);
      }
  }
};
