import '../styles/globals.css'
// import Head from 'next/head'
import React from 'react'
import Header from '../components/utils/Header'
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  console.log(router)

  

  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
