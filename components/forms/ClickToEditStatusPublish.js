import React, {Fragment, useState} from 'react';

import { connect } from 'react-redux';
import { updatePowerHour } from '../../redux/actions/playlist-actions'
import Dropdown from '../utils/Dropdown'

// * Use for updating playlist status or privacy

class ClickToEditStatusPublish extends React.Component {

    state = {
        publishStatus: this.props.publish,
        className: this.props.className,
        editMode: false
    }

    publish = [
        'Draft',
        'Published'
    ]

    selectHandler = (e) => {
        console.log(e);
        this.setState({
            publishStatus: e.target.innerText,
            editMode: false
        }, () => {
            this.props.playlist.status = this.state.publishStatus;
            this.props.updatePowerHour(this.props.playlist.id, this.props.playlist)
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.editMode ?
                    <>
                        <Dropdown
                            defaultVal={this.state.publishStatus}
                            onChange={this.selectHandler}
                            options={this.publish}
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
                    className={this.props.className + " capitalize"}
                >
                    Privacy: {this.state.publishStatus}</div>
                }
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = {
    updatePowerHour
}

export default connect(null, mapDispatchToProps)(ClickToEditStatusPublish)