import Head from 'next/head'
import React from 'react'
import LoginForm from '../components/forms/LoginForm'

const Login = () => {
    
    return (
        <React.Fragment>
        <Head>
            <title>Compil | Login</title>
        </Head>
        <section className="flex flex-col sm:flex-wrap md:flex-row items-center justify-evenly">
        {/* <section className="grid grid-cols-3 place-items-center place-content-center"> */}
            <aside className="flex text-9xl text-white text-left md:text-center hidden md:inline lg:transform lg:-rotate-90 justify-self-start">Login</aside>
            {/* <div className="text-center"> */}
            <h1 className="text-5xl inline sm:hidden">Login</h1>
            <img
                src={"/static/images/music-login.svg"}
                alt="Login Screen"
                className="w-10/12 md:w-5/12 lg:w-5/12"
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