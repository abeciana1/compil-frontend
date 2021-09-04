import React, {useState, useEffect} from 'react';
import PendingTracklistItem from '../cards/PendingTracklistItem'

import { connect } from 'react-redux';
import { importYouTube,deleteSong } from '../../redux/actions/playlist-actions'
import { useRouter } from 'next/router'

const PendingTrackListing = (props) => {
    const router = useRouter()

    const { songs, deleteSong } = props

    const [renderSongs, setRenderSongs] = useState(songs)

    if (props.user.currentUser === undefined) {
        router.push('/login')
    }

    const deleteHandler = (songId) => {
        let copySongs = [...renderSongs]
        let foundSong = copySongs.find((song) => song.id === songId)
        copySongs.splice(copySongs.indexOf(foundSong), 1)
        setRenderSongs(copySongs)
        deleteSong(songId)
    }

    return (
        <React.Fragment>
            {songs || props.user.currentUser ? 
            <section
                className="pt-5"
            >
                <ul>
                    {renderSongs?.map((track) => {
                        return (
                        <PendingTracklistItem track={track} deleteHandler={deleteHandler} />
                        )
                    })}
                </ul>
            </section>
                :
                <h1>Sorry, there are no songs in this power hour</h1>
            }
        </React.Fragment>
    )
}

// export default PendingTrackListing

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    importYouTube,
    deleteSong
}
    
export default connect(mapStateToProps, mapDispatchToProps)(PendingTrackListing)
