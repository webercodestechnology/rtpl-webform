import { RESET_FORM_SUCCESS } from "../constants/Constants";

const resetForms = ()=>{
return async (dispatch)=>{
        dispatch({type:RESET_FORM_SUCCESS});
    
}
}
export default resetForms;
