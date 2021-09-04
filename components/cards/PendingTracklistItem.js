import React, { useState } from 'react';
// import { connect } from 'react-redux'

// import {
//     findAddSong
// } from '../../redux/actions/playlist-actions'

const PendingTracklistItem = (props) => {

    const { track, playlistId } = props;

    console.log(track);

// {
//     "id": 33,
//     "title": "",
//     "artist": "",
//     "album": "",
//     "album_cover": "https://i.ytimg.com/vi/E7dq6w9klDg/hqdefault.jpg",
//     "link": "https://youtu.be/E7dq6w9klDg",
//     "start_time": "",
//     "end_time": "",
//     "youtube_id": "E7dq6w9klDg",
//     "power_hour_id": 1
// }

    return (
        <React.Fragment>
            <li
                className="border border-black hover:bg-black hover:text-white"
            >
                <div
                    className="track"
                >
                    <img
                        src={track?.album_cover}
                        className="h-10 w-10"
                    />
                    <div
                        className="md:self-center -ml-16 md:ml-5 grid"
                    >
                        {track?.title}
                        <div>
                            <span className="self-center float-right pt-3 relative mr-5 block md:hidden">
                                <a
                                    href={track?.link}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    YouTube Link
                                </a>
                                <a
                                    className="ml-5 cursor-pointer"
                                    onClick={() => {
                                        // findAddSong(track, playlistId)
                                        console.log("remove")
                                    }}
                                >
                                    Remove song
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <span className="self-center float-right relative bottom-8 mr-5 hidden md:block">
                    <a
                        href={track?.link}
                        target="_blank"
                        rel="noopener"
                    >
                        YouTube Link
                    </a>
                    <a
                        className="ml-5 cursor-pointer"
                        onClick={() => {
                            console.log("remove")
                        }}
                    >
                        Remove song
                    </a>
                </span>
            </li>
        </React.Fragment>
    )
}

export default PendingTracklistItem

// const mapDispatchToProps = {
//     findAddSong
// }

// export default connect(null, mapDispatchToProps)(PendingTracklistItem)