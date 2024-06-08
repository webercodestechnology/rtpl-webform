import axios from "axios";
import { toast } from 'react-toastify'
import { FORM_SUBMIT_FAIL, FORM_SUBMIT_REQUEST, FORM_SUBMIT_SUCCESS } from "../constants/Constants";

const visiterRegister = ({data}) => {
    return async (dispatch)=>{
        try{
            if(data.type==="COMPANY")
            {
                let visitors = []
                let vLiveImage = [];
                let vPhotoID = [];
                let vVisitorID = [];
                data.person.forEach((value)=>{
                    visitors.push({
                        vFirstName:value.firstName,
                        vLastName:value.lastName,
                        vDateOfBirth:value.dob,
                        vDesignation:value.designation,
                        vDepartment:value.department,
                    })
                    // console.log(value.photoFile)
                    // console.log(value.aadharFile)
                    // console.log(value.visitingCardFile)
                    vLiveImage.push(value.photoFile);
                    vPhotoID.push(value.aadharFile);
                    vVisitorID.push(value.visitingCardFile);
                })
                const payload = {
                    vCompanyName:data.companyName,
                    vCompanyAddress:data.companyAddress,
                    vCompanyContact:data.companyContact,
                    vCompanyEmail:data.companyEmail,
                    purposeOfMeeting:data.purposeOfVisit,
                    contactPersonName:data.contactPersonName,
                    visitors:JSON.stringify(visitors),
                    typeOfVisitor : "Company",
                    vCompanyGST:data.companyGST,
                    vCompanyIndustry:data.companyIndustry,
                // }
                }
                const formData = new FormData();
                Object.keys(payload).forEach((key)=>{
                    console.log(key,payload[key],typeof payload[key]);
                    formData.append(key,payload[key])
                });
                for (let i = 0; i < vLiveImage.length; i++) {
                    formData.append("vLiveImage", vLiveImage[i][0]);
                }
                for (let i = 0; i < vPhotoID.length; i++) {
                    formData.append("vPhotoID", vPhotoID[i][0]);
                }
                for (let i = 0; i < vVisitorID.length; i++) {
                    formData.append("vVisitorID", vVisitorID[i][0]);
                }
                dispatch({type:FORM_SUBMIT_REQUEST});
                // const response = await axios.post("http://localhost:3000/api/visitor/visitor_request_meeting",formData,{headers: {'Content-Type':`multipart/form-data`,'processData':false}})
                const response = await axios.post("https://backend.riseandgrow.in/api/visitor/visitor_request_meeting",formData,{headers: {'Content-Type':`multipart/form-data`,'processData':false}})
                if(response)
                {
                    dispatch({type:FORM_SUBMIT_SUCCESS})
                    toast.success('Form Submitted Successfully', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
                else
                {
                    toast.error('Failed To Submit Form Due to an Internal Server Error', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
            }
            else
            {
                console.log(data)
                let visitors = []
                let vLiveImage = [];
                let vPhotoID = [];
                let vVisitorID = [];
                data.person.forEach((value)=>{
                    visitors.push({
                        vPANCard:data.companyGST,
                        vAddress:data.companyAddress,
                        vContact:data.companyContact,
                        vMailID:data.companyEmail,
                        vFirstName:value.firstName,
                        vLastName:value.lastName,
                        vDateOfBirth:value.dob,
                        vDesignation:value.designation,
                        vDepartment:value.department,
                    })
                    vLiveImage.push(value.photoFile);
                    vPhotoID.push(value.aadharFile);
                    vVisitorID.push(value.visitingCardFile);
                })
                const payload = {
                    typeOfVisitor: "Individual",
                    purposeOfMeeting: data.purposeOfVisit,
                    contactPersonName: data.contactPersonName,
                    visitors:JSON.stringify(visitors)
                }
                const formData = new FormData();
                Object.keys(payload).forEach((key)=>{console.log(key,payload[key]);formData.append(key,payload[key])});
                for (let i = 0; i < vLiveImage.length; i++) {
                    formData.append("vLiveImage", vLiveImage[i][0]);
                }
                for (let i = 0; i < vPhotoID.length; i++) {
                    formData.append("vPhotoID", vPhotoID[i][0]);
                }
                for (let i = 0; i < vVisitorID.length; i++) {
                    formData.append("vVisitorID", vVisitorID[i][0]);
                }
                dispatch({type:FORM_SUBMIT_REQUEST});
                // const response = await axios.post("http://localhost:3000/api/visitor/visitor_request_meeting",formData,{headers: {'Content-Type':`multipart/form-data`,'processData':false}})
                const response = await axios.post("https://backend.riseandgrow.in/api/visitor/visitor_request_meeting",formData,{headers: {'Content-Type':`multipart/form-data`,'processData':false}})
                if(response)
                {
                    dispatch({type:FORM_SUBMIT_SUCCESS})
                    toast.success('Form Submitted Successfully', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
                else
                {
                    toast.error('Failed To Submit Form Due to an Internal Server Error', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
            }
        }
        catch(e){
            dispatch({type:FORM_SUBMIT_FAIL})
            // console.log(e)
            toast.error(e.response?e.response.data.message:"Internal Server Error", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }
}

export default visiterRegister