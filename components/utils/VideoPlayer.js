import ReactPlayer from 'react-player'
// import React from 'react'
import React, {useState} from 'react'

const VideoPlayer = (props) => {
    console.log(props)

    // const [currentVid, setCurrentVid] = useState(props.currentVid)

    // const playAnotherOne = () => {
        // console.log("ended")
        // return setCurrentVid(`/static/videos/${Math.floor(Math.random() * 10) + 1}.mp4`)
        // setCurrentVid(`/static/videos/${Math.floor(Math.random() * 10) + 1}.mp4`)
    // }

    // console.log(props.currentVid)

    return (
        <React.Fragment>
            <ReactPlayer
            url={props.currentVid}
            width="100%"
            onEnded={() => props.playAnotherOne()}
            muted={true}
            playing={true}
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

// export const getStaticProps = async (context) => {
//     let firstVideo = `/static/videos/${Math.floor(Math.random() * 10) + 1}.mp4`
//     // let firstVideo = "/static/videos/5.mp4"
  
//     return {
//       props: {
//         firstVideo: firstVideo
//       }
//     }
//   }

export default VideoPlayer