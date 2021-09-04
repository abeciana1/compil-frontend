import React, {useState, useEffect} from 'react';
import PendingTracklistItem from '../cards/PendingTracklistItem'

import { connect } from 'react-redux';
import { importYouTube } from '../../redux/actions/playlist-actions'

const PendingTrackListing = (props) => {
    const { songs } = props

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
