import React ,{useState,useEffect}from 'react'
import loginGif from "./opt1.gif"
import styles from './Login.module.css'
import Header from '../../components/Header'
import Footer from '../footer/Footer'
function Login() {

  const toastLiveExample = document.getElementById('liveToast')
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");
  let [role,setRole] = useState("");

  let email_change = (event)=>{
    setEmail(event.target.value);
  }

  let password_change = (event)=>{
    setPassword(event.target.value);
  }

  let role_change=(event)=>{
    setRole(event.target.value);
  }



  let submit = (e)=>{
    e.preventDefault();
    let obj = {};
    obj.email = email;
    obj.password = password;
    let link = '';
    if(role=="Doctor"){
      link = "doc"
    }
    else {
      link = 'users'
    }
    fetch(`http://localhost:4500/${link}/login`,{
        method:"POST",
       headers:{
        'Content-type':'Application/json'
       },
       body:
        JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((res)=>{console.log(res.data);
    sessionStorage.setItem("token", (res.token));
    sessionStorage.setItem("user", JSON.stringify(res.data));
    sessionStorage.setItem("role", res.data.role.toLowerCase());
    alert(res.msg);
   

    if(res.msg=="Login Succesfull"){
      window.location.href="/";
    }
    setEmail("");
    setPassword("");
    })
    .catch((err)=>console.log(err))
    
  }


  return (
    <>
    <Header/>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header">
      <img src="..." className="rounded me-2" alt="..."/>
      <strong className="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div className="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>






    <div>
        <div className={styles.container}>
        <div>
            <h3>Welcome Back</h3>
            <h1>Login to your Account</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={email_change} required/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={password_change} required/>
                </div>
                  

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
                </div>





                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>


        <div /* style=" padding-left: 2%;" */>
            <img /* style="border-radius: 25px;"  */src={loginGif} alt="gif"/>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login