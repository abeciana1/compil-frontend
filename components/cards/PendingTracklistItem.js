import React, { useState } from 'react';

const PendingTracklistItem = (props) => {

    const { track, deleteHandler } = props;

    // const isCommunicative()

    const [ expand, setExpand ] = useState(false)

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
                        className="h-20 w-20"
                        onClick={() => setExpand(!expand)}
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
                                        deleteHandler(track.id)
                                    }}
                                >
                                    Remove song
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <span className="self-center float-right relative pt-1 bottom-14 mr-5 hidden md:block">
                    <a
                        href={track?.link}
                        target="_blank"
                        rel="noopener"
                    >
                        YouTube Link
                    </a>
                    <a
                        className="ml-5 cursor-pointer"
                        onClick={() => deleteHandler(track.id)}
                    >
                        Remove song
                    </a>
                </span>
                {expand ?
                <section>
                    
                </section>
                :
                null}
            </li>
        </React.Fragment>
    )
}

export default PendingTracklistItem