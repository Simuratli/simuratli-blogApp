import * as actionTypes from './actionTypes'
import axios from '../../axios'

export const writeStart = () => {
    return {
        type:actionTypes.POST_WRITE_START
    }
}

export const writeSuccess = (name,content,category) => {
    return {
        type:actionTypes.POST_WRITE_SUCCESS,
        name:name,
        content:content,
        category:category
    }
}

export const writeFail = (error) => {
    return {
        type:actionTypes.POST_WRITE_FAIL,
        error:error
    }
}


export const writepost = (name,content,category) => {
    return dispatch => {
        dispatch(writeStart())
        const data = {
            name:name,
            content:content,
            category:category
        }
        axios.post( '/posts.json', data )
              .then( response => {
                console.log(response);
                dispatch(writeSuccess(response.data.name, response.data.content))
              } )
              .catch( error => {
                dispatch(writeFail(error))
          } );
    }
}