import Head from 'next/head'
import React from 'react'


const About = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Compil | About</title>
            </Head>
            <div className="text-center">
                <aside className="text-8xl md:text-9xl text-white inline z-10">About</aside>
            </div>
        </React.Fragment>
    )
}

export default About