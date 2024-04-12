import { COMPANY_FORM_FAIL, COMPANY_FORM_REQUEST, COMPANY_FORM_SUCCESS, FORM_SUBMIT_FAIL, FORM_SUBMIT_REQUEST, FORM_SUBMIT_SUCCESS, INDIVIDUAL_FORM_FAIL, INDIVIDUAL_FORM_REQUEST, INDIVIDUAL_FORM_SUCCESS, RESET_FORM_SUCCESS } from "../constants/Constants"

const initialState = {
    loading : false
}

const formReducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case COMPANY_FORM_REQUEST:
        case INDIVIDUAL_FORM_REQUEST:
        case FORM_SUBMIT_REQUEST:
        {
            return {
                ...state,
                loading:true
            }
        }
        case COMPANY_FORM_SUCCESS:
        {
            return {
                ...state,
                type:"COMPANY",
                loading:false,
                ...action.payload
            }
        }
        case INDIVIDUAL_FORM_SUCCESS:
        {
            return {
                ...state,
                type:"INDIVIDUAL",
                loading:false,
                ...action.payload
            }
        }
        case FORM_SUBMIT_SUCCESS:
        case RESET_FORM_SUCCESS:
        {
            return {...initialState}
        }
        case COMPANY_FORM_FAIL:
        case INDIVIDUAL_FORM_FAIL:
        case FORM_SUBMIT_FAIL:
        {
            return {
                ...state,
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

export default formReducer;