import React, {useState, useEffect} from 'react';
import PendingTracklistItem from '../cards/PendingTracklistItem'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { connect } from 'react-redux';
import { importYouTube, deleteSong, getSongs } from '../../redux/actions/playlist-actions'
import { compose } from 'redux'
import { withRouter } from 'next/router'

class PendingTrackListing extends React.Component {

    state = {
        songs: this.props.renderSongs
    }
    
    componentDidMount() {
        this.props.getSongs(this.props.router.query.id)
        this.setState({songs: this.props.renderSongs})
    }

    handleOnDragEnd(result) {
        if (!result.destination) return;
        let items = this.state.songs
        console.log(items)
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        this.setState({songs: items});
    }

    render() {
        
        const { deleteSong, getSongs, renderSongs, setRenderSongs } = this.props
        
        if (this.props.user.currentUser === undefined) {
            this.props.router.push('/login')
        }

        console.log(this.props)

        return (
            <React.Fragment>
                {renderSongs ?
                <section
                    className="pt-5"
                >
          <DragDropContext
              onDragEnd={(result) => this.handleOnDragEnd(result)}
          >
              <Droppable droppableId="droppable">
                  {(provided) => (
                      <ul
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                      >
                          {this.state.songs?.map((track, index) => {
                          {/* {renderSongs?.map((track, index) => { */}
                            {/* console.log({track, index}) */}
                              return (
                                <Draggable
                                  key={track.id}
                                  draggableId={track.id.toString()}
                                  index={index}
                                >
                                  {(provided) => (
                                    <PendingTracklistItem
                                      key={track.id}
                                      track={track}
                                      index={index}
                                      provided={provided}
                                      deleteHandler={this.props.deleteHandler}
                                    />
                                  )}
                                  </Draggable>
                              )
                          })}
                      {provided.placeholder}
                      </ul>
                  )}
              </Droppable>
          </DragDropContext>
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
