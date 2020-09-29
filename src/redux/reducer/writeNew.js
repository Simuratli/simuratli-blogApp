import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    data:{
        name:null,
        content:null,
        category:null
    },
    error:null,
    loading:true
}

const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.POST_FETCH_START:
            return{
                ...state,
                loading:false
            }
        case actionTypes.POST_FETCH_SUCCESS: 
        return {
            ...state,
            data:{
                name:action.name,
                content:action.content,
                category:action.category
            },
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
            };
    }
}

export default reducer