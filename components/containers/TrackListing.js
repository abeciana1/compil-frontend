import React, {useState} from 'react';

import TracklistItem from '../cards/TrackListItem'

const TrackListing = (props) => {

    // TODO add expand / collapse all functionality

    return (
        <React.Fragment>
            {props.songs ?
            <section
                className="pt-5"
            >
                <ul>
                    {props.songs.map((track) => {
                        return (
                        <TracklistItem track={track} expandAll={props.expandAll} />
                        )
                    })}
                </ul>
            </section>
            : null}
        </React.Fragment>
    )
}

export default TrackListing