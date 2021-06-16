import '../styles/globals.css'

// import Head from 'next/head'
import React, {useEffect} from 'react'
import HeadTag from '../components/utils/Header'
import NavBar from '../components/utils/NavBar'
import { wrapper } from '../redux/store'

function MyApp({ Component, pageProps }) {

  return (
    <React.Fragment>
          <HeadTag />
          <NavBar />
          <Component {...pageProps}  />
      </React.Fragment>
  )
}


export default wrapper.withRedux(MyApp)