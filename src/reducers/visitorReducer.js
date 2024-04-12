import { FORM_SUBMIT_FAIL, FORM_SUBMIT_REQUEST, FORM_SUBMIT_SUCCESS, RESET_FORM_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS } from "../constants/Constants"

const initialState = {
    loading : false,
    status:false
}

const visitorReducer = (state=initialState,action)=>{
    // console.log(action)
    switch(action.type)
    {
        case USER_DETAILS_REQUEST:
        case FORM_SUBMIT_REQUEST:
        {
            return {
                ...state,
                loading:true
            }
        }
        case USER_DETAILS_SUCCESS:
        {
            return {
                ...state,
                loading:false,
                status:true,
                visitors:action.payload.data.details
            }
        }
        case FORM_SUBMIT_SUCCESS:
        case RESET_FORM_SUCCESS:
        {
            return {...initialState}
        }
        case FORM_SUBMIT_FAIL:
        case USER_DETAILS_FAIL:
        {
            return {
                ...state,
                status:false,
                loading:false
            }
        }
        default:
        {
            return {
                ...state
            }
        }
    }
}

export default visitorReducer;