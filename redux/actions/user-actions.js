export const SIGNUP_USER = "SIGNUP_USER"
export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const UPDATE_USER = "UPDATE_USER"
export const CHECK_USER_LOGGED_IN = "CHECK_USER_LOGGED_IN"
export const TEST_USER = "TEST_USER"


export const loginUser = () => {
    console.log("LOGGING IN USER FROM USER REDUX ACTION")

    return (dispatch) => {
        dispatch({
            type: TEST_USER,
            payload: true
        })
    }
}