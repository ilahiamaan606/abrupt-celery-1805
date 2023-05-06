import React ,{useState,useEffect}from 'react'
import loginGif from "./opt1.gif"
import styles from './Login.module.css'
import Header from '../../components/Header';
import Footer from '../footer/Footer';
import { Navigate } from "react-router-dom";
function Login() {

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
    obj.email = email;
    obj.password = password;
    fetch("http://localhost:4500/users/login",{
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
    setEmail("");
    setPassword("");
    if(res=="Login Succesfull"){
      window.location.href="/"
    }
    })
    .catch((err)=>console.log(err))
    
  }


  return (
    <>
    <Header/>
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