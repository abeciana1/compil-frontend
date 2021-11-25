import React from 'react';
import Head from 'next/head'
import ResetPasswordForm from '../components/forms/ResetPasswordForm'
import { useRouter } from 'next/router'

const ForgotPassword = (props) => {

    const router = useRouter()

    return (
        <React.Fragment>
            <Head>
                <title>Compil | Forgot Password</title>
            </Head>
            <div className="text-center">
                <aside className="text-8xl md:text-9xl text-white inline z-10">Forgot Password</aside>
            </div>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-1 place-items-center place-content-start z-0 -mb-20">
                <img
                    src={"/static/images/music-login.svg"}
                    alt="Login Screen"
                    className="w-12/12"
                />
                <ResetPasswordForm />
            </section>
        </React.Fragment>
    )
}

export default ForgotPassword