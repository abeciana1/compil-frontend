  
import {
    GET_SONGS,
    IMPORT_YOUTUBE,
    DELETE_SONG,
    GET_POWER_HOUR
} from '../actions/playlist-actions'


const initialState = {
    playlist: null,
    songs: null,
    importYouTubeItems: null
}

const playlistReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_SONGS:
            return {
                ...state,
                songs: action.payload
            }
        case IMPORT_YOUTUBE:
            return {
                ...state,
                songs: action.payload
            }
        case DELETE_SONG:
            let foundSong = state.songs.find((song) => song.id === parseInt(action.payload))
            state.songs.splice(state.songs.indexOf(foundSong), 1)
            return {
                ...state,
                songs: state.songs
            }
        case GET_POWER_HOUR:
            return {
                ...state,
                playlist: action.payload,
                songs: action.payload.songs
            }
        default:
            return state
    }
}

export default playlistReducer