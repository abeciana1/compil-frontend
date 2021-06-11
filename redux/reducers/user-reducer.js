import {
    SIGNUP_USER,
    LOGIN_USER,
    LOGOUT_USER,
    UPDATE_USER,
    CHECK_USER_LOGGED_IN
} from '../actions/user-actions'


const initialState = {
    currentUser = null
}

const usersReducer = (state = initialState, action) => {
    console.log("state", state)
    console.log("action", action)
    switch (action.type) {
        case LOGIN_USER:
            currentUser = action.payload
            break;
    
        default:
            return state
    }
}

export default usersReducer