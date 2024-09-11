import React, { useState } from 'react'
import './loginpopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setLogin}) => {


    const[currState,setCurrstate] = useState('Login')
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>
{currState}

            </h2>
            <img   onClick = {()=>{setLogin(false)}}  src  = {assets.cross_icon} alt = ''/>
        </div>
<div className="login-popup-inputs">
    {currState === "Login"?<></>:   <input type = "text" placeholder=' Name' required/> }

    <input type = "email" placeholder=' your email' required/>
    <input type = "password" placeholder=' password' required/>
</div>
<button>{currState ==="Signup"? "Create Account": "Login"}</button>
<div className="login-popup-condition">
    <input type = "checkbox" required/>
    <p>By continuing this I agree to terms and conditions and Privacy Policy</p>

</div>
{currState === "Login"?<p>Create a new Account, <span onClick = {()=>{setCurrstate("Signup")}}>Click here</span></p>:<p>Already have an account? <span onClick={()=>{setCurrstate("Login")}}>Login here</span> </p>}



      </form>


    </div>
  )
}

export default LoginPopup