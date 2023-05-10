import {useState,useEffect}from 'react'
import styles from './Login.module.css'
import swal from "sweetalert2"
function Adminlogin() {
  
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");

  let email_change = (event)=>{
    setEmail(event.target.value);
  }

  let password_change = (event)=>{
    setPassword(event.target.value);
  }

  let submit = (e)=>{
    e.preventDefault();
    let obj = {};
    obj.username = email;
    obj.pass = password;
    
    fetch(`http://localhost:4500/adminLogin`,{
        method:"POST",
       headers:{
        'Content-type':'Application/json'
       },
       body:
        JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res.status==200){
        // alert(res.message);
        swal.fire(res.message)
        window.location.href = "http://localhost:3000/adminhome";}
      else{
        console.log(res.status)
        swal.fire("you are not authorized")
      }
    
    
    setEmail("");
    setPassword("");
    

    })
    .catch((err)=>console.log(err))
    
  }


  return (
    <>
    {/* <Header/> */}
    <div>
        <div className={styles.container}>
        <div>
            <h3>Welcome Admin</h3>
            <h1>Login to your Account</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                  <input className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={email_change} required/>
                  {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={password_change} required/>
                </div>
                  
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>


        
    </div>
    </div>
    </>
  )
}

export default Adminlogin