import React, {useState, useEffect} from 'react';
import PendingTracklistItem from '../cards/PendingTracklistItem'

import { connect } from 'react-redux';
import { importYouTube } from '../../redux/actions/playlist-actions'

const PendingTrackListing = (props) => {

    console.log(props)
    const { playlist, renderedPlaylist, importYouTube, songs } = props

    const [pending, setPending] = useState(null)

    // useEffect(() => {
    //     // props.importYouTube(props.youtubeImport.youTubePlaylist)
    //     // setPending(props.importYouTube(props.youtubeImport.youTubePlaylist))
    //     props.importYouTube(props.renderedPlaylist.youtube_playlist, props.renderedPlaylist.id)
    //     setPending(props.importYouTube(props.renderedPlaylist.youtube_playlist, props.renderedPlaylist.id))

    // }, [pending])
    
    // setPending(props.playlist.importYouTubeItems)
    // console.log(pending);
    // props.importYouTube(props.youtubeImport)
    return (
        <React.Fragment>
            {songs ? 
            <section
                className="pt-5"
            >
                <ul>
                    {songs?.map((track) => {
                        return (
                        <PendingTracklistItem track={track} />
                        )
                    })}
                </ul>
            </section>
            : null}
        </React.Fragment>
    )
}

// export default PendingTrackListing

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    importYouTube
}
    
export default connect(mapStateToProps, mapDispatchToProps)(PendingTrackListing)
// export default connect(null, mapDispatchToProps)(PendingTrackListing)