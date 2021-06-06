import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'

// import Head from 'next/head'
import React from 'react'
import HeadTag from '../components/utils/Header'
import NavBar from '../components/utils/NavBar'
import {useRouter} from 'next/router'
import tailwindcss from '../tailwind.config.js'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  // console.log(router)
// console.log(tailwindcss.theme.extend.screens.xs)
  

  return (
    <React.Fragment>
      <HeadTag />
      <NavBar />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
