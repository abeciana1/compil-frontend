import React from 'react';
import PageMargin from '../../components/utils/PageMargin'

import YouTubeSearchForm from '../../components/forms/YouTubeSearchForm'

const YouTubeSearch = (props) => {

    return (
        <React.Fragment>
            <PageMargin>
                <h1
                    className="pt-2 lg:pt-0 text-black text-5xl"
                >
                    YouTube Search
                </h1>
                <YouTubeSearchForm />
            </PageMargin>
        </React.Fragment>
    )
}

export default YouTubeSearch