import { useDispatch } from 'react-redux';
import visiterRegister from '../../actions/visitorRegister';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Loader from '../../Components/Buttons/Loader/Loader';

const Preview = ({person,mode}) => {
    const dispatch = useDispatch()
    const state = useSelector(state=>state.formData);
    const formSubmit = ()=>{
        dispatch(visiterRegister({data:{...state,person}}))
    }
    return state.loading?
    <div className='d-flex justify-content-center align-items-center text-center' style={{height:"100vh"}}>
        <Loader />
    </div>:
    <>{person.length>0 && person.map((value,key)=>{
        return <div key={key}>
            <div className='form registerBox my-4'>
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
                    <label className='label required' htmlFor='dob'>Date of Birth</label>
                    <input className='text-input' id='dob' name='dob' required type='date' value={value.dob} disabled/>
                </p>
                <p className='field half'>
                    <label className='label required' htmlFor='anniversary'>Anniversary</label>
                    <input className='text-input' id='anniversary' name='anniversary' required type='date' value={value.anniversary} disabled/>
                </p>
                <p className='field required'>
                    <label className='label required' htmlFor='photo'>Upload Photo</label>
                    <img className="img-fluid" src={mode==="PREVIEW"?value.photoFile:URL.createObjectURL(value.photoFile[0])} alt="" id='photo' name='photo' />
                </p>
                <p className='field required'>
                    <label className='label required' htmlFor='aadhar'>Upload Aadhar Card</label>
                    <img className="img-fluid" src={mode==="PREVIEW"?value.aadharFile:URL.createObjectURL(value.aadharFile[0])} alt="" id='aadhar' name='aadhar' />
                </p>
                <p className='field required'>
                    <label className='label required' htmlFor='visitingCard'>Upload Visiting Card</label>
                    <img className="img-fluid" src={mode==="PREVIEW"?value.visitingCardFile:URL.createObjectURL(value.visitingCardFile[0])} alt="" id='visitingCard' name='visitingCard' />
                </p>
            </div>
        </div>
    })
    }
    {mode!=="PREVIEW" &&
    <div className="form">
        { state.companyName && 
        (<><h2 className="field text-light">Company Details</h2><p className='field required'>
                        <label className='label required' htmlFor='companyName'>Company Name</label>
                        <input className='text-input' id='companyName' name='companyName' required type='text' value={state.companyName} disabled />
                    </p><p className='field required'>
                            <label className='label required' htmlFor='companyAddress'>Company Address</label>
                            <textarea className='text-input' id='companyAddress' name='companyAddress' required type='text' value={state.companyAddress} disabled />
                        </p><p className='field required half'>
                            <label className='label' htmlFor='companyContact'>Company Contact</label>
                            <input className='text-input' id='companyContact' name='companyContact' required type='tel' value={state.companyContact} disabled />
                        </p><p className='field required half'>
                            <label className='label' htmlFor='companyEmail'>Company Email</label>
                            <input className='text-input' id='companyEmail' name='companyEmail' required type='email' value={state.companyEmail} disabled />
                        </p><p className='field half required'>
                            <label className='label' htmlFor='companyGST'>Company GST</label>
                            <input className='text-input' id='companyGST' name='companyGST' required type='text' value={state.companyGST} disabled />
                        </p><p className='field half required'>
                            <label className='label' htmlFor='companyIndustry'>Company Industry</label>
                            <input className='text-input' id='companyIndustry' name='companyIndustry' required type='text' value={state.companyIndustry} disabled />
                        </p><p className='field half required'>
                            <label className='label' htmlFor='contactPersonName'>Contact Person Name</label>
                            <input className='text-input' id='contactPersonName' name='contactPersonName' required type='text' value={state.contactPersonName} disabled />
                        </p><p className='field half required'>
                            <label className='label required' htmlFor='purposeOfVisit'>Purpose of Visit</label>
                            <input className='text-input' id='purposeOfVisit' name='purposeOfVisit' required type='text' value={state.purposeOfVisit} disabled />
                        </p></>)
        }
        <p className="field">
            <button className="button mx-auto" onClick={formSubmit} >Submit</button>
        </p>
        <ToastContainer />
    </div>
    }
    {mode==="PREVIEW" && 
    <div className="form">
        <p className="field">
            <button className="button mx-auto" onClick={()=>{window.location.href="/"}} >Home</button>
        </p>
        <ToastContainer />
    </div>
    }
    </>

}

export default Preview;