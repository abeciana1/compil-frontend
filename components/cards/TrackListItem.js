import React, { useState } from 'react';
import { connect } from 'react-redux'

const TrackListItem = (props) => {

    console.log(props);

    const { track } = props;

        const [showDetails, setShowDetails] = useState(false)

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
                className="border border-black hover:bg-black hover:text-white"
            >
                <div className="grid grid-cols-3 items-stretch">
                    <div className="flex items-stretch">
                        <img
                            src={track.image}
                            className="h-10 w-10"
                            onClick={() => console.log("details")}
                        />
                        <span className="self-center ml-5">
                            {track.artist} | {track.title}
                        </span>
                    </div>
                    <div className="text-center self-center">
                        {track.album}
                    </div>
                    <div className="self-center text-center justify-self-end pr-5">
                        <div>
                            <a
                                className="cursor-pointer"
                                onClick={() => console.log('youtube')}
                            >
                                Youtube link</a>
                            <span
                                className="pl-5 cursor-pointer"
                                onClick={() => console.log("remove song")}
                            >
                                Remove song
                            </span>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                {showDetails ?
                    <React.Fragment>
                    </React.Fragment>
                : null}
            </li>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {

}

// export default TrackListItem

export default connect(mapStateToProps, mapDispatchToProps)(TrackListItem)