import React from 'react';

const PendingTracklistItem = ({ track }) => {
    
    console.log(track);

    return (
        <React.Fragment>
            <li
                className="border hover:bg-black hover:text-white"
            >
                <div
                    className="flex items-center"
                >
                    <img
                        src={track.snippet.thumbnails.default.url}
                        className="h-10 w-10"
                    />
                    <div
                        className="self-center ml-5"
                    >
                        {track.snippet.title}
                    </div>
                </div>
                <span className="self-center float-right relative bottom-7 mr-5">
                    <a
                        href={"https://youtu.be/" + track.contentDetails.videoId}
                    >
                        YouTube Link
                    </a>
                    <a
                        className="ml-5 cursor-pointer"
                        // onClick={}
                    >
                        Add song
                    </a>
                </span>
            </li>
        </React.Fragment>
    )
}

export default PendingTracklistItem