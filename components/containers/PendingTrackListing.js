import React, {useState, useEffect} from 'react';
import PendingTracklistItem from '../cards/PendingTracklistItem'

import { connect } from 'react-redux';
import { importYouTube } from '../../redux/actions/playlist-actions'
import { useRouter } from 'next/router'

const PendingTrackListing = (props) => {
    const router = useRouter()

    const { songs } = props

    if (props.user.currentUser === undefined) {
        router.push('/login')
    }

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
