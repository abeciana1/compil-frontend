import React, {useState, useEffect} from 'react';
import PendingTracklistItem from '../cards/PendingTracklistItem'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { connect } from 'react-redux';
import { importYouTube, deleteSong, getSongs, reorderSongs } from '../../redux/actions/playlist-actions'
import { compose } from 'redux'
import { withRouter } from 'next/router'

const PendingTrackListing = (props) => {

    // console.log(props)

    const { deleteSong, getSongs, renderSongs, setRenderSongs, router, playlist, reorderSongs } = props

    const [songs, setSongs] = useState([])
    
    // console.log(songs)

    useEffect(() => {
        getSongs(router.query.id)
        setSongs(renderSongs)
    }, [])

    const handleOnDragEnd = (result) => {
        // console.log(result)
        if (!result.destination) return;
        let items = songs
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setSongs(items);
        reorderSongs(playlist.playlist.id, parseInt(result.draggableId), result.destination.index)
    }
    
    if (props.user.currentUser === undefined) {
        props.router.push('/login')
    }

    // let sortedSongs = songs.sort((a, b) => a.order_number - b.order_number)

return (
        <React.Fragment>
        {renderSongs ?
        <section
            className="pt-5"
        >
          <DragDropContext
              onDragEnd={(result) => handleOnDragEnd(result)}
          >
              <Droppable droppableId="droppable">
                  {(provided) => (
                      <ul
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                      >
                          {/* {songs?.map((track, index) => { */}
                          {renderSongs?.map((track, index) => {
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
                                      deleteHandler={props.deleteHandler}
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
                    getSongs(router.query.id)
                    }
                {renderSongs?.length === 0 ? <h3 className="text-2xl">Sorry, no songs have been added.</h3> : null}
            </React.Fragment>
        )

}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    importYouTube,
    deleteSong,
    getSongs,
    reorderSongs
}
    
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(PendingTrackListing)
