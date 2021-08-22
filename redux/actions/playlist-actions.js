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
            dispatch({
                type: GET_PLAYLIST,
                payload: data,
            })
        })
    }
}

export const importYouTube = (youtubePlaylistId) => {

    // console.log(youtubePlaylistId)

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Accept': 'application/json',
        },
        body: JSON.stringify({
            youtube: youtubePlaylistId
        })
    }

    return (dispatch) => {
        fetch(BASE_URL + '/youtube-import', options)
        .then(res => res.json())
            .then(data => {
                
            dispatch({
                type: IMPORT_YOUTUBE,
                payload: data,
            })
        })
    }
}

export const findAddSong = (track, playlistId) => {
    console.log("track", track)
    console.log("playlistId", playlistId)
}

// {
//     "kind": "youtube#playlistItem",
//     "etag": "zIz7uHD4gBFsyUkf08EWl1_l40o",
//     "id": "UExBY1NCSHF5eDRHM21qTXdVLVhkMW1fTXNBSGNheEhHaS41NkI0NEY2RDEwNTU3Q0M2",
//     "snippet": {
//         "publishedAt": "2021-08-04T04:01:47Z",
//         "channelId": "UCfHk9KnksAGUWtR7q5NqSWw",
//         "title": "Dry Cleaning - Scratchcard Lanyard (Official Video)",
//         "description": "’Scratchcard Lanyard’ by Dry Cleaning. Out now on 4AD. \n\nBuy and stream here: https://drycleaning.ffm.to/scratchcardlanyard\nSubscribe to the band's YouTube channel here: https://www.youtube.com/channel/UCYAb_yLdag6D098es0-agwg/?sub_confirmation=1\n[ Watch Dry Cleaning's full KEXP session here: https://www.youtube.com/watch?v=rLppqLxALfQ ] \n[ Watch the live performance of 'Scratchcard Lanyard' here: https://youtu.be/zyjuJ6jLsxA ]\n\nDirected by Rottingdean Bazaar\n\nSet by Rottingdean Bazaar\nDirector of Photography: Rik Burnell\n1st AC: Matt Hillier\n2nd AC: Josh Higgins\nEditor: Adam Jones\nColourist: Jason Wallis \nProduction: Candy Artists\n\nRottingdean Bazaar Online\nInstagram: @rottingdeanbazaar",
//         "thumbnails": {
//             "default": {
//                 "url": "https://i.ytimg.com/vi/6PuqlOTyJt0/default.jpg",
//                 "width": 120,
//                 "height": 90
//             },
//             "medium": {
//                 "url": "https://i.ytimg.com/vi/6PuqlOTyJt0/mqdefault.jpg",
//                 "width": 320,
//                 "height": 180
//             },
//             "high": {
//                 "url": "https://i.ytimg.com/vi/6PuqlOTyJt0/hqdefault.jpg",
//                 "width": 480,
//                 "height": 360
//             },
//             "standard": {
//                 "url": "https://i.ytimg.com/vi/6PuqlOTyJt0/sddefault.jpg",
//                 "width": 640,
//                 "height": 480
//             },
//             "maxres": {
//                 "url": "https://i.ytimg.com/vi/6PuqlOTyJt0/maxresdefault.jpg",
//                 "width": 1280,
//                 "height": 720
//             }
//         },
//         "channelTitle": "Alex Beciana",
//         "playlistId": "PLAcSBHqyx4G3mjMwU-Xd1m_MsAHcaxHGi",
//         "position": 0,
//         "resourceId": {
//             "kind": "youtube#video",
//             "videoId": "6PuqlOTyJt0"
//         },
//         "videoOwnerChannelTitle": "4AD",
//         "videoOwnerChannelId": "UC-T3JrzHtDeHAmspt1Zn40A"
//     },
//     "contentDetails": {
//         "videoId": "6PuqlOTyJt0",
//         "videoPublishedAt": "2020-11-19T10:00:01Z"
//     }
// }


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