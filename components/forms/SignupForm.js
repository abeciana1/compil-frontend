import React from 'react';
import { connect } from 'react-redux'
import { signupUser } from '../../redux/actions/user-actions'

class SignupForm extends React.Component {

    state = {
        f_name: "",
        l_name: "",
        email: "",
        password: "",
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    submitHandler = (e) => {
        e.preventDefault();
        // TODO add step for email verification
        // * if true => signup user via action
        this.props.signupUser(this.state)
        e.target.reset()
    }

    render() {
        return (
            <React.Fragment>
            <div className="w-4/5 lg:w-12/12 place-self-center">
                <div style={{"zIndex": "3", "backgroundColor": "#EFEFEF", "margin": "auto"}}>
                    <form className="p-10 md:p-4 lg-p-10" onSubmit={this.submitHandler}>
                    <label>First Name:</label>
                        <br/>
                        <input
                            name="f_name"
                            type="text"
                            // className="form-input rounded-full mt-2 w-4/5 py-3 px-4 block border-#EAE9EC"
                            className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                            placeholder="First Name"
                            onChange={this.changeHandler}
                        />
                        <br/>
                        <label>Last Name:</label>
                        <br/>
                        <input
                            name="l_name"
                            type="text"
                            // className="form-input rounded-full mt-2 w-4/5 py-3 px-4 block border-#EAE9EC"
                            className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                            placeholder="Last Name"
                            onChange={this.changeHandler}
                        />
                        <br/>
                        <label>Email:</label>
                        <br/>
                        <input
                            name="email"
                            type="email"
                            // className="form-input rounded-full mt-2 w-4/5 py-3 px-4 block border-#EAE9EC"
                            className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                            placeholder="Email"
                            onChange={this.changeHandler}
                        />
                        <br/>
                        {/* <input type="email" className="mt-1 block w-full py-3 px-4 rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="john@example.com"></input> */}
                        <label>Password:</label>
                        <input
                            name="password"
                            type="password"
                            // className="form-input rounded-full mt-1 w-full py-3 px-4 block border-#EAE9EC"
                            className="mt-2 block w-full py-3 px-4 rounded-md border-red-500 focus:outline-none w-4/5"
                            placeholder="Password"
                            onChange={this.changeHandler}
                        />
                        {/* <input type="email" class="form-input px-4 py-3 rounded-full"/> */}
                        <br/>
                        {/* <br/> */}
                        <input 
                            type="submit"
                            className="text-white bg-red px-3 py-1 md:col-start-4 md:col-end-5 rounded-full focus:outline-none text-xl"
                        />
                    </form>
                </div>
                <br/>
            </div>
        </React.Fragment>
        )
    }
}

const mapDispatchToProps = {
    signupUser
}

export default connect(null, mapDispatchToProps)(SignupForm)