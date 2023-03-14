import React from 'react'
import {auth,provider} from "../firebase-config"
import { signInWithPopup} from 'firebase/auth'
import {  useNavigate } from 'react-router-dom';

const Login = ({setisAuth}) => {
    let navigate=useNavigate();

  const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
     localStorage.setItem("isAuth",true);
     setisAuth(true)
     navigate("/")
    })
  }

  return (
    <div className='loginPage'>
      <p>Sign in With Google</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>Signin With Google</button>
    </div>
  )
}

export default Login
