import { GET_CHARACTER, GET_DETAILS, GET_BY_NAME, FILTER_ORIGIN } from '../actions/actions'


const initialState = {
  characters: [],
  details: [],
  filteredCharacters: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        characters: action.payload
      }
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload
      }
    case GET_BY_NAME:
      return {
        ...state,
        characters: action.payload
      }
    case FILTER_ORIGIN:
      const allCharacters = state.characters
      const originFilterCharacters =  action.payload === "created"
      ? allCharacters.filter((character) => character.created) //VIENE POR BASE DE DATOS
      : allCharacters.filter((character) => !character.created); //VIENE DESDE LA API
      return {
        ...state,
        filteredCharacters: action.payload === 'all' ? allCharacters : originFilterCharacters
      };

    default:
      return state
  }
}

export default rootReducer;