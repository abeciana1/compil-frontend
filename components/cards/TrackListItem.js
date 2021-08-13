import React from 'react';

const TrackListItem = (props) => {

    console.log(props);

    const { track } = props;

//! {
//!     "track": {
//!         "id": 8,
//!         "title": "Aqualung",
//!         "artist": "Pink Floyd",
//!         "album": "The Dark Side of the Moon",
//!         "link": "https://www.youtube.com/watch?v=IIdNH-eraCQ",
//!         "start_time": null,
//!         "end_time": null,
//!         "youtube_id": null
//!     }
//! }

    return (
        <React.Fragment>
            <li
                className="border hover:bg-black hover:text-white"
            >
                <div className="grid grid-cols-3 items-stretch">
                    <div className="flex items-stretch">
                        <img
                            src={track.image}
                            className="h-10 w-10"
                        />
                        <span className="self-center ml-5">
                            {track.artist} | {track.title}
                        </span>
                    </div>
                    <div className="text-center self-center">
                        {track.album}
                    </div>
                    <div></div>
                </div>
            </li>
        </React.Fragment>
    )
}

export default TrackListItem