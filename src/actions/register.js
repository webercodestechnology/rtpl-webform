import { COMPANY_FORM_REQUEST, COMPANY_FORM_SUCCESS, INDIVIDUAL_FORM_REQUEST, INDIVIDUAL_FORM_SUCCESS } from "../constants/Constants";

const companyIndividualSubmit = ({type,data})=>{
    return async (dispatch)=>{
        try
        {
            if(type==="COMPANY")
            {
                dispatch({type:COMPANY_FORM_REQUEST});
                const {companyName, companyAddress, companyContact, companyEmail, companyGST, companyIndustry, contactPersonName, purposeOfVisit} = data
                dispatch({type:COMPANY_FORM_SUCCESS,payload:{companyName, companyAddress, companyContact, companyEmail, companyGST, companyIndustry, contactPersonName, purposeOfVisit}});
            }
            else
            {
                dispatch({type:INDIVIDUAL_FORM_REQUEST});
                const {individualName, panNo, individualContact, individualEmail, individualAddress, industryType, contactPersonName, purposeOfVisit} = data
                dispatch({type:INDIVIDUAL_FORM_SUCCESS,payload:{companyName :individualName,
                    companyAddress : individualAddress,
                    companyContact : individualContact,
                    companyEmail : individualEmail,
                    companyGST : panNo,
                    companyIndustry : industryType,
                    contactPersonName ,
                    purposeOfVisit }});
            }
        }
        catch(e)
        {
            // console.log(e)
        }
    }
}

export default companyIndividualSubmit