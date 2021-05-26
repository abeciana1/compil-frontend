import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'

// import Head from 'next/head'
import React from 'react'
import HeadTag from '../components/utils/Header'
import NavBar from '../components/utils/NavBar'
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  // console.log(router)

  

  return (
    <React.Fragment>
      <HeadTag />
      <NavBar />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
