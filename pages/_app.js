import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'

// import Head from 'next/head'
import React from 'react'
import HeadTag from '../components/utils/Header'
import NavBar from '../components/utils/NavBar'
// import {useRouter} from 'next/router'
// import tailwindcss from '../tailwind.config.js'


//! redux
// import { store } from '../redux/store'
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
