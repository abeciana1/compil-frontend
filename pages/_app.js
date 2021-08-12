import '../styles/globals.css'
import '../styles/playlist.css'

// import Head from 'next/head'
import React, {useEffect} from 'react'
import HeadTag from '../components/utils/Header'
import NavBar from '../components/utils/NavBar'
import { wrapper } from '../redux/store'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  
  // const router = useRouter()
  // useEffect(() => {

  // }, [])

  return (
    <React.Fragment>
      <HeadTag />
      <NavBar />
      <Component {...pageProps} />
    </React.Fragment>
  )
}


export default wrapper.withRedux(MyApp)

//TODO Add route / component restrictions to only signed in user
// pages/_app.js
// import {React, useContext} from 'react'
// import Home from "index.js";
// import { useRouter } from "next/router";
// import { AppState } from "components/app-state"; 

// function MyApp({ Component, pageProps }) {
//     const appState = useContext(AppState);
//     const user = appState.user;
//     const role = user.role;
//     let allowed = true;
//     const router = useRouter();
//     if (router.pathname.startsWith("/employee") && role !== "employee") {
//       allowed = false;
//     }
//     if (router.pathname.startsWith("/customer") && role !== "customer") {
//       allowed = false;
//     }
//     const ComponentToRender = allowed ? Component : Home; 
//     return <ComponentToRender {...pageProps} />
// }

// export default MyApp