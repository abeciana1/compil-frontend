import React from 'react';

import TracklistItem from '../cards/TrackListItem'

const TrackListing = (props) => {

    return (
        <React.Fragment>
            {props.songs ?
            <section
                className="pt-5"
            >
                <ul>
                    {props.songs.map((track) => {
                        return (
                        <TracklistItem track={track} />
                        )
                    })}
                </ul>
            </section>
            : null}
        </React.Fragment>
    )
}

export default TrackListing