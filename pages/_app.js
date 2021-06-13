import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'

// import Head from 'next/head'
import React from 'react'
import HeadTag from '../components/utils/Header'
import NavBar from '../components/utils/NavBar'
import {useRouter} from 'next/router'
import tailwindcss from '../tailwind.config.js'


//! redux
import { store } from '../redux/store'
// import { Provider } from 'react-redux'
import { wrapper } from '../redux/store'
// import { createStore } from 'redux'
// import rootReducer from '../redux/reducers'

function MyApp({ Component, pageProps }) {

  // let redux = store.getState()

  // console.log("REDUX", redux)

  return (
    // <Provider store={store}>
      <React.Fragment>
        <HeadTag />
        <NavBar />
        <Component {...pageProps}  />
      </React.Fragment>
    // </Provider>
  )
}

export default wrapper.withRedux(MyApp)
