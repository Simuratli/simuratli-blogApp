import * as actionTypes from './actionTypes'
import axios from 'axios'

export const postFetchStart = () =>{
    return {
        type:actionTypes.POST_FETCH_START
    }
}

export const postFetchSucces = (posts) =>{
    return {
        type:actionTypes.POST_FETCH_SUCCESS,
        posts:posts
    }
}

export const postFetchFeil = (error) =>{
    return {
        type:actionTypes.POST_FETCH_FAIL,
        error:error
    }
}



export const fetchPost = () => {
    return dispatch => {
        dispatch(postFetchStart())
        axios.get( 'https://blog-b502a.firebaseio.com/posts.json' )
            .then( response => {
                const updatedState = []
                for (let key in response.data) {
                    updatedState.push({
                        ...response.data[key],
                        id:key
                    })
                }
               dispatch(postFetchSucces(updatedState));
            } )
            .catch( error => {
                dispatch(postFetchFeil(error));
            } );
    };
    
}
