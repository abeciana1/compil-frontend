import Head from 'next/head'
import React from 'react'
import LoginForm from '../components/forms/LoginForm'

const Login = () => {
    
    return (
        <React.Fragment>
        <Head>
            <title>Compil | Login</title>
        </Head>
        <section className="flex flex-col md:flex-row items-center justify-evenly">
        {/* <section className="grid grid-cols-3 place-items-center place-content-center"> */}
            <aside className="flex text-9xl text-white text-left hidden md:inline transform -rotate-90 justify-self-start">Login</aside>
            {/* <div className="text-center"> */}
            <h1 className="text-5xl inline sm:hidden">Login</h1>
            <img
                src={"/static/images/music-login.svg"}
                alt="Login Screen"
                className="w-10/12 lg:w-5/12"
                // className="w-full"
            />
            {/* </div> */}
            <LoginForm/>
        </section>
        {/* </section> */}
        </React.Fragment>
    )
}

export default Login