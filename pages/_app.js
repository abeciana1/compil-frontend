import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'

// import Head from 'next/head'
import React from 'react'
import HeadTag from '../components/utils/Header'
import NavBar from '../components/utils/NavBar'
import {useRouter} from 'next/router'
import tailwindcss from '../tailwind.config.js'

//! redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../redux/reducers'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  // console.log(router)
// console.log(tailwindcss.theme.extend.screens.xs)

  const store = createStore(
    rootReducer
  )

  return (
    <Provider store={store}>
      <React.Fragment>
        <HeadTag />
        <NavBar />
        <Component {...pageProps} />
      </React.Fragment>
    </Provider>
  )
}

export default MyApp
