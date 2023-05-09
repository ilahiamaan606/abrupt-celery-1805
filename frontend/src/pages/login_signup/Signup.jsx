import React ,{useState,useEffect} from 'react'
import style from './Signup.module.css';
import signup_gif from './opt2.gif'
import Header from '../../components/Header'
import Footer from '../footer/Footer'
function Signup() {
  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");
  let [role,setRole] = useState("");
  let [flag,setFlag] = useState(false);
  let [otp,setOtp] = useState(0);
  let [generated_otp,setGenerated_otp] = useState(0);
  let [on_doctor,setOn_doctor] = useState(false);
  let[description,setDescription] = useState("");
  let [department,setDepartment] = useState("");
  let name_change = (event)=>{
    setName(event.target.value);
  }

  let email_change = (event)=>{
    setEmail(event.target.value)
  }

  let password_change = (event)=>{
    setPassword(event.target.value)
  }

  let role_change=(event)=>{
    setRole(event.target.value);
    if(event.target.value=="Doctor"){setOn_doctor(true)}
    else {setOn_doctor(false)}
  }

  let otp_entered = (event)=>{
    setOtp(event.target.value);
  }

  let signup_submit=(e)=>{
    e.preventDefault();
    if(generated_otp!=otp){
      alert("Incorrect Otp");
      return;
    } 
    let obj = {};
    obj.name = name;
    obj.email = email;
    obj.password = password;
    obj.role = role;
    if(role=="Doctor"){
        console.log(obj);
        obj.description=description;
        obj.department = department;
        fetch("http://localhost:4500/doc/signup",{
        method:"POST",
       headers:{
        'Content-type':'Application/json'
       },
       body:
        JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((res)=>{console.log(res);
    alert(res);
    if(res=="Signup Succesfull"){
      window.location.href="/login";
    }
    setName("");
    setEmail("");
    setPassword("");
    setRole("");
    })
    .catch((err)=>console.log(err))
    }
    else if(role=="Patient"){
        console.log(obj)
        fetch("http://localhost:4500/users/signup",{
        method:"POST",
       headers:{
        'Content-type':'Application/json'
       },
       body:
        JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((res)=>{console.log(res);
    alert(res);
    if(res=="Signup Succesfull"){
      window.location.href="/login";
    }
    setName("");
    setEmail("");
    setPassword("");
    setRole("");
    })
    .catch((err)=>console.log(err))
    }
    

  }


  let verify_email = async(e)=>{
    e.preventDefault();
    let otp1 = Math.floor(Math.random() * (9999 - 1000) + 1000);
    setGenerated_otp(otp1);
    let bag = "";
    bag+=otp1;
    let obj={};
    obj.otp = bag;
    obj.email = email;
    setFlag(true)
    let response = await fetch("http://localhost:4500/users/mail_verify",{
        method:"POST",
       headers:{
        'Content-type':'Application/json'
       },
       body:
        JSON.stringify(obj)
    });

    
  }

  return (
    <>
    <Header/>
    <div className={style.container}>
      {flag? <div className="d-flex justify-content-center align-items-center container">
        <div className=" py-5 px-3">
            <h5 className="m-0">Email Verification</h5><span className="mobile-text">Enter the code we just send on your <b className="text-danger">Email-ID</b></span>
            <div className="d-flex flex-row mt-5">
                <input type="text" className="form-control" autofocus="" onChange={otp_entered}/>
                <button type="button" style={{marginLeft:"3%"}} className="btn btn-info" onClick={signup_submit}>Send</button>
            </div>
            <div className="text-center mt-5"><span className="d-block mobile-text">Don't receive the code?</span><span className="font-weight-bold text-danger cursor">Resend</span></div>
        </div>
    </div>:<div>
      <h1>Signup to make an Account</h1>
      <form className="row g-3 needs-validation" novalidate onSubmit={verify_email}>
        {/* *************************name ************************ */}
        <div className="col-md-9">
          <label htmlFor="validationCustom01" className="form-label">Name</label>
          <input type="text" className="form-control" id="validationCustom01" value={name} onChange={name_change} required/>
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
  
  {/* *******************************email**************************** */}
      <div className="col-md-9">
        <label htmlFor="validationCustomUsername" className="form-label">Email</label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">@</span>
          <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={email} onChange={email_change} required/>
          <div className="invalid-feedback">
            Please Enter a valid EmailID.
          </div>
        </div>
      </div>
  
  {/* *************************Password****************************** */}

      <div className="col-md-9">
        <label htmlFor="validationCustom05" className="form-label">Password</label>
        <input type="password" className="form-control" id="validationCustom05" value={password} onChange={password_change} required/>
        <div className="invalid-feedback">
          Please provide a valid Password.
        </div>
      </div>


{/* *******************************Role******************************* */}
      <div className="col-md-6 ">
        <label htmlFor="validationCustom04" className="form-label">Role</label>
        <select className="form-select" id="validationCustom04" value={role} onChange={role_change} required>
          <option selected disabled value="">Choose...</option>
          <option>Doctor</option>
          <option>Patient</option>
        </select>
        <div className="invalid-feedback">
          Please select a valid Role.
        </div>




        {on_doctor&&<div className="col-md-9">
        <label htmlFor="validationCustom05" className="form-label">Department</label>
        <input type="text" className="form-control" id="validationCustom05" value={department} onChange={(event)=>{setDepartment(event.target.value)}} required/>
        
        <label htmlFor="validationCustom05" className="form-label">Description</label>
        <input type="text" className="form-control" id="validationCustom05" value={description} onChange={(event)=>{setDescription(event.target.value)}} required/>
        
      </div>}




      </div>
  
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
          <label className="form-check-label" htmlFor="invalidCheck">
            Agree to terms and conditions
          </label>
          <div className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">Submit form</button>
      </div>
</form>
      </div>}



      <div>
        <img src={signup_gif} alt="signup_gif" />
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Signup