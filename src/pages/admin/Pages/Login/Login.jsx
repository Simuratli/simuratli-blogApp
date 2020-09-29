import React,{useState} from 'react'
import './Login.scss'
import Button from '../../../../components/UI/Button/Button'
import * as action from '../../../../redux/actions/index'
import {connect} from 'react-redux'
import Loader from '../../../../components/UI/loader/loader'
import {Redirect} from 'react-router-dom'
function Login(props) {

    const [state, setstate] = useState({
        email:null,
        password:null
    })

    function login(e){
        const {name,value} = e.target;
        setstate({
            ...state,
            [name]:value
        })
    }

   

    function SingIn(e){
        e.preventDefault()
        props.onAuth(state.email,state.password)
    }
    let authRedirect = null
    if(props.isAuthenticated ){
        authRedirect = <Redirect to="/admin/" />
    }

     let form = <form>
        <label>Email</label>
        <input autoComplete="off" onChange={login} name="email" type="email" placeholder="Email"/>
        <br/>
        <label>Password</label>
        <input autoComplete="off" onChange={login} name="password" type="password" placeholder="Password" />
        <div align="right">
            <Button onClick={SingIn} label="Login" />
        </div>
    </form>

    if(props.loading){
        form = <Loader/>
    }

    return (
        <div className='form-container'>
            {form}
            {authRedirect}
        </div>
    )
}

const mapPropsToState = state => {
    return{
        isAuthenticated:state.auth.idToken !== null,
        loading:state.auth.loading
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        onAuth: (email,password)=>dispatch(action.auth(email,password))
    }
}



export default connect(mapPropsToState,mapPropsToDispatch)(Login)
