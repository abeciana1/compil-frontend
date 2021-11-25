import React from 'react';
import { connect } from 'react-redux'
import { createPlaylist } from '../../redux/actions/user-actions'

class PlaylistCreator extends React.Component {

    state = {
        title: "",
        pic: null,
        description: "",
        status: "",
        private: false,
        user_id: this.props.user.currentUser.id,
        showStatusOptions: false,
    }

    //! statuses - draft, unpublished, published

    clickOptions = (e) => {
        e.preventDefault();
        this.setState({showStatusOptions: !this.state.showStatusOptions})
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    radioHandler = (e) => {
        if (e.target.value === "public") {
            this.setState({
                private: false
            })
        } else if (e.target.value === "private") {
            this.setState({
                private: true
            })
        }
    }

    selectHandler = (e) => {
        e.preventDefault();
        console.log(this.props)
        this.setState({
            status: e.target.textContent,
            showStatusOptions: !this.state.showStatusOptions
        })
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
        this.props.createPlaylist({
            title: this.state.title,
            pic: this.state.pic,
            description: this.state.description,
            status: this.state.status,
            private: this.state.private,
            user_id: this.props.user.currentUser.id
        })
    }

    render() {
        // console.log(this.props.user.currentUser)
        // console.log(this.state.pic)
        return (
            <React.Fragment>
                <div className="overflow-auto py-5 px-10">
                    <form className="" onSubmit={this.submitHandler}>
                        <div>
                            <label>Title:</label>
                            <br/>
                            <input
                                className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                                type="text"
                                name="title"
                                placeholder="Title"
                                onChange={this.changeHandler}
                                required
                            />
                        </div>
                        <div className="pt-5">
                            <label>Power Hour Cover:</label>
                            <br />
                            <input
                                type="file"
                                style={{ "backgroundColor": "#ffffff" }}
                                name="pic"
                                accept=".png,.jpg,.svg,.jpeg"
                                className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                                onChange={this.pictureHandler}
                                required
                            />
                        </div>
                        <div className="pt-5">
                            <label>Description:</label>
                            <br />
                            <textarea
                                type="textarea"
                                name="description"
                                className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                                placeholder="Description"
                                onChange={this.changeHandler}
                                required
                            />
                        </div>
                        <div className="pt-5">
                            <label>Status:</label>
                            <br/>
                            <button
                                onClick={this.clickOptions}
                                style={{ "backgroundColor": "#ffffff" }}
                                value={this.state.status}
                                className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                            >{this.state.status.length > 0 ? this.state.status : "Status"}</button>
                            {this.state.showStatusOptions ?
                            <div
                                className="flex flex-col inset-1/4 z-50 rounded-xl mt-5 p-3 divide-y divide-black w-1/4 mx-auto"
                                style={{ "backgroundColor": "#ffffff" }}>
                                <div className="py-1 cursor-pointer" onClick={this.selectHandler}>Draft</div>
                                <div className="py-1 cursor-pointer" onClick={this.selectHandler}>Unpublished</div>
                                <div className="py-1 cursor-pointer" onClick={this.selectHandler}>Published</div>
                            </div>    
                            : null}
                        </div>
                        <div className="pt-5">
                            <label>Privacy:</label>
                            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2">
                                <div>
                                    <input
                                        type="radio"
                                        name="private"
                                        value="public"
                                        checked={this.state.private ? "" : "checked"}
                                        onChange={this.radioHandler}
                                    />
                                <label className="pl-5">Public</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="private"
                                        value="private"
                                        checked={this.state.private ? "checked" : ""}
                                        onChange={this.radioHandler}
                                    />
                                    <label className="pl-5">Private</label>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            {this.state.status.length > 0 ? null : <p className="text-red">Don't forget to choose a status!</p> }
                            <input
                                type="submit"
                                disabled={this.state.status === 'Status' ? true : false}
                                className="text-white bg-red px-3 py-1 md:col-start-4 md:col-end-5 rounded-full focus:outline-none text-xl"
                            />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    createPlaylist
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistCreator)