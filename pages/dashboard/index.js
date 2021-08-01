import React from 'react'
import { connect } from 'react-redux'
import PlaylistSquare from '../../components/cards/PlaylistSquare'

//* utils
import PageMargin from '../../components/utils/PageMargin'

const Dashboard = (props) => {

    const { user } = props

    return (
        <React.Fragment>
            {user.currentUser ?
                <PageMargin>
                    <h1 className="text-6xl">Hello, {user.currentUser.f_name.charAt(0).toUpperCase() + user.currentUser.f_name.substr(1).toLowerCase()}!</h1>
                    <div className="lg:ml-96 pt-10 lg:pt-5 pb-5">
                        <div className="text-6xl flex flex-wrap md:flex-row items-stretch">
                            Playlists 
                            <span className="text-lg lg:text-3xl self-center text-center pt-2 lg:pt-0 sm:pl-5">
                                <button className="flex items-stretch border-2 pl-1.5 pr-2 pt-0.5 pb-0.5 lg:pl-3 lg:pr-5 lg:pt-1 lg:pb-1 rounded-full focus:outline-none" style={{ "backgroundColor": "#E54B4B", "color": "#FFFDF3" }}>
                                    <span className="float-right pr-1 lg:pr-2 self-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                    Create a playlist
                                </button>
                            </span>
                            <span className="text-lg lg:text-3xl self-center text-center pt-2 lg:pt-0 sm:pl-5">
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
                    <section className="lg:fixed grid grid-flow-row grid-cols-1 lg:grid-cols-2 text-6xl">
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
                    </section>
                    <section className="grid block grid-flow-col auto-cols-min lg:ml-96 gap-x-5 lg:gap-x-10 pb-10 overflow-x-scroll">
                    {/* <section className="grid hidden lg:block grid-flow-col auto-cols-min ml-96 gap-x-10 pb-10"> */}
                            {user.currentUser.playlists.map(playlist => {
                            return (
                            <React.Fragment>
                                <PlaylistSquare playlist={playlist} />
                            </React.Fragment>)
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
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, null)(Dashboard)