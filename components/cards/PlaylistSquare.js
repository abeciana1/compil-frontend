import React from 'react'
import Image from 'next/image';

const Box = ({children}) => {

    return (
        <div className="w-32 h-32 md:w-36 md:h-36 lg:w-56 lg:h-56">
            {children}
        </div>
    )
}

const PlaylistSquare = (props) => {

    const { playlist } = props
    
    //! created_at: "2021-06-15T02:08:11.586Z"
    //! description: "Street ethical wes anderson whatever polaroid gluten-free banh mi neutra muggle magic."
    //! id: 1
    //! image: "https://static01.nyt.com/images/2019/11/13/obituaries/11Freeman3/merlin_164214771_c6e96bd0-0579-49ea-82ff-a1962f393153-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
    //! private: false
    //! status: "draft"
    //! title: "Playlist1"
    //! updated_at: "2021-06-15T02:08:11.586Z"

    return (
        <React.Fragment>
            <div>
                <Box>
                    <img
                        src={playlist.image}
                        className=""
                        alt={playlist.title}
                    />
                </Box>
                <div>
                <h4 className="text-xl lg:text-2xl font-semibold pt-3">{playlist.title}</h4>
                <h5 className="text-base lg:text-lg">{playlist.description}</h5>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PlaylistSquare