import React from 'react'
import { connect } from 'react-redux'

const Dashboard = (props) => {

    return (
        <h1>Dashboard</h1>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, null)(Dashboard)