import React from 'react';
import PendingTracklistItem from '../cards/PendingTracklistItem'

const PendingTrackListing = ({pending}) => {

    return (
        <React.Fragment>
            {pending ? 
            <section
                className="pt-5"
            >
                <ul>
                    {pending.map((track) => {
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

export default PendingTrackListing