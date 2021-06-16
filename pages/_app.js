import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'

// import Head from 'next/head'
import React, {useEffect} from 'react'
import HeadTag from '../components/utils/Header'
import NavBar from '../components/utils/NavBar'
import { wrapper } from '../redux/store'
// import {useRouter} from 'next/router'
// import tailwindcss from '../tailwind.config.js'
// import { createStore, compose, applyMiddleware } from 'redux'
// import { connect, Provider } from 'react-redux'
import { checkUser } from '../redux/actions/user-actions'

// import rootReducer from '../redux/reducers'
// import { composeWithDevTools } from 'redux-devtools-extension'
// // import { createWrapper } from 'next-redux-wrapper'
// import thunk from 'redux-thunk'

// const composeEnhancer = compose(
//     composeWithDevTools(applyMiddleware(thunk))
// )


    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

// export const store = createStore(
//     rootReducer,
//     composeEnhancer
// )


//! redux
// import { store } from '../redux/store'


// const checking = () => {
//   if (localStorage.getItem('isLoggedIn')) {
//       console.log("login")
//       checkUser()
//     }
// }

function MyApp({ Component, pageProps }) {

  // console.log(pageProps)

  // useEffect(() => {
  //   if (localStorage.getItem('compilLogged')) {
  //     console.log("login from _app")
  //     checkUser()
  //   } else {
  //     console.log("hello")
  //   }
  // })
  // console.log(localStorage.getItem("isLoggedIn"))
  // checkUser()

  // console.log(checkUser)


  return (
    <React.Fragment>
  
    {/* <Provider store={store}> */}
          <HeadTag />
          <NavBar />
          <Component {...pageProps}  />
    {/* // </Provider> */}
    {/* </> */}
      </React.Fragment>
  )
}

// const getStaticProps = wrapper.getStaticProps((state) => {
//   console.log(state)
// })

// const mapStateToProps = (state) => {
//   return state
// }

// const mapDispatchToProps = {
//   checkUser
// }


export default wrapper.withRedux(MyApp)
// export default connect(null, mapDispatchToProps)(MyApp)

// export default compose(wrapper.withRedux, connect(null, mapDispatchToProps))(MyApp)
