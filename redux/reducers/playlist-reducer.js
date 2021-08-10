import {
    GET_PLAYLIST,
    IMPORT_YOUTUBE
} from '../actions/playlist-actions'


const initialState = {
    playlist: null,
    songs: null,
    importedYouTubeItems: null
}

const playlistReducer = (state = initialState, action) => {

    console.log(action);

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
                importedYouTubeItems: action.payload
            }
        default:
            return state
    }
}

export default playlistReducer