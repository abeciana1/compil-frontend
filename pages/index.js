import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Site from '../manifest.json'
import HeadTag from '../components/utils/Header'
import VideoPlayer from '../components/utils/VideoPlayer'
import ReactPlayer from 'react-player'
import React, {useState} from 'react'


export default function Home() {

  const vids = [
    "https://www.youtube.com/watch?v=st747WQNvEs",
    "https://www.youtube.com/watch?v=SqjKAXKG5e8",
    "https://www.youtube.com/watch?v=PGYIRu-mJ4s",
    "https://www.youtube.com/watch?v=X3rNjkPfOqc",
    "https://www.youtube.com/watch?v=hojVcCB2Xq0",
    "https://www.youtube.com/watch?v=WcgwB9y9hRE",
    "https://www.youtube.com/watch?v=j1yp1UZWKVc",
    "https://www.youtube.com/watch?v=b9ywNbKz-Hk",
    "https://www.youtube.com/watch?v=-qB58UH4v2I",
    "https://www.youtube.com/watch?v=wEzfbq6QINk"
  ]

  // const [currentVid, setCurrentVid] = useState(null)
  const [currentVid, setCurrentVid] = useState(vids[Math.floor(Math.random() * 9) + 1])

  const playAnotherOne = () => {
    console.log('ended')
    return setCurrentVid(vids[Math.floor(Math.random() * 9) + 1])
  }

  return (
    // <div className={styles.container}>
    <div>
      <HeadTag />
      <Head>
        <title>{Site.appName}</title>
        <meta name="description" content="Drop the needle!" />
        <link rel="stylesheet" href="https://use.typekit.net/ntq1bol.css"></link>
      </Head>
      <main className="text-center">
        <h1 className="text-5xl md:text-7xl">
            Drop the needle
        </h1>
        <br/>
        <br/>
        <div className="flex items-center flex-col md:flex-row">
          <img 
            src={"/static/images/music-art.svg"}
            alt="Music Art"
            className="w-6/12"
            />
            <VideoPlayer currentVid={currentVid} playAnotherOne={playAnotherOne} />
        </div>
      </main>
      <br />
      {/* <div className="relative w-full"> */}
        {/* <div className="absolute bottom-0"> */}
          <footer className={styles.footer}>
            <a
              href="https://www.alexbeciana.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Created by{' '}Alex Beciana{" "}
              <span className="flex items-center">
                <Image src="https://www.alexbeciana.com/static/profile-pic-942ff21fde4f338dc11fe09b617b1130.png" alt="Vercel Logo" width={35} height={35} />
              </span>
            </a>
          </footer>
        </div>
      // </div>
    // </div>
  )
}
