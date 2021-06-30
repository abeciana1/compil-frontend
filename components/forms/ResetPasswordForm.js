import React from 'react';
import { connect } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";

class ResetPasswordForm extends React.Component {

    state = {
        password: "",
        matchedPassword: "",
        matched: false
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        //! send this.state.password to backend
    }

    render() {
        return (
            <React.Fragment>
                <div className="w-4/5 lg:w-12/12 place-self-center">
                    <div style={{ "zIndex": "3", "backgroundColor": "#EFEFEF", "margin": "auto" }}>
                        <form className="p-10 md:p-14 lg-p-10" onSubmit={this.submitHandler}>
                            <label>Password</label>
                            <input
                                name="password"
                                type="password"
                                value={this.state.password}
                                className="mt-2 block w-full py-3 px-4 rounded-md border-red-500 focus:outline-none w-4/5"
                                placeholder="Password"
                                onChange={this.changeHandler}
                            />
                            <br/>
                            <br />
                            <label>Confirm Password</label>
                            <input
                                name="matchedPassword"
                                type="password"
                                value={this.state.matchedPassword}
                                className="mt-2 block w-full py-3 px-4 rounded-md border-red-500 focus:outline-none w-4/5"
                                placeholder="Password"
                                onChange={this.changeHandler}
                            />
                            <br />
                            <br />
                            {this.state.password === this.state.matchedPassword && this.state.password.length > 0  && this.state.matchedPassword.length > 0 ?
                            <>
                                <span>
                                    <div>Password Matched</div>        
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="#8AEA92" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <br/>
                                <br />
                                <input 
                                    type="submit"
                                    className="text-white bg-red px-3 py-1 md:col-start-4 md:col-end-5 rounded-full focus:outline-none text-xl"
                                />
                            </>
                            :
                            <ClipLoader
                                color="#28262C"
                                loading={true}
                                size={25}
                            />
                            }
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}



export default connect(null, null)(ResetPasswordForm)