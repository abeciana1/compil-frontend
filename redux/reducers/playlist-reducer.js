import {
    GET_PLAYLIST,
    IMPORT_YOUTUBE,
    DELETE_SONG
} from '../actions/playlist-actions'


const initialState = {
    playlist: null,
    songs: null,
    importYouTubeItems: null
}

const playlistReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_PLAYLIST:
            return {
                ...state,
                playlist: action.payload,
                // songs: action.payload.songs
            }
        case IMPORT_YOUTUBE:
            return {
                ...state,
                importYouTubeItems: action.payload
            }
        case DELETE_SONG:
            return state
        default:
            return state
    }
}

export default playlistReducer