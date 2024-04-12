import { useState } from "react"
import "./Individual.css"
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import companyIndividualSubmit from "../../actions/register";
import { useSelector } from 'react-redux';
import RegisterPerson from "../RegisterPerson/RegisterPerson";
import { ToastContainer } from 'react-toastify';

const Individual = ()=>{
    const [individualName,setIndividualName] = useState("");
    const [panNo,setPanNo] = useState("");
    const [individualContact,setIndividualContact] = useState("");
    const [individualEmail,setIndividualEmail] = useState("");
    const [individualAddress,setIndividualAddress] = useState("");
    const [industryType,setIndustryType] = useState("");
    const [contactPersonName,setContactPersonName] = useState("");
    const [purposeOfVisit,setPurposeOfVisit] = useState("");
    const dispatch = useDispatch();

    const inputHandler = (e)=>{
        if(e.target.name==="individualName")
        {
            setIndividualName(e.target.value);
        }
        else if(e.target.name==="panNo")
        {
            setPanNo(e.target.value);
        }
        else if(e.target.name==="individualContact")
        {
            setIndividualContact(e.target.value);
        }
        else if(e.target.name==="individualEmail")
        {
            setIndividualEmail(e.target.value);
        }
        else if(e.target.name==="individualAddress")
        {
            setIndividualAddress(e.target.value);
        }
        else if(e.target.name==="industryType")
        {
            setIndustryType(e.target.value);
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
      setIndividualName("")
      setPanNo("")
      setIndividualContact("")
      setIndividualEmail("")
      setIndividualAddress("")
      setIndustryType("")
      setContactPersonName("")
      setPurposeOfVisit("")
      dispatch(companyIndividualSubmit({type:"INDIVIDUAL",data:{individualName, panNo, individualContact, individualEmail, individualAddress, industryType, contactPersonName, purposeOfVisit}}))
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
      <label className='label required' htmlFor='individualName'>Individual Name</label>
      <input className='text-input' id='individualName' name='individualName' required type='text' value={individualName} onChange={inputHandler} />
    </p>
    <p className='field half required'>
      <label className='label required' htmlFor='panNo'>PAN Number</label>
      <input className='text-input' id='panNo' name='panNo' required type='text' value={panNo} onChange={inputHandler} />
    </p>
    <p className='field required half'>
      <label className='label' htmlFor='individualEmail'>Individual Email</label>
      <input className='text-input' id='individualEmail' name='individualEmail' required type='email' value={individualEmail} onChange={inputHandler} />
    </p>
    <p className='field required half'>
      <label className='label' htmlFor='individualContact'>Individual Contact Number</label>
      <input className='text-input' id='individualContact' name='individualContact' required type='tel' value={individualContact} onChange={inputHandler} />
    </p>
    <p className='field half required'>
      <label className='label' htmlFor='industryType'>Industry Type</label>
      <input className='text-input' id='industryType' name='industryType' required type='text' value={industryType} onChange={inputHandler} />
    </p>
    <p className='field required'>
      <label className='label' htmlFor='individualAddress'>Individual Address</label>
      <textarea className='text-input' id='individualAddress' name='individualAddress' required type='text' value={individualAddress} onChange={inputHandler} />
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

export default Individual