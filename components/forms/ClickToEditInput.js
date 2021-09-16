import React from 'react';

import { connect } from 'react-redux';

// TODO create playlist update action 

class ClickToEditInput extends React.Component {

    state = {
        text: this.props.text,
        className: this.props.className,
        editMode: false
    }

    textHandler = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
    }

    render() {
        console.log(this.state.editMode)
        return (
            <React.Fragment>
                {this.state.editMode ?                    
                    <form
                        onSubmit={this.submitHandler}
                    >
                        <input
                            name="text"
                            value={this.state.text}
                            onChange={this.textHandler}
                            className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                        />
                        <div
                            className="flex py-4"
                        >
                            <input
                                className="py-1 px-3 rounded-full bg-black text-white cursor-pointer"
                                type="Submit"
                                value="Save"
                            />
                            <button
                                className="ml-2 py-1 px-3 rounded-full bg-black text-white"
                                onClick={() => this.setState({editMode: false})}
                            >Cancel</button>
                        </div>
                    </form>
                    :
                    <div
                        className={this.state.className}
                        onClick={() => this.setState({editMode: true})}
                    >
                        {this.state.text}
                    </div>
                }
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(ClickToEditInput)