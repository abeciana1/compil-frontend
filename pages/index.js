// import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link'
// import styles from '../styles/Home.module.css'
// import Site from '../manifest.json'
// import HeadTag from '../components/utils/Header'
// import VideoPlayer from '../components/utils/VideoPlayer'
// // import ReactPlayer from 'react-player'
// import React, {useState} from 'react'
// import { connect } from 'react-redux'
// import { store } from '../redux/store'
// import { wrapper } from '../redux/store'
// // import { connect } from 'react-redux'

// function Home(props) {
//     // console.log(wrapper.getStaticProps)
//   console.log(props)

//   // let user = props.reduxStore.user
//   // console.log(user.test)
//   // const [currentVid, setCurrentVid] = useState(null)
//   // const [currentVid, setCurrentVid] = useState(`/static/videos/${Math.floor(Math.random() * 10) + 1}.mp4`)
//   // const [currentVid, setCurrentVid] = useState(props.firstVideo)

//   const currentVid = props.firstVideo
//   // console.log(props)

//   // const playAnotherOne = () => {
//   //   // console.log("ended")
//   //   return setCurrentVid(`/static/videos/${Math.floor(Math.random() * 10) + 1}.mp4`)
//   //   // setCurrentVid(`/static/videos/${Math.floor(Math.random() * 10) + 1}.mp4`)
//   // }

//   return (
//     // <div className={styles.container}>
//     <div>
//       <HeadTag />
//       <Head>
//         <title>{Site.appName}</title>
//         <meta name="description" content="Drop the needle!" />
//         <link rel="stylesheet" href="https://use.typekit.net/ntq1bol.css"></link>
//       </Head>
//       <main className="text-center space-y-0">
//         <h1 className="text-5xl font-medium md:text-7xl">
//             Drop the needle
//         </h1>
//         <br/>
//         <br />
//         {
//           props.user.currentUser ?
//             <h1>hello</h1>
//             :
//             null
//         }
//         <div className="text-4xl text-center md:text-5xl">
//           <h2>Discover. Create. Share.</h2>
//           {/* <h2>Create. </h2>
//           <h2>Share.</h2> */}
//         </div>
//         <br/>
//         <br/>
//         <section className="grid grid-cols-2 md:grid-cols-6 gap-4 m-4">
//         <Link href="/login">
//         {/* //!f */}
//           <button className="text-black bg-blue-light p-2 md:col-start-3 md:col-end-4 rounded-full focus:outline-none text-xl">
//             Start Curating!
//           </button>
//         </Link>
//           <Link href="/signup" alt="Create An Account">
//             <button className="text-white bg-red p-2 md:col-start-4 md:col-end-5 rounded-full focus:outline-none text-xl">
//               Signup
//             </button>
//           </Link>
//         </section>
//         <br/>
//         <br/>
//         <section className="flex items-center flex-col-reverse md:flex-row space-y-0 justify-around">
//             <img 
//               src={"/static/images/music-art.svg"}
//               alt="Music Art"
//               className="w-10/12 lg:w-5/12"
//               />
//               {/* <VideoPlayer currentVid={props.firstVideo} /> */}
//               <VideoPlayer currentVid={currentVid} />
//               {/* <VideoPlayer /> */}
//         </section>
//         <br/>
//         <br/>
//         <h2 className="text-5xl">
//           Recent Playlists
//         </h2>
//       </main>
//       <br />
//       {/* <div className="relative w-full"> */}
//         {/* <div className="absolute bottom-0"> */}
//           <footer className={styles.footer}>
//             <a
//               href="https://www.alexbeciana.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Created by{' '}Alex Beciana{" "}
//               <span className="flex items-center">
//                 <Image src="https://www.alexbeciana.com/static/profile-pic-942ff21fde4f338dc11fe09b617b1130.png" alt="Vercel Logo" width={35} height={35} />
//               </span>
//             </a>
//           </footer>
//         </div>
//       // </div>
//     // </div>
//   )
// }

// export const getServerSideProps = wrapper.getServerSideProps(store =>
//     ({preview}) => {
        
//       let reduxStore = store.getState()
      
//       let firstVideo = "/static/videos/5.mp4"
      
//       return {
//         props: {
//           firstVideo: firstVideo,
//           reduxStore: reduxStore
//         }
//       }
//     }
// );


// // export const getStaticProps = () => {
// //   // console.log(wrapper)

// //   // const mapStateToProps = (state) => {
// //   //   return state
// //   // }

// //   let firstVideo = "/static/videos/5.mp4"

// //   return {
// //     props: {
// //       firstVideo: firstVideo,
// //       // reduxStore: mapStateToProps
// //       // signedIn: true
// //     }
// //   }
// // }

// // export const getStaticProps = wrapper.getStaticProps(
// //   async ({ store }) => {
// //     console.log(store)
// //   })

// // export const getStaticProps = wrapper.getStaticProps(
// //   async ({ store }) => {
// //   console.log(store)
  
// //   let firstVideo = "/static/videos/5.mp4"
// //   return {
// //     props: {
// //       firstVideo: firstVideo,
// //       // reduxStore: reduxStore
// //       // signedIn: true
// //     }
// //   }
// // })

// // async (context)
// // export default connect(mapStateToProps, null)(Home)

// const mapStateToProps = (state) => {
//   return state
// }

// // export default Home
// export default connect(mapStateToProps, null)(Home)

import HomePage from '../components/utils/home'


const Home = (props) => {
  return (
    <HomePage/>
  )
}

export default Home