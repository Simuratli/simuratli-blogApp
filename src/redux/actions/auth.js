import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type:actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken) => {
    return{
        type:actionTypes.AUTH_SUCCESS,
        idToken:idToken,
    }
}

export const  authFail = (error) => {
    return {
        type:actionTypes.AUTH_FAILED,
        error:error
    }
}


export const logout = () => {
    return {
        type:actionTypes.AUTH_LOGOUT,

    }
}

export const auth = (email,password) => {
    return dispatch =>{
        dispatch(authStart())
        const authData = {
            email:email,
            password:password,
            returnSecureToken:true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDeWtZP82luAVY3jZ1l5xmrYqzu9FH3mak'
        axios.post(url,authData)
           .then(response=>{
               dispatch(authSuccess(response.data))
           })
           .catch(err=>{
               console.log(err)
               dispatch(authFail(err))
        })
    }
}