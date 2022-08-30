import { GET_CHARACTER } from '../actions/actions'

const initialState = {
   characters : []
};

function rootReducer(state = initialState, action) {
  switch(action.type){
    case GET_CHARACTER:
      return {
        ...state,
        characters:action.payload
      }
      default:
        return state
  } 
}

export default rootReducer;