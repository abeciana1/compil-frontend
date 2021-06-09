import Head from 'next/head'
import React from 'react'
import LoginForm from '../components/forms/LoginForm'

const Login = () => {
    
    return (
        <React.Fragment>
        <Head>
            <title>Compil | Login</title>
        </Head>
        {/* <section className="flex flex-col sm:flex-wrap md:flex-row items-center justify-evenly"> */}
        <section className="grid grid-cols-1 lg:grid-cols-3 mx-8 mt-10 gap-1">
        {/* <section className="grid grid-cols-3 place-items-center place-content-center"> */}
            <aside className="text-9xl text-white text-left md:text-center hidden lg:inline lg:transform lg:-rotate-90 justify-self-center ml-20 mb-3">Login</aside>
            {/* <div className="text-center"> */}
            <aside className="text-8xl md:text-9xl text-white text-center inline lg:hidden">Login</aside>
            <img
                src={"/static/images/music-login.svg"}
                alt="Login Screen"
                className="w-12/12 md:-ml-2 lg:-ml-48 justify-self-center place-self-center"
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