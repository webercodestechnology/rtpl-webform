import { useEffect, useState } from "react";
import LinkButton from "../../Components/Buttons/LinkButton/LinkButton";
import "./Home.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import getVisitorDetails from "../../actions/getVisitorDetails";
import { useSelector } from 'react-redux';
import Preview from "../Preview/Preview";
import resetForms from "../../actions/resetForms";
const Home = ()=>{
    const [gstpan,setGstpan] = useState("");
    const dispatch = useDispatch();
    const inputHandler = (e)=>{
        setGstpan(e.target.value)
    }
    const submitHandler = (e)=>{
        if(gstpan.length===10)
        {
            dispatch(getVisitorDetails({visitorPan:gstpan}))
        }
        else if(gstpan.length===15)
        {
            dispatch(getVisitorDetails({companyGST:gstpan}))
        }
        else
        {
            toast.error('Please Enter Valid GST No./Pan No.', {
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

    useEffect(()=>{
        dispatch(resetForms())
    },[dispatch])

    const visitors = useSelector(state=>state.visitorDetails);
    if(visitors.status)
    {
        const person = visitors.visitors.map((value)=>{
            return{
                firstName:value.vFirstName,
                lastName:value.vLastName,
                designation:value.vDesignation,
                dob:value.vDateOfBirth, 
                anniversary:value.vAnniversaryDate,
                department:value.vDepartment,
                photo:undefined,
                photoFile:value.vLiveImage, 
                aadhar:undefined,
                aadharFile:value.vPhotoID,
                visitingCard:undefined,
                visitingCardFile:value.vVisitorID
            }
        })
        return <Preview person={person} mode={"PREVIEW"} />
        
    }

    return <div className="container box d-md-flex d-block flex-wrap">
        <div className="col-md-6 d-md-flex d-none justiy-content-center align-items-center flex-wrap">
            <div className="text-center">
                <div className="col-md-4 mb-4 text-center mx-auto">
                    <img src="/Assets/Images/logo.png" className="img-fluid" alt="logo" />
                </div>
                <h1 className="text-center heading col-12 text-light">
                    Welcome To Rise And Grow Group
                </h1>
                <h2 style={{"color":"#8eabe0"}} className="col-12">
                    Visitor Registration Form
                </h2>
            </div>
        </div>
        <div className="col-md-6 d-md-flex d-none justiy-content-center align-items-center flex-wrap">
            <div className="mx-auto">
                <h3 className="heading-1 text-center mx-auto text-light">
                    Are You Belong From Individual or Company?
                </h3>
                <div className="d-flex col-12 gap-2 my-4 justify-content-center align-items-center">
                    <LinkButton title={"Company"} target={"/company"}/>
                    <LinkButton title={"Individual"} target={"/individual"}/>
                </div>
                <h3 className="heading-1 text-center mx-auto mt-5 text-light">
                    Already Registered?
                </h3>
                <div className="d-flex col-8 mx-auto justify-content-center align-items-center form">
                    <input type="text" className="form-control mx-auto" placeholder="Enter Your GST NO / PAN No" value={gstpan} onChange={inputHandler} />
                    <button className="button mx-auto my-2" onClick={submitHandler}>Submit</button>
                </div>
            </div>
        </div>
        
        <div className="d-flex d-md-none justiy-content-center align-items-center py-4 flex-wrap">
            <div className="text-center mx-auto">
                <div className="col-4 mb-4 text-center mx-auto">
                    <img src="/Assets/Images/logo.png" className="img-fluid" alt="logo" />
                </div>
                <h1 className="text-center heading col-12 text-light">
                    Welcome To Rise And Grow Group
                </h1>
                <h2 style={{"color":"#8eabe0"}} className="col-12">
                    Visitor Resistsation Form
                </h2>
            </div>
        </div>
        <div className="d-flex d-md-none justiy-content-center align-items-center flex-wrap">
            <h3 className="heading-1 text-center mx-auto my-5 text-light">
                Are You Belong From Individual or Company?
            </h3>
            <div className="d-flex col-12 justify-content-center align-items-center">
                <LinkButton title={"Company"} target={"/company"}/>
                <LinkButton title={"Individual"} target={"/individual"}/>
            </div>
            <h3 className="heading-1 text-center mx-auto mt-5 text-light">
                Already Registered?
            </h3>
            <div className="d-flex col-8 mx-auto justify-content-center align-items-center form">
                <input type="text" className="form-control mx-auto" placeholder="Enter Your GST No. / PAN No." value={gstpan} onChange={inputHandler} />
                <button className="button mx-auto my-2" onClick={submitHandler}>Submit</button>
            </div>
        </div>
        <ToastContainer />
    </div>
}

export default Home;