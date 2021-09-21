import React from 'react';

class YouTubeSearchForm extends React.Component {

    state = {
        searchTerm: ''
    }

    changeHandler = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        
        return (
            <React.Fragment>
                <form
                    className="py-4 lg:w-1/2"
                >
                    <input
                        type="text"
                        name="searchTerm"
                        value={this.state.searchTerm}
                        placeholder="Search"
                        className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5 border-2 border-black"
                        onChange={this.changeHandler}
                    />
                </form>
            </React.Fragment>
        )
    }
}

export default YouTubeSearchForm