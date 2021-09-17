import React, {Fragment, useState} from 'react';

import { connect } from 'react-redux';
import { updatePowerHour } from '../../redux/actions/playlist-actions'
import Dropdown from '../utils/Dropdown'

// * Use for updating playlist status or privacy

class ClickToEditStatusPrivacy extends React.Component {
// const ClickToEditStatusPrivacy = (props) => {

    state = {
        privacyStatus: this.props.privacy,
        className: this.props.className,
        editMode: true
    }

    privacy = [
        true,
        false
    ]

    selectHandler = (e) => {
        console.log(e);
        this.setState({
            privacyStatus: e,
            editMode: false
        })
    }

    render() {
        
        return (
            <React.Fragment>
                {this.state.editMode ?
                    <Dropdown
                        defaultVal={this.state.privacyStatus}
                        onChange={this.selectHandler}
                        options={this.privacy}
                        className="pt-4 text-black text-xl focus:outline-none"
                    /> 
                    :
                <div
                    onClick={() => this.setState({editMode: true})}
                    className={this.props.className}
                >
                    Privacy: {this.state.privacy ? "Public" : "Private"}</div>
                }
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = {
    updatePowerHour
}

export default connect(null, mapDispatchToProps)(ClickToEditStatusPrivacy)