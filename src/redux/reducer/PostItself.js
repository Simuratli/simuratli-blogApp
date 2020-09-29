import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    data:{
        name:'',
        content:'',
    },
    loading:true,
    error:null
}

const reducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case actionTypes.FETCH_POST_ITSELF_START:
            return {
                ...state,
                loading:true
            }
        case actionTypes.FETCH_POST_ITSELF_SUCCESS:
            return {
                ...state,
                loading:false,
                error:null,
                name:action.name,
                content:action.content,
                category:action.category,
            }
        case actionTypes.FETCH_POST_ITSELF_FAIL:
            return {
                ...state,
                error:null,
                loading:false,
                }       
        default:
            return {
                ...state,
                }
    }
}

export default reducer