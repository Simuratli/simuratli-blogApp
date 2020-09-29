import React,{useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import * as action from '../../../../redux/actions/index'


function Logout(props) {


    useEffect(() => {
        props.onLogout(this,)
    });
    

    return (
        <Redirect to="/login" />
    )
}

const mapDispatchToProps = dispatch => {
    return{
        onLogout: () => dispatch(action.logout())
    }
}

export default connect(null,mapDispatchToProps)(Logout)
