import Head from 'next/head'
import React, {useState}from 'react'
import LoginForm from '../components/forms/LoginForm'

import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { wrapper } from '../redux/store'
// import { loginUser } from '../redux/actions/user-actions'
// import { store } from '../redux/store'

const Login = (props) => {
    
    const router = useRouter()

    if (props.user.currentUser) {
        router.push("/dashboard")
    }

    const [forgotPass, setForgotPass] = useState(false)
    
    return (
        <React.Fragment>
        <Head>
            <title>Compil | Login</title>
        </Head>
        {/* <section className="flex flex-col sm:flex-wrap md:flex-row items-center justify-evenly"> */}
        <div className="text-center">
        <aside className="text-8xl md:text-9xl text-white inline z-10">Login</aside>
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-1 place-items-center place-content-start z-0 -mb-20">
        {/* <section className="grid grid-cols-3 place-items-center place-content-center"> */}
            {/* <aside className="text-9xl text-white text-left md:text-center hidden lg:inline lg:transform lg:-rotate-90 justify-self-center ml-20 mb-3">Login</aside> */}
            {/* <aside className="text-9xl text-white text-left md:text-center hidden lg:inline justify-self-center ml-20 mb-3">Login</aside> */}
            {/* <div className="text-center"> */}
            {/* <aside className="text-8xl md:text-9xl text-white text-center inline">Login</aside> */}
            <img
                src={"/static/images/music-login.svg"}
                alt="Login Screen"
                className="w-12/12"
            />
                <LoginForm forgotPassword={router.asPath === "/login?forgot-password" || forgotPass ? true : false} setForgotPass={setForgotPass} />
        </section>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, null)(Login)