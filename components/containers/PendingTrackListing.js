import React, {useState, useEffect} from 'react';
import PendingTracklistItem from '../cards/PendingTracklistItem'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { connect } from 'react-redux';
import { importYouTube, deleteSong, getSongs } from '../../redux/actions/playlist-actions'
import { compose } from 'redux'
import { withRouter } from 'next/router'

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png'
  },
  {
    id: 'cato',
    name: 'Little Cato',
    thumb: '/images/cato.png'
  },
  {
    id: 'kvn',
    name: 'KVN',
    thumb: '/images/kvn.png'
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
    thumb: '/images/mooncake.png'
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    thumb: '/images/quinn.png'
  }
]

class PendingTrackListing extends React.Component {

    state = {
        characters: finalSpaceCharacters 
    }

    componentDidMount() {
        this.props.getSongs(this.props.router.query.id)
        // this.setState({items: this.props.renderSongs})
    }

  handleOnDragEnd(result) {  
    if (!result.destination) return;
    
    // let items = Array?.from(this?.state?.characters);
    debugger
    let items = this.state.characters
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        this.setState({characters: items});
    }

    render() {
        
        const { deleteSong, getSongs, renderSongs, setRenderSongs } = this.props
        
        if (this.props.user.currentUser === undefined) {
            this.props.router.push('/login')
        }
      
      // console.log(renderSongs)

        return (
            <React.Fragment>
                {renderSongs ?
                    <section
                        className="pt-5"
                    >
            {/* <DragDropContext onDragEnd={this.handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {this.state.characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext> */}
          <DragDropContext
              onDragEnd={this.onDragEnd}
          >
              <Droppable droppableId="droppable">
                  {(provided) => (
                      <ul
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                      >
                          {renderSongs?.map((track, index) => {
                            console.log({track, index})
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
