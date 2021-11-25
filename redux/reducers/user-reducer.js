import {
    SIGNUP_USER,
    LOGIN_USER,
    LOGOUT_USER,
    UPDATE_USER,
    CHECK_USER_LOGGED_IN,
    CHECK_EMAIL
} from '../actions/user-actions'

// import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    // currentUser: "",
    currentUser: null,
    email: null
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
                ...state,
                currentUser: action.payload
            }
        case SIGNUP_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case CHECK_USER_LOGGED_IN:
            return {
                ...state,
                currentUser: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                currentUser: null
            }
        case CHECK_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        default:
            return state
    }
}

export default usersReducer