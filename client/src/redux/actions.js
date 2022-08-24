import axios from 'axios'
export const GET_CHARACTER = 'GET_CHARACTER'
export const POST_CHARACTER = 'POST_CHARACTER'
export const GET_EPISODES = 'GET_EPISODES'

export const getCharacter = () =>{
    return async (dispatch) =>{
        const json = await axios('http:localhost:3001/characters')
        return dispatch({
            type: GET_CHARACTER,
            payload: json.data
        })
    }
}