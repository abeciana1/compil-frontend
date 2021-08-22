import React, { useState, useEffect } from 'react';
import PageMargin from '../../../components/utils/PageMargin'
import YouTubePlaylistUpload from '../../../components/forms/YouTubePlaylistUpload'
import { useRouter } from 'next/router'
// import { connect } from 'react-redux'

import PendingTrackListing from '../../../components/containers/PendingTrackListing'
import TrackListing from '../../../components/containers/TrackListing'

// import { getPlaylist } from '../../../redux/actions/playlist-actions'


//! https://www.youtube.com/playlist?list=PLAcSBHqyx4G3mjMwU-Xd1m_MsAHcaxHGi

const PlaylistShowPage = (props) => {

    const { playlist } = props;
    const { songs } = props

    console.log(playlist);
    
    const [youtubeImport, setYoutubeImport] = useState(null)
    const [modal, setModal] = useState(false)

    const [expandAll, setExpandAll] = useState(false)

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

    return (
        <React.Fragment>
            {playlist ?
                <>
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
                            <div className="place-self-center xl:justify-self-start xl:-ml-32 2xl:-ml-96 text-xl lg:text-base">
                                <p className="pt-2 text-black text-5xl hidden sm:block">{playlist.title}</p>
                                <p className="pt-2 text-black text-xl">{playlist.description}</p>
                                <div className="flex text-xl text-white py-2">
                                    <p
                                        className="font-semibold cursor-pointer bg-blue-light py-0.5 px-2 rounded-full"
                                        onClick={() => {
                                            navigator.clipboard.writeText(`./playlists/${playlist.id}/present`)
                                        }}
                                    >
                                        Share
                                    </p>
                                        <a
                                            href={`/playlists/${playlist.id}/present`}
                                            className="ml-2 font-semibold cursor-pointer bg-blue-light py-1 px-2 rounded-full"
                                        >
                                            Present
                                        </a>
                                </div>
                                <div className="grid grid-cols-1">
                                    <div className="pt-2">
                                        <button
                                            id="import-btn"
                                            className="w-auto text-lg flex items-stretch border-2 pl-1.5 pr-3 pt-0.5 pb-0.5 lg:pl-3 lg:pr-5 lg:pt-1 lg:pb-1 rounded-full focus:outline-none"
                                            style={{ "backgroundColor": "#E54B4B", "color": "#FFFDF3" }}
                                            onClick={() => setModal(!modal)}
                                        >
                                            <span className="-pr-4 lg:pr-2 self-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:h-3 sm:w-3 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                            </span>
                                        Import from YouTube playlist
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="lg:ml-5 xl:ml-10 2xl:ml-16">
                            <h1 className="text-4xl">Pending tracks:</h1>
                            {youtubeImport || playlist.youtube_playlist ?
                            <PendingTrackListing youtubeImport={youtubeImport} renderedPlaylist={playlist} />
                            : null}
                        </section>
                        <section className="lg:ml-5 xl:ml-10 2xl:ml-16 pt-20">
                            <h1 className="text-4xl">Added tracks:</h1>
                            <p className="text-gray-500">
                                Click on album cover to see track details
                            </p>
                            <p
                                className="text-gray-500 cursor-pointer"
                                onClick={() => setExpandAll(!expandAll)}
                            >
                                {expandAll ? "Collapse all" : "Expand all"}
                            </p>
                            <TrackListing songs={props.playlist.songs} expandAll={expandAll} />
                        </section>
                    </PageMargin>
                    {modal ?
                        <div
                            // id="playlist-creator"
                            className="rounded-xl fixed container flex flex-col flex-1 items-stretch mx-auto shadow-xl z-30 w-full xl:absolute md:left-1/4 md:right-1/4 top-56 md:w-1/2"
                            style={{ "backgroundColor": "#EAE9EC" }}
                        >
                            <span>
                                <div
                                    className="text-lg sm:text-3xl md:text-xl font-semibold pb-0 lg:pb-2 p-5 mx-3 sm:mx-5"
                                    style={{ "paddingLeft": "20px" }}
                                >
                                    Add Your YouTube Playlist
                                    <button onClick={() => {
                                        setModal(false)
                                    }}
                                        className="z-40 float-right p-1.5 py-2.5 text-xl rounded-full focus:outline-none"
                                        style={{ "backgroundColor": "#E54B4B" }}
                                    >
                                        <img
                                            src="https://a.storyblok.com/f/113855/x/37bacd6a71/close.svg"
                                            className="w-7/12 mx-auto self-center"
                                        />
                                    </button>
                                </div>
                            </span>
                            <YouTubePlaylistUpload  setModal={setModal} setYoutubeImport={setYoutubeImport} playlist={playlist} />
                        </div>
                        : null}
                </>
                : null}
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
            songs: playlist.songs
        }
    }
}

// const mapStateToProps = (state) => {
//     return state
// }

// const mapDispatchToProps = {
//     getPlaylist
// }

export default PlaylistShowPage


// export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShowPage)