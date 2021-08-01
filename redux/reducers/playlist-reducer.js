import {
    GET_LOG_USER_PLAYLIST,
    CREATE_PLAYLIST
} from '../actions/playlist-actions'


const initialState = {
    playlists: null
}

const playlistReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_LOG_USER_PLAYLIST:
            return {
                ...state,
                playlists: action.payload
            }
        // case CREATE_PLAYLIST:
        //     return {
        //         ...state,
        //         playlists: [...state.playlists, action.payload]
        //     }
        default:
            return state
    }
}

export default playlistReducer