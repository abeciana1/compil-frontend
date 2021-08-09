// export const GET_LOG_USER_PLAYLIST = "GET_LOG_USER_PLAYLIST"
// export const CREATE_PLAYLIST = "CREATE_PLAYLIST"
export const GET_PLAYLIST = "GET_PLAYLIST"
export const IMPORT_YOUTUBE = "IMPORT_YOUTUBE"

const BASE_URL = "http://localhost:3001/api/v1"

export const getPlaylist = (playlistId) => {

    return (dispatch) => {
        fetch(BASE_URL + "/playlists/" + playlistId)
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
            dispatch({
                type: GET_PLAYLIST,
                payload: data,
            })
        })
    }
}

export const importYouTube = (youtubePlaylistId) => {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            youtube: youtubePlaylistId
        })
    }

    return (dispatch) => {
        fetch(BASE_URL + '/get-youtube-songs', options)
        .then(res => res.json())
        .then(data => {
            console.log("data",data)

            dispatch({
                type: IMPORT_YOUTUBE,
                // payload: data,
            })
        })
    }
}


// export const createPlaylist = (playlist) => {

//     console.log(playlist)
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify(playlist)
//     }
//     return (dispatch) => {
//         fetch(BASE_URL + "/playlists", options)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             dispatch({
//                 type: CREATE_PLAYLIST,
//             })
//         })
//     }
// }