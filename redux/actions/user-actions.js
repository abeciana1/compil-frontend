// import { useRouter } from 'next/router'
// //! import playlist action types
// import { GET_LOG_USER_PLAYLIST } from './playlist-actions'

//! user action types
export const SIGNUP_USER = "SIGNUP_USER"
export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const UPDATE_USER = "UPDATE_USER"
export const CHECK_USER_LOGGED_IN = "CHECK_USER_LOGGED_IN"
export const CHECK_EMAIL = "CHECK_EMAIL"
export const CREATE_PLAYLIST = "CREATE_PLAYLIST"

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
                localStorage.setItem("compilLogged", true)
                dispatch({
                    type: SIGNUP_USER,
                    payload: data.user
                })
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
                payload: data.user,
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

export const checkEmail = (userEmail) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            user: {
            email: userEmail
        }})
    }

    return (dispatch) => {
        fetch(BASE_URL + "/check-email", options)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: CHECK_EMAIL,
                payload: data.user.email
            })
        })
    }
}

export const createPlaylist = (playlist) => {

    console.log(playlist)
    let formData = new FormData()
    formData.append('playlist[title]', playlist.title)
    formData.append('playlist[status]', playlist.status)
    formData.append('playlist[private]', playlist.private)
    formData.append('playlist[description]', playlist.description)
    formData.append('playlist[pic]', playlist.pic)
    formData.append('playlist[user_id]', playlist.user_id)

    //! description: "adg"
    //! pic: File {name: "Beatles_-_Abbey_Road.jpg", lastModified: 1627855252028, lastModifiedDate: Sun Aug 01 2021 18:00:52 GMT-0400 (Eastern Daylight Time), webkitRelativePath: "", size: 89688, …}
    //! private: false
    //! status: "Unpublished"
    //! title: "dsafg"

    const options = {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        // body: JSON.stringify(playlist)
        body: formData
    }
    return (dispatch) => {
        fetch(BASE_URL + "/playlists", options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch({
                type: CREATE_PLAYLIST,
            })
        })
    }
}