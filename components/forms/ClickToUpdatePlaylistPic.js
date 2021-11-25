import React from 'react';
import { connect } from 'react-redux';
import { updatePowerHour } from '../../redux/actions/playlist-actions'

class ClickToUpdatePlaylistPic extends React.Component {

    state = {
        pic: null,
        src: this.props.src,
        alt: this.props.alt,
        className: this.props.className,
        editMode: false
    }

    pictureHandler = (e) => {
        e.persist()
        if (e.target.files[0]) {
            this.setState({
                pic: e.target.files[0]
            })
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.updatePowerHour(this.props.playlist.id, {
            pic: this.state.pic
        })
    }

    render() {

        return (
            <React.Fragment>
                {this.state.editMode ?
                <form
                    onSubmit={this.submitHandler}
                >
                    <input
                        type="file"
                        style={{ "backgroundColor": "#ffffff" }}
                        name="pic"
                        accept=".png,.jpg,.svg,.jpeg"
                        className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                        onChange={this.pictureHandler}
                        />
                        <div
                            className="flex py-4"
                        >
                            <input
                                className="py-1 px-3 rounded-full bg-black text-white cursor-pointer focus:outline-none"
                                type="Submit"
                                value="Save"
                            />
                            <button
                                className="ml-2 py-1 px-3 rounded-full bg-black text-white focus:outline-none"
                                onClick={() => this.setState({editMode: false})}
                            >Cancel</button>
                        </div>
                </form>
                    :
                <img
                    src={this.state.src}
                    alt={this.state.alt}
                    className="playlist-profile cursor-pointer"
                    onClick={() => {
                        this.setState({
                            editMode: true
                        })
                    }}
                />
                }
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = {
    updatePowerHour
}

export default connect(null, mapDispatchToProps)(ClickToUpdatePlaylistPic)