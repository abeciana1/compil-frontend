import React, { useState } from 'react'
import { connect } from 'react-redux'
import PlaylistSquare from '../../components/cards/PlaylistSquare'
import PlaylistCreator from '../../components/forms/PlaylistCreator'

import { useRouter } from 'next/router'

//* utils
import PageMargin from '../../components/utils/PageMargin'

// TODO Add sorting for user playlists -
    // TODO chronologically
    // TODO reverse chronologically
    // TODO title

const sortUserPlaylistsByDate = (playlists) => {

    playlists.sort((a, b) => {
        let dateA = new Date(a.created_at)
        let dateB = new Date(b.created_at)
        return dateA - dateB
    })
}

const Dashboard = (props) => {

    const { user } = props

    let router = useRouter()


    if (user.currentUser === undefined) {
        router.push('/login')
    }

    const [modal, setModal] = useState(false)

    return (
        <React.Fragment>
            {user.currentUser ?
                <PageMargin>
                    <h1 className="text-6xl">Hello, {user.currentUser.f_name.charAt(0).toUpperCase() + user.currentUser.f_name.substr(1).toLowerCase()}!</h1>
                    <div className="lg:ml-96 pt-10 lg:pt-5 pb-5">
                        {/* <div className="text-6xl flex flex-wrap md:flex-row items-stretch"> */}
                        <div className="text-6xl grid grid-cols-1 md:grid-cols-3 items-stretch mx-auto xl:flex">
                            Playlists 
                            <span className="text-lg self-center text-center pt-2 lg:pt-0 justify-self-start lg:justify-self-center xl:pl-10">
                                <button
                                    className="flex items-stretch border-2 pl-1.5 pr-2 pt-0.5 pb-0.5 lg:pl-3 lg:pr-5 lg:pt-1 lg:pb-1 rounded-full focus:outline-none"
                                    style={{ "backgroundColor": "#E54B4B", "color": "#FFFDF3" }}
                                    onClick={() => setModal(!modal)}
                                >
                                    {/* <span className="float-right pr-1 lg:pr-2 self-center"> */}
                                    <span className="pr-1 lg:pr-2 self-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                    Create a playlist
                                </button>
                            </span>
                            <span className="text-lg self-center text-center pt-2 lg:pt-0 justify-self-start lg:justify-self-center xl:pl-10">
                                <button className="flex items-stretch border-2 pl-2 pr-2 pt-0.5 pb-0.5 lg:pl-5 lg:pr-3 lg:pt-1 lg:pb-1 rounded-full focus:outline-none" style={{"backgroundColor": "#9FC2CC", "color": "#FFFDF3"}}>
                                    See all playlists
                                    <span className="float-right pl-1 lg:pl-2 self-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </button>
                            </span>
                        </div>
                    </div>
                    <section className="w-4/12 lg:fixed grid grid-flow-row grid-cols-1 text-6xl">
                        <div className="hidden lg:block">
                            <h1>Side Bar content</h1>
                            <h1>Side Bar content</h1>
                            <h1>Side Bar content</h1>
                            <h1>Side Bar content</h1>
                            <h1>Side Bar content</h1>
                            <h1>Side Bar content</h1>
                        </div>
                        {/* <section className="grid block lg:hidden grid-flow-col auto-cols-min lg:ml-96 gap-x-5 lg:gap-x-10 pb-10 overflow-x-scroll">
                        <h1 className="text-6xl lg:ml-96 pt-5 pb-5">Playlists</h1>
                            {user.currentUser.playlists.map(playlist => {
                            return (
                            <React.Fragment>
                                <PlaylistSquare playlist={playlist} />
                            </React.Fragment>)
                        })}
                    </section> */}
                        {/* lg:-ml-80 pl-2 */}
                    </section>
                    <section className="grid block grid-flow-col auto-cols-min gap-x-5 lg:ml-96 lg:gap-x-10 pb-10 overflow-x-scroll">
                    {/* <section className="grid hidden lg:block grid-flow-col auto-cols-min ml-96 gap-x-10 pb-10"> */}
                            {sortUserPlaylistsByDate(user.currentUser.playlists)}
                            {(user.currentUser.playlists).map(playlist => {
                            return (
                            <>
                                <PlaylistSquare playlist={playlist} />
                            </>
                            )
                        })}
                    </section>
                    {/* <h1 className="text-6xl ml-96 pt-5 pb-5">Favorite Artists</h1>
                    <section className="grid grid-flow-col auto-cols-min ml-96 gap-x-10 pb-10">
                            {user.currentUser.playlists.map(playlist => {
                            return (
                            <React.Fragment>
                                <PlaylistSquare playlist={playlist} />
                            </React.Fragment>)
                        })}
                    </section>
                    <h1 className="text-6xl ml-96 pt-5 pb-5">Recommendations</h1>
                    <section className="grid grid-flow-col auto-cols-min ml-96 gap-x-10 pb-10">
                            {user.currentUser.playlists.map(playlist => {
                            return (
                            <React.Fragment>
                                <PlaylistSquare playlist={playlist} />
                            </React.Fragment>)
                        })}
                    </section> */}
                </PageMargin>
                : null}
            {modal ?
                <div
                    // id="playlist-creator"
                    className="rounded-xl fixed xl:absolute container flex flex-col flex-1 items-stretch mx-auto shadow-xl z-30 w-full h-4/6 xl:h-4/6 2xl:h-2/5 md:left-1/4 md:right-1/4 md:bottom-1/4 top-32 md:w-1/2"
                    style={{"backgroundColor":"#EAE9EC"}}
                >
                        <span>
                            <div 
                                className="text-xl sm:text-3xl font-semibold pb-0 lg:pb-2 p-5 mx-5"
                                style={{"paddingLeft":"20px"}}
                            >
                            Create a playlist
                                <button onClick={() => {
                                    setModal(false)
                                    }} 
                                    className="z-40 float-right p-1.5 py-2.5 text-xl rounded-full focus:outline-none"
                                    style={{"backgroundColor":"#E54B4B"}}
                                >
                                    <img
                                        src="https://a.storyblok.com/f/113855/x/37bacd6a71/close.svg"
                                        className="w-7/12 mx-auto self-center"
                                    />
                                </button>
                            </div>
                        </span>
                        <PlaylistCreator/>
                </div> 
                : null}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, null)(Dashboard)