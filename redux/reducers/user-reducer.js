import {
    SIGNUP_USER,
    LOGIN_USER,
    LOGOUT_USER,
    UPDATE_USER,
    CHECK_USER_LOGGED_IN,
    TEST_USER
} from '../actions/user-actions'

import { HYDRATE } from 'next-redux-wrapper'


const initialState = {
    // currentUser: "",
    currentUser: null
}

const usersReducer = (state = initialState, action) => {
    // console.log("state", state)
    // console.log("action", action.payload)
    switch (action.type) {
        // case HYDRATE:
        //     return {
        //         // ...state,
        //         ...action.payload
        //     }
        case LOGIN_USER:
            return {
                // ...state,
                currentUser: action.payload
            }
            // return action.payload
        default:
            return state
    }
}

export default usersReducer