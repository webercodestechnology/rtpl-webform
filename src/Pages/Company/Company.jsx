import { useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import "./Company.css"
import { Link } from "react-router-dom";
import companyIndividualSubmit from "../../actions/register";
import RegisterPerson from "../RegisterPerson/RegisterPerson";
import { ToastContainer } from 'react-toastify';

const Company = ()=>{
    const [companyName,setCompanyName] = useState("");
    const [companyAddress,setCompanyAddress] = useState("");
    const [companyContact,setCompanyContact] = useState("");
    const [companyEmail,setCompanyEmail] = useState("");
    const [companyGST,setCompanyGST] = useState("");
    const [companyIndustry,setCompanyIndustry] = useState("");
    const [contactPersonName,setContactPersonName] = useState("");
    const [purposeOfVisit,setPurposeOfVisit] = useState("");
    const dispatch = useDispatch()
    const inputHandler = (e)=>{
        if(e.target.name==="companyName")
        {
            setCompanyName(e.target.value);
        }
        else if(e.target.name==="companyAddress")
        {
            setCompanyAddress(e.target.value);
        }
        else if(e.target.name==="companyContact")
        {
            setCompanyContact(e.target.value);
        }
        else if(e.target.name==="companyEmail")
        {
            setCompanyEmail(e.target.value);
        }
        else if(e.target.name==="companyGST")
        {
            setCompanyGST(e.target.value);
        }
        else if(e.target.name==="companyIndustry")
        {
            setCompanyIndustry(e.target.value);
        }
        else if(e.target.name==="contactPersonName")
        {
            setContactPersonName(e.target.value);
        }
        else if(e.target.name==="purposeOfVisit")
        {
            setPurposeOfVisit(e.target.value);
        }
    }

    const formHandler = (e)=>{
        e.preventDefault();
        setCompanyName("");
        setCompanyAddress("");
        setCompanyContact("");
        setCompanyEmail("");
        setCompanyGST("");
        setCompanyIndustry("");
        setContactPersonName("");
        setPurposeOfVisit("");
        dispatch(companyIndividualSubmit({type:"COMPANY",data:{companyName, companyAddress, companyContact, companyEmail, companyGST, companyIndustry, contactPersonName, purposeOfVisit}}))
    }
    const state = useSelector(state=>state.formData)
    if(state.type)
    {
        return <RegisterPerson />
    }
    else
    {
        return <form action='' className='form' onSubmit={formHandler}>
                <p className='field required'>
                <label className='label required' htmlFor='companyName'>Company Name</label>
                <input className='text-input' id='companyName' name='companyName' required type='text' value={companyName} onChange={inputHandler} />
                </p>
                <p className='field required'>
                <label className='label required' htmlFor='companyAddress'>Company Address</label>
                <textarea className='text-input' id='companyAddress' name='companyAddress' required type='text' value={companyAddress} onChange={inputHandler} />
                </p>
                <p className='field required half'>
                <label className='label' htmlFor='companyContact'>Company Contact</label>
                <input className='text-input' id='companyContact' name='companyContact' required type='tel' value={companyContact} onChange={inputHandler} />
                </p>
                <p className='field required half'>
                <label className='label' htmlFor='companyEmail'>Company Email</label>
                <input className='text-input' id='companyEmail' name='companyEmail' required type='email' value={companyEmail} onChange={inputHandler} />
                </p>
                <p className='field half required'>
                <label className='label' htmlFor='companyGST'>Company GST</label>
                <input className='text-input' id='companyGST' name='companyGST' required type='text' value={companyGST} onChange={inputHandler} />
                </p>
                <p className='field half required'>
                <label className='label' htmlFor='companyIndustry'>Company Industry</label>
                <input className='text-input' id='companyIndustry' name='companyIndustry' required type='text' value={companyIndustry} onChange={inputHandler} />
                </p>
                <p className='field half required'>
                <label className='label' htmlFor='contactPersonName'>Contact Person Name</label>
                <input className='text-input' id='contactPersonName' name='contactPersonName' required type='text' value={contactPersonName} onChange={inputHandler} />
                </p>
                <p className='field half required'>
                <label className='label required' htmlFor='purposeOfVisit'>Purpose of Visit</label>
                <input className='text-input' id='purposeOfVisit' name='purposeOfVisit' required type='text' value={purposeOfVisit} onChange={inputHandler} />
                </p>
                <p className='field half d-flex'>
                    <Link className='button mx-auto text-decoration-none' to="/" type='submit' >Back</Link>
                </p>
                <p className='field half'>
                    <button className='button mx-auto' type='submit' value='Next' >Next</button>
                </p>
                <ToastContainer />
                </form>   
    }
}

export default Company