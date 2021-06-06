import Head from 'next/head'
import React from 'react'


const About = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Compil | About</title>
            </Head>
            <section className="">
                <aside className="flex text-9xl text-white fill-black hidden md:inline absolute">About</aside>
            </section>
        </React.Fragment>
    )
}

export default About