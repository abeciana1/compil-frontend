import React, {useState, useEffect} from 'react';
import PendingTracklistItem from '../cards/PendingTracklistItem'

import { connect } from 'react-redux';
import { importYouTube, deleteSong, getSongs } from '../../redux/actions/playlist-actions'
import { compose } from 'redux'
import { withRouter } from 'next/router'

class PendingTrackListing extends React.Component {

    render() {
        
        const { deleteSong, getSongs, renderSongs, setRenderSongs } = this.props
        
        if (this.props.user.currentUser === undefined) {
            this.props.router.push('/login')
        }

        return (
            <React.Fragment>
                {renderSongs.length > 0 ?
                    <section
                        className="pt-5"
                    >
                        <ul>
                            {renderSongs?.map((track) => {
                                return (
                                    <PendingTracklistItem track={track} deleteHandler={this.props.deleteHandler} />
                                )
                            })}
                        </ul>
                    </section>
                    :
                    <h3
                        className="text-3xl"
                    >Sorry, no songs have been added.</h3>
                }
            </React.Fragment>
        )
    }
}

// export default PendingTrackListing

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    importYouTube,
    deleteSong,
    getSongs
}
    
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(PendingTrackListing)
// export default connect(mapStateToProps, mapDispatchToProps)(PendingTrackListing)
