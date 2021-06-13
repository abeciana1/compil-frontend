import ReactPlayer from 'react-player'
import React, {useState} from 'react'

const VideoPlayer = (props) => {

    return (
        <React.Fragment>
            <ReactPlayer
            url={props.currentVid}
            width="100%"
            onEnded={() => props.playAnotherOne()}
            muted={true}
            playing={true}
            // loop
            />
            {/* <div className="flex justify-center"> */}
                {/* <video className="w-full md:w-5/12" autoPlay muted playing="true">
                    <source
                        src={props.currentVid}
                        onEnded={() => playAnotherOne()}
                        // onEnded={() => console.log("ended")}
                        type="video/mp4"
                        // onEnded={props.playAnotherOne}
                        />
                </video> */}
            {/* </div> */}
        </React.Fragment>
    )
}

export default VideoPlayer