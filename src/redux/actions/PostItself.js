import * as actionTypes from './actionTypes'
import axios from '../../axios'

export const postItselfFetchStart = () => {
   return {
        type:actionTypes.FETCH_POST_ITSELF_START
   }
}

export const postItselfFetchSuccess = (name,content,category) => {
    return {
        type:actionTypes.FETCH_POST_ITSELF_SUCCESS,
        name:name,
        content:content,
        category:category
    }
}

export const postItselfFetchFail = (error) => {
    return {
        type:actionTypes.FETCH_POST_ITSELF_START,
        error:error,
    }
}


export const postFetch = (search) => {
    return dispatch => {
        dispatch(postItselfFetchStart())
        axios.get(`/posts/${search}.json`)
        .then(res=>{
            dispatch(postItselfFetchSuccess(res.data.name,res.data.content,res.data.category))
        })
        .catch(err=>{
            dispatch(postItselfFetchFail(err))
        })
    }
}