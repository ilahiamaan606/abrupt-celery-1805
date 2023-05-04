import React ,{useState,useEffect} from 'react'
import style from './Signup.module.css';
import signup_gif from './opt2.gif'
function Signup() {
  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");
  let [role,setRole] = useState("");

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
  }

  let signup_submit=(e)=>{
    e.preventDefault();
    let obj = {};
    obj.name = name;
    obj.email = email;
    obj.password = password;
    obj.role = role;
    console.log(obj);
    setName("");
    setEmail("");
    setPassword("");
    setRole("");
  }

  return (
    <>
    <div className={style.container}>
      <div>
      <h1>Signup to make an Account</h1>
      <form className="row g-3 needs-validation" novalidate onSubmit={signup_submit}>
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
          <option selected disabled >Choose...</option>
          <option>Doctor</option>
          <option>Patient</option>
        </select>
        <div className="invalid-feedback">
          Please select a valid Role.
        </div>
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
      </div>



      <div>
        <img src={signup_gif} alt="signup_gif" />
      </div>
    </div>
    </>
  )
}

export default Signup