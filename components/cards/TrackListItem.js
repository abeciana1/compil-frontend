import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

const TrackListItem = (props) => {

    const [showDetails, setShowDetails] = useState(false)
    const [artistBio, setArtistBio] = useState(null)

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
    
    // useEffect(() => {
    //     // fetchArtistBio()
    //     fetchArtistBio(track.id)
    //     // getArtistBio(fetchArtist(track.id))

    // }, [artistBio])

    const fetchArtistBio = (trackId) => {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                songId: trackId
            })
        }

        fetch('http://localhost:3001/api/v1/get-artist-bio', options)
            .then(response => response.text())
            .then(data => {
                // console.log(data)
                // debugger
                // let profile = data.profile
                setArtistBio(data)

                //! remove [a || [a=
                // profile.replace(/\[a=/g, "")

                // ! 
                // ! \[a|=|\[a|\]
                

                //! removes ]
                // profile.replace(/]/g, "")
            })
    }



    return (
        <React.Fragment>
            <li
                className="border border-black hover:bg-black hover:text-white"
            >
                <div className="md:grid md:grid-cols-3 md:items-stretch">
                    <div className="flex items-stretch">
                        <img
                            src={track.album_cover}
                            className="h-10 w-10"
                            onClick={() => {
                                fetchArtistBio(track.id)
                                setShowDetails(!showDetails)
                            }}
                        />
                        <span className="self-center ml-5">
                            {track.artist} | {track.title}
                        </span>
                    </div>
                    <div className="text-center self-center">
                        {track.album}
                    </div>
                    <div className="self-center text-center justify-self-end md:pr-5 pt-3 md:pt-0">
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
                {showDetails || props.expandAll ?
                    <React.Fragment>
                        {() => setArtistBio(fetchArtist(track.id))}
                        <div className="border-t-2 border-black hover:border-white items-stretch">
                            <div className="mx-5 my-5">
                                <div className="grid grid-cols-1 md:grid-cols-3 md:items-stretch">
                                    <div className="flex flex-col sm:flex-row md:self-center">
                                        <img
                                            src={track.album_cover}
                                            className="h-32 w-32"
                                            onClick={() => setShowDetails(!showDetails)}
                                        />
                                        <div className="sm:ml-5 flex-auto w-3/4 xl:w-1/4 pt-2 sm:pt-0">
                                            <b>Title: </b>{track.title}
                                            <br/>
                                            <b>Artist: </b>{track.artist}
                                            <br/>
                                            <b>Album: </b>{track.album}
                                        </div>
                                    </div>
                                    <div className="md:ml-5 lg:ml-10 2xl:mr-44 pt-5 self-center md:col-span-2">
                                        <b>About the artist:</b>
                                        <div className="overflow-auto whitespace-pre-wrap h-32">
                                            <div dangerouslySetInnerHTML={{ __html: artistBio}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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