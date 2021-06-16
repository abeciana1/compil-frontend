import Head from 'next/head'
import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { checkUser } from '../../redux/actions/user-actions'

const HeadTag = (props) => {

    useEffect(() => {
        if (localStorage.getItem('compilLogged')) {
            props.checkUser()
        }
    })

    return (
        <Head>
            <link rel="icon" href="/favicon.png" />
            <link rel="stylesheet" href="https://use.typekit.net/ntq1bol.css"></link>
        </Head>
    )
}

const mapDispatchToProps = {
    checkUser
}

export default connect(null, mapDispatchToProps)(HeadTag)