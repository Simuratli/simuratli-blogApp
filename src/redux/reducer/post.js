import * as actionTypes from '../actions/actionTypes'

const initialState = {
    posts:null,
    error:null,
    loading:false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST_FETCH_START:
            return{
                ...state,
                loading:true
            }
        case actionTypes.POST_FETCH_SUCCESS: 
        return {
            ...state,
            posts:action.posts,
            loading:false
        }
        case actionTypes.POST_FETCH_FAIL:
            return{
                ...state,
                error:action.error,
                loading:false
            }   
        default:
            return{
                ...state
            }
    }
}


export default reducer