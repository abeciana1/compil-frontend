import React from 'react';

class PlaylistCreator extends React.Component {

    state = {
        title: "",
        image: "",
        description: "",
        status: "",
        private: false,
        showStatusOptions: false,
    }

    //! statuses - draft, unpublished, published

    clickOptions = (e) => {
        e.preventDefault();

        this.setState({showStatusOptions: !this.state.showStatusOptions})
    }

    render() {

        return (
            <React.Fragment>
                <div className="overflow-scroll py-5 px-10">
                    <form className="">
                        <div>
                            <label>Title:</label>
                            <br/>
                            <input
                                className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                                type="text"
                                name="title"
                                placeholder="Title"
                            />
                        </div>
                        <div className="pt-5">
                            <label>Image:</label>
                            <br />
                            <p>upload field</p>
                        </div>
                        <div className="pt-5">
                            <label>Description:</label>
                            <textarea
                                type="textarea"
                                name="description"
                                className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                                placeholder="Description"
                            />
                        </div>
                        <div className="pt-5">
                            <label>Status:</label>
                            <br/>
                            <button
                                onClick={this.clickOptions}
                                // onClick={() => this.state.setState({showStatusOptions: !this.state.showStatusOptions})}
                                style={{"backgroundColor":"#ffffff"}}
                                className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                            >{this.state.status.length > 0 ? this.state.status : "Status"}</button>
                            {this.state.showStatusOptions ?
                            <div
                                className="flex flex-col inset-1/4 z-50 rounded-xl mt-5 p-3 divide-y divide-black w-1/4 mx-auto"
                                style={{ "backgroundColor": "#ffffff" }}>
                                <div className="py-1 cursor-pointer">Draft</div>
                                <div className="py-1 cursor-pointer">Unpublished</div>
                                <div className="py-1 cursor-pointer">Published</div>
                            </div>    
                            : null}
                        </div>
                        <div className="pt-5">
                            <label>Privacy:</label>
                            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2">
                                <div>
                                    <input
                                        type="radio"
                                        name="privacy"
                                        value="public"
                                    />
                                <label className="pl-5">Public</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        nam="privacy"
                                        value="private"
                                    />
                                    <label className="pl-5">Public</label>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <input
                                type="submit"
                                className="text-white bg-red px-3 py-1 md:col-start-4 md:col-end-5 rounded-full focus:outline-none text-xl"
                            />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default PlaylistCreator