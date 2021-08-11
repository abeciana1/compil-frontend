import {
    GET_PLAYLIST,
    IMPORT_YOUTUBE
} from '../actions/playlist-actions'


const initialState = {
    playlist: null,
    songs: null,
    importYouTubeItems: null
}

const playlistReducer = (state = initialState, action) => {

    console.log("reducer", action)

    switch (action.type) {
        case GET_PLAYLIST:
            return {
                ...state,
                playlist: action.payload,
                songs: action.payload.songs
            }
        case IMPORT_YOUTUBE:
            return {
                ...state,
                importYouTubeItems: action.payload
            }
        default:
            return state
    }
}

export default playlistReducer