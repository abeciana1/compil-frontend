// import ReactPlayer from 'react-player'
import React from 'react'

const VideoPlayer = (props) => {

    return (
        <React.Fragment>
            {/* <ReactPlayer
            url={props.currentVid}
            width="100%"
            onEnded={() => props.playAnotherOne()}
            muted={true}
            playing={true}
            /> */}
            {/* <div className="flex justify-center"> */}
                <video className="w-full md:w-5/12">
                    <source
                        src={props.currentVid}
                        onEnded={() => props.playAnotherOne()}
                        autoPlay muted
                        />
                </video>
            {/* </div> */}
        </React.Fragment>
    )
}

export default VideoPlayer