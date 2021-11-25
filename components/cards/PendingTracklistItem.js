import React, { useState, useMemo } from 'react';
import ReactPlayer from 'react-player'

const PendingTracklistItem = (props) => {

    const { track, deleteHandler } = props;

    const [expand, setExpand] = useState(false)

    console.log(track)

//* {
//*     "id": 471,
//*     "title": "Dry Cleaning - Scratchcard Lanyard (Official Video)",
//*     "artist": "",
//*     "album": "",
//*     "album_cover": "https://i.ytimg.com/vi/6PuqlOTyJt0/hqdefault.jpg",
//*     "link": "https://youtu.be/6PuqlOTyJt0",
//*     "start_time": "",
//*     "end_time": "",
//*     "youtube_id": "6PuqlOTyJt0",
//*     "power_hour_id": 4
//* }
    
    let embedStartTime = new Date(track.start_time).getTime()

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
                                    data-id={track.id}
                                    className="ml-5 cursor-pointer"
                                    onClick={deleteHandler}
                                    // onClick={() => deleteHandler(track.id)}
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
                        data-id={track.id}
                        className="ml-5 cursor-pointer"
                        onClick={deleteHandler}
                        // onClick={() => deleteHandler(track.id)}
                        // onClick={() => debounceDeleteHandler(track.id)}
                    >
                        Remove song
                    </a>
                </span>
                {expand ?
                    <section
                        className="grid grid-cols-2"
                    >
                        <div
                            className="leading-loose ml-5 justify-items-stretch"
                        >
                            <ul>
                                <li
                                    className="flex"
                                >
                                    <p
                                        className="font-bold"
                                    >Start time:</p>
                                    <span
                                        className="ml-2"
                                    >{track.start_time}</span>
                                </li>
                                <li
                                    className="flex"
                                >
                                    <p
                                        className="font-bold"
                                    >End time:</p>
                                    <span
                                        className="ml-2"
                                    >{track.end_time}</span>
                                </li>
                            </ul>
                        </div>
                        <div
                            className=""
                        >
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${track.youtube_id}?start=${new Date(track.start_time).getTime()}&end=${new Date(track.end_time).getTime()}`}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                    </section>
                :
                null}
            </li>
        </React.Fragment>
    )
}

export default PendingTracklistItem