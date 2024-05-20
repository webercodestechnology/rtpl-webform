import "./RegisterPerson.css"
import { useState } from "react";
import Preview from "../Preview/Preview";

const RegisterPerson = ()=>{
    
    const [person,setPerson] = useState([]);
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [designation,setDesignation] = useState("");
    const [dob,setDob] = useState("");
    const [anniversary,setAnniversary] = useState("");
    const [department,setDepartment] = useState("");
    const [photo,setPhoto] = useState(null);
    const [photoFile,setPhotoFile] = useState(null);
    const [aadhar,setAadhar] = useState(null);
    const [aadharFile,setAadharFile] = useState(null);
    const [visitingCard,setVisitingCard] = useState(null);
    const [visitingCardFile,setVisitingCardFile] = useState(null);
    const [addMore,setAddMore] = useState(true);
    const [preview,setPreview] = useState(false)
    // const dispatch = useDispatch();
    const inputHandler = (e)=>{
        console.log(e.target.files)
        if(e.target.name==="firstName")
        {
            setFirstName(e.target.value);
        }
        else if(e.target.name==="lastName")
        {
            setLastName(e.target.value);
        }
        else if(e.target.name==="designation")
        {
            setDesignation(e.target.value);
        }
        else if(e.target.name==="dob")
        {
            setDob(e.target.value);
        }
        else if(e.target.name==="anniversary")
        {
            setAnniversary(e.target.value);
        }
        else if(e.target.name==="department")
        {
            setDepartment(e.target.value);
        }
        else if(e.target.name==="photo")
        {
            setPhoto(e.target.file);
            setPhotoFile(e.target.files);
        }
        else if(e.target.name==="aadhar")
        {
            setAadhar(e.target.file);
            setAadharFile(e.target.files);
        }
        else if(e.target.name==="visitingCard")
        {
            setVisitingCard(e.target.file);
            setVisitingCardFile(e.target.files);
        }
    }

    const registerHandler = (e)=>{
        e.preventDefault();
        setFirstName("")
        setLastName("")
        setDesignation("")
        setDob("")
        setAnniversary("")
        setDepartment("")
        setPhoto(null)
        setPhotoFile(null)
        setAadhar(null)
        setAadharFile(null)
        setVisitingCard(null)
        setVisitingCardFile(null)
        setAddMore(false)
        if(firstName && firstName.length){
            setPerson([...person,{firstName, lastName, designation, dob, anniversary, department, photo,photoFile, aadhar, aadharFile, visitingCard, visitingCardFile}])
        }else{
            setPerson([...person])
        }

    }

    const formSubmit = (e)=>{
        setFirstName("")
        setLastName("")
        setDesignation("")
        setDob("")
        setAnniversary("")
        setDepartment("")
        setPhoto(null)
        setPhotoFile(null)
        setAadhar(null)
        setAadharFile(null)
        setVisitingCard(null)
        setVisitingCardFile(null)
        setPreview(true);
        if(firstName && firstName.length){
            setPerson([...person,{firstName, lastName, designation, dob, anniversary, department, photo,photoFile, aadhar, aadharFile, visitingCard, visitingCardFile}])
        }else{
            setPerson([...person])
        }
    }

    return preview?
    <Preview person={person} />:
    <>{person.length>0 && person.map((value,key)=>{
        return <div className='form registerBox my-4'>
            <h4 className="field text-light">Visitor {key+1}</h4>
            <p className='field half required'>
                <label className='label required' htmlFor='firstName'>First Name</label>
                <input className='text-input' id='firstName' name='firstName' required type='text' value={value.firstName} disabled/>
            </p>
            <p className='field half required'>
                <label className='label required' htmlFor='lastName'>Last Name</label>
                <input className='text-input' id='lastName' name='lastName' required type='text' value={value.lastName} disabled/>
            </p>
            <p className='field half required'>
                <label className='label required' htmlFor='designation'>Designation</label>
                <input className='text-input' id='designation' name='designation' required type='text' value={value.designation} disabled/>
            </p>
            <p className='field half required'>
                <label className='label required' htmlFor='department'>Department</label>
                <input className='text-input' id='department' name='department' required type='text' value={value.department} disabled/>
            </p>
            <p className='field half required'>
                <label className='label required' htmlFor='designation'>Date of Birth</label>
                <input className='text-input' id='dob' name='dob' required type='date' value={value.dob} disabled/>
            </p>
            <p className='field half'>
                <label className='label required' htmlFor='anniversary'>Anniversary</label>
                <input className='text-input' id='anniversary' name='anniversary' required type='date' value={value.anniversary} disabled/>
            </p>
            <p className='field required'>
                <label className='label required' htmlFor='photo'>Upload Photo</label>
                <img className="img-fluid" src={URL.createObjectURL(value.photoFile[0])} alt="" id='photo' name='photo' />
            </p>
            <p className='field required'>
                <label className='label required' htmlFor='aadhar'>Upload Aadhar Card</label>
                <img className="img-fluid" src={URL.createObjectURL(value.aadharFile[0])} alt="" id='aadhar' name='aadhar' />
            </p>
            <p className='field required'>
                <label className='label required' htmlFor='visitingCard'>Upload Visiting Card</label>
                <img className="img-fluid" src={URL.createObjectURL(value.visitingCardFile[0])} alt="" id='visitingCard' name='visitingCard' />
            </p>
        </div>
    })}
    {
        !addMore &&
        <div className="form">
            {
                person.length<=4 && 
                <p className='field half d-flex'>
                    <button className="button mx-auto" onClick={()=>{setAddMore(true)}} >Add More</button>
                </p>
            }
            <p className={`field ${person.length<=4?"half":""}`}>
                <button className="button mx-auto" onClick={formSubmit} >Next</button>
            </p>
        </div>
    }

    {
        addMore &&
        <form className='form registerBox' onSubmit={registerHandler}>
            <h4 className="field text-light">
                Enter Visitor-{person.length+1} Details
            </h4>
            <p className='field half required'>
                <label className='label required' htmlFor='firstName'>First Name</label>
                <input className='text-input' id='firstName' name='firstName' required type='text' value={firstName} onChange={inputHandler} />
            </p>
            <p className='field half required'>
                <label className='label required' htmlFor='lastName'>Last Name</label>
                <input className='text-input' id='lastName' name='lastName' required type='text' value={lastName} onChange={inputHandler} />
            </p>
            <p className='field half required'>
                <label className='label required' htmlFor='designation'>Designation</label>
                <input className='text-input' id='designation' name='designation' required type='text' value={designation} onChange={inputHandler} />
            </p>
            <p className='field half required'>
                <label className='label required' htmlFor='department'>Department</label>
                <input className='text-input' id='department' name='department' required type='text' value={department} onChange={inputHandler} />
            </p>
            <p className='field half required'>
                <label className='label required' htmlFor='dob'>Date of Birth</label>
                <input className='text-input' id='dob' name='dob' required type='date' value={dob} onChange={inputHandler} />
            </p>
            <p className='field half'>
                <label className='label required' htmlFor='anniversary'>Anniversary</label>
                <input className='text-input' id='anniversary' name='anniversary' type='date' value={anniversary} onChange={inputHandler} />
            </p>
            <p className='field required'>
                <label className='label required' htmlFor='photo'>Upload Photo</label>
                <input className='text-input' id='photo' name='photo' required type='file' value={photo} onChange={inputHandler} />
            </p>
            <p className='field required'>
                <label className='label required' htmlFor='aadhar'>Upload Aadhar Card</label>
                <input className='text-input' id='aadhar' name='aadhar' required type='file' value={aadhar} onChange={inputHandler} />
            </p>
            <p className='field required'>
                <label className='label required' htmlFor='visitingCard'>Upload Visiting Card</label>
                <input className='text-input' id='visitingCard' name='visitingCard' required type='file' value={visitingCard} onChange={inputHandler} />
            </p>
            { person.length>=1 &&
            <p className="field">
                <button className="button mx-auto close-button" onClick={() => setAddMore(false)}>Close</button>
            </p>
            }
            <p className='field'>
                <button className='button mx-auto' type='submit' >Add</button>
            </p>
        </form>
    }
    </>
}

export default RegisterPerson;