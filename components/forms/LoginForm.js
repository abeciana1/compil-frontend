import React from 'react'
import { loginUser } from '../../redux/actions/user-actions'
// import { store } from '../../redux/store'
import { connect } from 'react-redux'
import ForgotPassForm from './ForgotPassForm'

class LoginForm extends React.Component {
    
    state = {
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
        this.props.loginUser(this.state)
        e.target.reset()
    }

    render() {
        return (
            <React.Fragment>
                <div className="w-4/5 lg:w-12/12 place-self-center">
                    <div className="rounded-xl" style={{"zIndex": "3", "backgroundColor": "#EFEFEF", "margin": "auto"}}>
                { this.props.forgotPassword ?
                        <ForgotPassForm setForgotPass={this.props.setForgotPass} />
                        :
                        <form className="p-10 md:p-14 lg-p-10" onSubmit={this.submitHandler}>
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
                                className="text-white bg-red px-3 py-1 md:col-start-4 md:col-end-5 rounded-full focus:outline-none text-xl cursor-pointer"
                            />
                            <div className="pt-5 cursor-pointer" onClick={() => this.props.setForgotPass(true)}>Forgot your password?</div>
                        </form>
                    }
                    </div>
                    <br />
                </div>
                {/* <h1 className="text-5xl">Login</h1> */}
                {/* <div className="bg-gray-600 w-4/12 m-auto"> */}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)