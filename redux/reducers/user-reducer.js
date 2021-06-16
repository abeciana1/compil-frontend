import {
    SIGNUP_USER,
    LOGIN_USER,
    LOGOUT_USER,
    UPDATE_USER,
    CHECK_USER_LOGGED_IN,
    TEST_USER
} from '../actions/user-actions'

// import { HYDRATE } from 'next-redux-wrapper'


const initialState = {
    // currentUser: "",
    currentUser: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        // case HYDRATE:
        //     return {
        //         // ...state,
        //         ...action.payload
        //     }
        case LOGIN_USER:
            return {
                currentUser: action.payload
            }
        case SIGNUP_USER:
            return {
                currentUser: action.payload
            }
        case CHECK_USER_LOGGED_IN:
            return {
                currentUser: action.payload
            }
        case LOGOUT_USER:
            return {
                currentUser: null
            }
        default:
            return state
    }
}

export default usersReducer