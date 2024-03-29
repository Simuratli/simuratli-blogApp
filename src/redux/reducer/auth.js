import * as actionTypes from '../actions/actionTypes'

const initialState = {
    idToken:null,
    error:null,
    loading:false
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.AUTH_START:
            return{
                ...state,
                error:null,
                loading:true
            }
        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                idToken:action.idToken,
                loading:true,
                error:null
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                error:action.error,
                loading:false
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                idToken:null,
                loading:false
            }             
        default:return state;
    }
}

export default reducer