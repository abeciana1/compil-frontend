import React, {Fragment, useState} from 'react';

import { connect } from 'react-redux';
import { updatePowerHour } from '../../redux/actions/playlist-actions'
import Dropdown from '../utils/Dropdown'

// * Use for updating playlist status or privacy

class ClickToEditStatusPrivacy extends React.Component {

    state = {
        privacyStatus: this.props.privacy,
        className: this.props.className,
        editMode: false
    }

    privacy = [
        true,
        false
    ]

    selectHandler = (e) => {
        if (e.target.innerText === 'Public') {
            this.setState({
                privacyStatus: true,
                editMode: false
            }, () => {
            this.props.playlist.private = this.state.privacyStatus
            this.props.updatePowerHour(this.props.playlist.id, this.props.playlist)
            })
        } else if (e.target.innerText === 'Private') {
            this.setState({
                privacyStatus: false,
                editMode: false
            }, () => {
            this.props.playlist.private = this.state.privacyStatus
            this.props.updatePowerHour(this.props.playlist.id, this.props.playlist)
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.editMode ?
                    <>
                        <Dropdown
                            defaultVal={this.state.privacyStatus}
                            onChange={this.selectHandler}
                            options={this.privacy}
                            className={this.props.className + " focus:outline-none"}
                        />
                        <div
                            className="py-4"
                        >
                            <button
                                className="ml-2 py-1 px-3 rounded-full bg-black text-white focus:outline-none"
                                onClick={() => this.setState({editMode: false})}
                            >Cancel</button>
                        </div>
                    </>
                    :
                <div
                    onClick={() => this.setState({editMode: true})}
                    className={this.props.className}
                >
                    Privacy: {this.state.privacyStatus ? "Public" : "Private"}</div>
                }
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = {
    updatePowerHour
}

export default connect(null, mapDispatchToProps)(ClickToEditStatusPrivacy)