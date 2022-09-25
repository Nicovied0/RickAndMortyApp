import { GET_CHARACTER, GET_DETAILS } from '../actions/actions'


const initialState = {
  characters: [],
  details: []
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
   
    default:
      return state
  }
}

export default rootReducer;