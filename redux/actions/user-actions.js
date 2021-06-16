// import { jwtSet } from '../../pages/api/auth'

export const SIGNUP_USER = "SIGNUP_USER"
export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const UPDATE_USER = "UPDATE_USER"
export const CHECK_USER_LOGGED_IN = "CHECK_USER_LOGGED_IN"

//TODO add validation if email or password is incorrect

const BASE_URL = "http://localhost:3001/api/v1"

export const signupUser = (user) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            user
        })
        }
        return (dispatch) => {
            fetch(BASE_URL + "/users", options)
            .then(response => response.json())
            .then(data => {
                consol.log(data)
                // dispatch({
                //     type: SIGNUP_USER,

                // })
            })
        }
}

export const loginUser = (user) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            user: {
            email: user.email,
            password: user.password}
        })
    }

    return (dispatch) => {
        fetch(BASE_URL + "/login", options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem("compilLogged", true)
            dispatch({
                type: LOGIN_USER,
                payload: data.user
            })
        })
    }
}

export const checkUser = () => {
    const options = {
        method: 'GET',
        credentials: 'include',
    }
    return (dispatch) => {
        fetch(BASE_URL + "/session-renew", options)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: CHECK_USER_LOGGED_IN,
                payload: data.user
            })
        })
    }
}

export const logoutUser = () => {
    localStorage.clear()
    return (dispatch) => {
        dispatch({
            type: LOGOUT_USER,
            payload: null
        })
    }
}