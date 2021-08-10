import React from 'react';
import { connect } from 'react-redux'

import { importYouTube } from '../../redux/actions/playlist-actions'

class YouTubePlaylistUpload extends React.Component {

    state = {
        youTubePlaylist: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.importYouTube(this.state)
        this.props.setModal(false)
    }

    render() {
        // console.log(this.props)
        return (
            <React.Fragment>
                <form
                    className="py-5 px-6 sm:px-10"
                    onSubmit={this.submitHandler}
                >
                    <div>
                        <label>Youtube Playlist ID:</label>
                        <br/>
                        <input
                            className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                            type="text"
                            name="youTubePlaylist"
                            placeholder="Youtube Playlist ID"
                            onChange={this.changeHandler}
                            required
                        />
                        <div className="text-sm">https://www.youtube.com/playlist?list=<span className="font-semibold text-red">PLAcSBHqyx4G3mjMwU-Xd1m_MsAHcaxHGi</span></div>
                    </div>
                    <div className="pt-5">
                        <input
                            type="submit"
                            disabled={this.state.youTubePlaylist.length < 1 ? true : false}
                            className="text-white bg-red px-3 py-1 md:col-start-4 md:col-end-5 rounded-full focus:outline-none text-xl cursor-pointer"
                        />
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

// export default YouTubePlaylistUpload

const mapDispatchToProps = {
    importYouTube
}

export default connect(null, mapDispatchToProps)(YouTubePlaylistUpload)
