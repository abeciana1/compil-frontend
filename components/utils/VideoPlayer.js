import ReactPlayer from 'react-player'

const VideoPlayer = (props) => {

    return (
        // <div className="">
        // {props.currentVid ?
            <ReactPlayer
            url={props.currentVid}
            width="100%"
            onEnded={() => props.playAnotherOne()}
            muted={true}
            playing={true}
            />
            // :null
            
            // }
        // </div>
    )
}

export default VideoPlayer