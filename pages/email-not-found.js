import React from 'react';
import Head from 'next/head'

const EmailNotFound = () => {

    return (
        <React.Fragment>
            <Head>
                <title>Compil</title>
            </Head>
            <div className="text-center mt-44">
                <aside className="text-8xl md:text-9xl text-white inline z-10">Email Not Found</aside>
                <br/>
                <br />
                <a href="/signup" alt="Compil Signup">
                    <aside className="text-8xl md:text-9xl text-white inline z-10 underline">Signup here</aside>
                </a>
            </div>
        </React.Fragment>
    )
}

export default EmailNotFound