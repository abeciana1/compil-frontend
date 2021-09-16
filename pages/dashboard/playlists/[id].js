import React, { useEffect } from 'react';
import PageMargin from '../../../components/utils/PageMargin'
import YouTubePlaylistUpload from '../../../components/forms/YouTubePlaylistUpload'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'

import { getPowerHour, deleteSong, getSongs } from '../../../redux/actions/playlist-actions'

import PendingTrackListing from '../../../components/containers/PendingTrackListing'

import ClickToEditInput from '../../../components/forms/ClickToEditInput'
import ClickToEditTextBody from '../../../components/forms/ClickToEditTextBody'

const PlaylistShowPage = (props) => {

    const {getPowerHour, deleteSong, getSongs} = props

    useEffect(() => {
        getPowerHour(window.location.pathname.split("/")[3])
        getSongs(window.location.pathname.split("/")[3])
    }, [])

    const deleteHandler = (e) => {
        let songId = e.target.dataset.id
        deleteSong(songId)
    }

    return (
        <React.Fragment>
            <RenderedPlaylist
                renderedPlaylist={props.playlist.playlist}
                // songs={songs}
                songs={props.playlist.songs}
                deleteHandler={deleteHandler}
                />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    getPowerHour,
    deleteSong,
    getSongs
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistShowPage))

class RenderedPlaylist extends React.Component {

    state = {
        // renderedPlaylist: null,
        // songs: [],
        modal: false
    }
    
    setModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        const { modal } = this.state

        const { renderedPlaylist, songs } = this.props
        
        console.log(renderedPlaylist)

        return (
        <React.Fragment>
                {renderedPlaylist ?
                    <>
                        <div>
                            <img
                                src={renderedPlaylist.image}
                                alt={renderedPlaylist.title + " - Banner Photo"}
                                className="w-screen max-h-72 filter blur-3xl"
                            />
                        </div>
                        <PageMargin>
                            <section className="relative bottom-32 mx-auto lg:ml-5 xl:ml-10 2xl:ml-16 grid grid-cols-1 md:grid-cols-2 place-content-center">
                                <div className="w-full md:w-10/12 lg:w-7/12">
                                    <ClickToEditInput
                                        playlist={renderedPlaylist}
                                        text={renderedPlaylist.title}
                                        className="text-white -mt-32 pb-10 text-5xl block md:hidden"
                                    />
                                    {/* <p className="text-white -mt-32 pb-10 text-5xl block md:hidden">{renderedPlaylist.title}</p> */}
                                    <img
                                        src={renderedPlaylist.image}
                                        alt={renderedPlaylist.title}
                                    />
                                </div>
                                <div className="place-self-center xl:justify-self-start xl:-ml-32 2xl:-ml-96 text-xl lg:text-base">
                                    {/* <p className="pt-2 lg:pt-0 text-black text-5xl hidden md:block">{renderedPlaylist.title}</p> */}
                                    <ClickToEditInput
                                        playlist={renderedPlaylist}
                                        text={renderedPlaylist.title}
                                        className="pt-2 lg:pt-0 text-black text-5xl hidden md:block"
                                    />
                                    <ClickToEditTextBody
                                        playlist={renderedPlaylist}
                                        text={renderedPlaylist.description}
                                        className="pt-4 text-black text-xl"
                                    />
                                    {/* <p className="pt-4 text-black text-xl">{renderedPlaylist.description}</p> */}
                                    <div className="flex text-xl text-white pt-4">
                                        <p
                                            className="font-semibold cursor-pointer bg-blue-light py-0.5 px-2 rounded-full"
                                            onClick={() => {
                                                navigator.clipboard.writeText(`./playlists/${renderedPlaylist.id}/present`)
                                            }}
                                        >
                                            Share
                                    </p>
                                        <a
                                            href={`/playlists/${renderedPlaylist.id}/present`}
                                            className="ml-2 font-semibold cursor-pointer bg-blue-light py-1 px-2 rounded-full"
                                        >
                                            Present
                                        </a>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <div className="pt-4">
                                            <button
                                                id="import-btn"
                                                className="w-auto text-lg text-white bg-black flex items-stretch pl-1.5 pr-3 pt-0.5 pb-0.5 lg:pl-3 lg:pr-5 lg:pt-1 lg:pb-1 rounded-full focus:outline-none"
                                                onClick={() => this.setModal(!modal)}
                                            >
                                                <span className="-pr-4 lg:pr-2 self-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:h-3 sm:w-3 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </span>
                                                Import songs
                                            </button>
                                        </div>
                                        <div className="pt-4">
                                            <button
                                                id="import-btn"
                                                className="w-auto text-lg flex text-white bg-red items-stretch pl-1.5 pr-3 pt-0.5 pb-0.5 lg:pl-3 lg:pr-5 lg:pt-1 lg:pb-1 rounded-full focus:outline-none"
                                                onClick={() => this.setModal(!modal)}
                                            >
                                                <span className="-pr-4 lg:pr-2 self-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                Delete power hour
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="lg:ml-5 xl:ml-10 2xl:ml-16">
                                <h1 className="text-4xl">Tracks:</h1>
                                {/* {songs ? */}
                                    <PendingTrackListing renderSongs={songs} setRenderSongs={this.fetchSongs} deleteHandler={this.props.deleteHandler} />
                                    {/* : null} */}
                            </section>
                        </PageMargin>
                        {modal ?
                            <div
                                className="rounded-xl fixed container flex flex-col flex-1 items-stretch mx-auto shadow-xl z-30 w-full xl:absolute md:left-1/4 md:right-1/4 top-56 md:w-1/2"
                                style={{ "backgroundColor": "#EAE9EC" }}
                            >
                                <span>
                                    <div
                                        className="text-lg sm:text-3xl md:text-xl font-semibold pb-0 lg:pb-2 p-5 mx-3 sm:mx-5"
                                        style={{ "paddingLeft": "20px" }}
                                    >
                                        Add Your YouTube Playlist
                                    <button onClick={() => this.setModal()}
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
                                <div
                                    className="text-lg sm:text-3xl md:text-xl mx-3 sm:mx-5"
                                    style={{ "paddingLeft": "20px" }}
                                >
                                    Uploading via individual songs .... coming soon
                            </div>
                                <YouTubePlaylistUpload setModal={this.setModal} playlist={renderedPlaylist} renderSongs={songs} setRenderSongs={this.fetchSongs} />
                            </div>
                            : null
                            }
                    </>
                    : null}
            </React.Fragment>
        )
    }
}