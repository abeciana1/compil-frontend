import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
// import { Parser } from "react-tiny-bbcode";
import parser, {Tag} from 'bbcode-to-react';

// class ATag extends Tag {

//     toReact() {

//         return (

//         )
//     }
// }


const TrackListItem = (props) => {

    const [showDetails, setShowDetails] = useState(false)
    const [artistBio, setArtistBio] = useState(null)

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
    
    useEffect(() => {
        // fetchArtistBio()
        fetchArtistBio(track.id)
        // getArtistBio(fetchArtist(track.id))

    }, [artistBio])
    
    // const fetchArtistBio = () => {

    //     fetch()
    // }

    const fetchArtistBio = (trackId) => {



        let artistBio 

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
                console.log(data)
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
                        <div className="border-t-2 border-black hover:border-white">
                            <div className="mx-5 my-5">
                                <div className="flex flex-col sm:flex-row">
                                    <div>
                                        <img
                                            src={track.album_cover}
                                            className="h-32 w-32"
                                            onClick={() => setShowDetails(!showDetails)}
                                        />
                                    </div>
                                    <div className="sm:ml-5 pt-2 sm:pt-0">
                                        <b>Title: </b>{track.title}
                                        <br/>
                                        <b>Artist: </b>{track.artist}
                                        <br/>
                                        <b>Album: </b>{track.album}
                                    </div>
                                    <div className="ml-10">
                                        <b>About the artist:</b>
                                        <div className="overflow-auto whitespace-pre-wrap">
                                            <div dangerouslySetInnerHTML={{ __html: artistBio}} />

                                            {/* </div> */}
                                            {/* // {artistBio} */}
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