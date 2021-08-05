import React, { useState, useEffect } from 'react';
import PageMargin from '../../../components/utils/PageMargin'

import { scrapePlaylist } from "youtube-playlist-scraper";


//! https://www.youtube.com/playlist?list=PLAcSBHqyx4G3mjMwU-Xd1m_MsAHcaxHGi

// import { useRouter } from 'next/router'

// const grabYouTube = () => {
//     fetch("https://www.youtube.com/playlist?list=PLAcSBHqyx4G3mjMwU-Xd1m_MsAHcaxHGi")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// }


const PlaylistShowPage = ({playlist}) => {

    const [user, setUser] = useState(null)

    const [songs, setSongs] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3001/api/v1/users/" + playlist.user_id)
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })

        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json',
        //     },
        //     // body: JSON.stringify(jsObject)
        // }
    }, [])

    //! created_at: "2021-06-15T02:08:11.586Z"
    //! description: "Street ethical wes anderson whatever polaroid gluten-free banh mi neutra muggle magic."
    //! id: 1
    //! image: "https://static01.nyt.com/images/2019/11/13/obituaries/11Freeman3/merlin_164214771_c6e96bd0-0579-49ea-82ff-a1962f393153-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
    //! private: false
    //! songs: (2) [{…}, {…}]
    //! status: "draft"
    //! title: "Playlist1"
    //! updated_at: "2021-06-15T02:08:11.586Z"
    //! user_id: 1

    console.log(songs)

    return (
        <React.Fragment>
            <div>
                <img
                src={playlist.image}
                alt={playlist.title + " - Banner Photo"}
                className="w-screen max-h-72 filter blur-3xl"
                />
            </div>
            <PageMargin>
                <section className="relative bottom-32 mx-auto lg:ml-5 xl:ml-10 2xl:ml-16 grid grid-cols-1 md:grid-cols-2 place-content-center">
                    <div className="w-full md:w-10/12 lg:w-7/12">
                        <p className="text-white -mt-32 pb-10 text-5xl block sm:hidden">{playlist.title}</p> 
                        <img
                            src={playlist.image}
                            alt={playlist.title}
                        />
                    </div>
                    <div className="place-self-center xl:justify-self-start xl:-ml-32 2xl:-ml-96">
                        <p className="pt-2 text-black text-5xl hidden sm:block">{playlist.title}</p> 
                        <p className="pt-2 text-black text-xl">{playlist.description}</p>
                        {user ?
                            <p className="pt-2 text-black text-xl">Created by {user.f_name.charAt(0).toUpperCase() + user.f_name.substr(1).toLowerCase()} {user.l_name.charAt(0).toUpperCase() + user.l_name.substr(1).toLowerCase()} | {playlist.songs.length} {playlist.songs.length > 1 ? "songs" : "song"}</p>
                        : null}
                    </div>
                </section>
                <section className="lg:ml-5 xl:ml-10 2xl:ml-16">

                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export async function getStaticPaths() {

    const res = await fetch("http://localhost:3001/api/v1/playlists/")

    const playlists = await res.json()

    const playlistIds = playlists.map((playlist) => playlist.id)

    const params = playlistIds.map((pid) => ({params: {id: pid.toString()}}))

    return {
        paths: params,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:3001/api/v1/playlists/${params.id}`)
    
    const playlist = await res.json()

    return {
        props: {
            playlist: playlist,
        }
    }
}


export default PlaylistShowPage