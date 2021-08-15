import React from 'react';

const PendingTracklistItem = ({ track }) => {
    
    // console.log(track);

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
                                    // onClick={}
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