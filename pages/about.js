import Head from 'next/head'
import React from 'react'
import Site from '../manifest.json'


const About = () => {

    console.log(Site)

    return (
        <React.Fragment>
            <Head>
                <title>{Site.appName} | About</title>
            </Head>
            <h1>About</h1>
        </React.Fragment>
    )
}

export default About