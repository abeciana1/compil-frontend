import {
    GET_PLAYLIST,
    IMPORT_YOUTUBE,
    FIND_ADD_SONG
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
        case FIND_ADD_SONG:
            return {
                ...state,
                song: [...state.songs, action.payload]
            }
        default:
            return state
    }
}

export default playlistReducer