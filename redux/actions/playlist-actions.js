export const GET_LOG_USER_PLAYLIST = "GET_LOG_USER_PLAYLIST"
export const CREATE_PLAYLIST = "CREATE_PLAYLIST"

const BASE_URL = "http://localhost:3001/api/v1"


export const createPlaylist = (playlist) => {

    console.log(playlist)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(playlist)
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