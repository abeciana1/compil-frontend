import {combineReducers} from 'redux'

import user from './user-reducer'
import playlist from './playlist-reducer'
// import song from './song-reducer'

export default combineReducers ({
    user,
    playlist,
    // song
})