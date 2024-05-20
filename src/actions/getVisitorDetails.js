import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS } from "../constants/Constants"
import axios from 'axios';
import { toast } from 'react-toastify';

const getVisitorDetails = ({companyGST,visitorPan})=>{
    return async (dispatch)=>{
        dispatch({type:USER_DETAILS_REQUEST})
        let payload = {}
        if(companyGST)
        {
            payload = {
                companyGST
            }
        }
        else
        {
            payload = {
                visitorPan
            }
        }
        try
        {
            // const data = await axios.post("http://localhost:3000/api/visitor/get_visitor_by_company_contact",payload)
            const data = await axios.post("https://backend.riseandgrow.in/api/visitor/get_visitor_by_company_contact",payload)
            dispatch({type:USER_DETAILS_SUCCESS,payload:data.data})
        }
        catch(e)
        {
            toast.error("GST No. / Pan No. Doesn't Exist", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            dispatch({type:USER_DETAILS_FAIL})
        }
    }
}

export default getVisitorDetails
