import {
    GET_SONG,
    GET_DETAILS
} from '../actions/song-actions'


const initialState = {
    currentSong: null,
    currentSongDetails: null
}

const songReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_SONG:
            return {
                currentSong: action.payload
            }
        case GET_DETAILS:
            return {
                ...state,
                currentSongDetails: action.payload
            }
        default:
            return state 
    }
}

export default songReducer