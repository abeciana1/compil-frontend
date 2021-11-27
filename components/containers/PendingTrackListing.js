import React, {useState, useEffect} from 'react';
import PendingTracklistItem from '../cards/PendingTracklistItem'
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { connect } from 'react-redux';
import { importYouTube, deleteSong, getSongs } from '../../redux/actions/playlist-actions'
import { compose } from 'redux'
import { withRouter } from 'next/router'

class PendingTrackListing extends React.Component {

    componentDidMount() {
        this.props.getSongs(this.props.router.query.id)
    }

    render() {
        
        const { deleteSong, getSongs, renderSongs, setRenderSongs } = this.props
        
        if (this.props.user.currentUser === undefined) {
            this.props.router.push('/login')
        }

        // useEffect(() => {
        //     getSongs(this.props.router.query.id)
        // }, [])

        // console.log(renderSongs, this.props.router.query.id)

        return (
            <React.Fragment>
                {renderSongs ?
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
                    this.props.getSongs(this.props.router.query.id)
                    }
                {renderSongs?.length === 0 ? <h3 className="text-2xl">Sorry, no songs have been added.</h3> : null}
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
