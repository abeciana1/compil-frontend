import React, { useState } from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal';
import AddPendingToPlaylist from '../forms/AddPendingToPlaylist'

import {
    findAddSong
} from '../../redux/actions/playlist-actions'

const PendingTracklistItem = (props) => {

    const [modal, setModal] = useState(false)
    const { track, playlistId, findAddSong } = props;

    // const addSong = () => {

    // }

  const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 100,
      overflow: 'auto',
    },
    content: {
      background: 'transparent',
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: 0,
    //   pointerEvents: 'none',
    },
  };

    return (
        <React.Fragment>
            <li
                className="border border-black hover:bg-black hover:text-white"
            >
                <div
                    className="track"
                >
                    <img
                        src={track.snippet.thumbnails.default.url}
                        className="h-10 w-10"
                    />
                    <div
                        className="md:self-center -ml-16 md:ml-5 grid"
                    >
                        {track.snippet.title}
                        <div>
                            <span className="self-center float-right pt-3 relative mr-5 block md:hidden">
                                <a
                                    href={"https://youtu.be/" + track.contentDetails.videoId}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    YouTube Link
                                </a>
                                <a
                                    className="ml-5 cursor-pointer"
                                    onClick={() => {
                                        // findAddSong(track, playlistId)
                                        console.log("add")
                                    }}
                                >
                                    Add song
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <span className="self-center float-right relative bottom-8 mr-5 hidden md:block">
                    <a
                        href={"https://youtu.be/" + track.contentDetails.videoId}
                        target="_blank"
                        rel="noopener"
                    >
                        YouTube Link
                    </a>
                    <a
                        className="ml-5 cursor-pointer"
                        onClick={() => {
                            console.log("add")
                            setModal(!modal)
                        }}
                    >
                        Add song
                    </a>
                </span>
            </li>
            <Modal
                isOpen={modal}
                onRequestClose={() => setModal(false)}
                style={modalStyles}
            >
                <div className="overflow-auto h-full flex justify-center">
                    <div
                        className="bg-gray-100 p-4 border-2 rounded-lg w-11/12 lg:w-7/12"
                    >
                        <span
                            className="flex text-lg sm:text-3xl md:text-xl font-semibold pb-0 lg:pb-2 mx-3 sm:mx-5 items-stretch justify-between sm:justify-between pb-0 lg:pb-2"
                        >
                            {/* <div
                                className=""
                                // style={{ "paddingLeft": "20px" }}
                            > */}
                                Add to Your Playlist
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
                            {/* </div> */}
                        </span>
                        <AddPendingToPlaylist />
                    </div>
                </div>
            </Modal>
            {/* {modal ?
                <div
                    // id="playlist-creator"
                    className="rounded-xl fixed container flex flex-col flex-1 items-stretch mx-auto shadow-xl z-30 w-full xl:absolute md:left-1/4 md:right-1/4 top-56 md:w-1/2"
                    style={{ "backgroundColor": "#EAE9EC" }}
                >
                    

                </div>
            : null} */}
        </React.Fragment>
    )
}

const mapDispatchToProps = {
    findAddSong
}

export default connect(null, mapDispatchToProps)(PendingTracklistItem)