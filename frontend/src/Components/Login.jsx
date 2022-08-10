import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./common.css"
import axios from 'axios'
const Login = () => {
  
    const [password,setpassword] = useState()
    const [username,setusername]= useState("")
    const navigate = useNavigate()
  return (
    <div className="signup">
        <h1>Login</h1>
       
        <input style={{marginTop:"7vh"}} type="text" value={username} onChange={(e)=>{
            setusername(e.target.value)  
        }} placeholder="Enter username" />
        <br />
      <input type="text" value={password} onChange={(e)=>{
            setpassword(e.target.value)  
        }} placeholder="Enter your password" />
        
        
        <br />
        <button style={{marginTop:"6vh"}}  className='signup_button'
        onClick={()=>{
          console.log(username,password)
            axios.post("https://masai-api-mocker.herokuapp.com/auth/login",{
                
                "password": password,
                "username": username
               
              }).then((res)=>{
                if(res.data)
                {
                    alert("Login Successfull Go to Home page")
                    navigate("/")
                }
            }).catch((err)=>{
                console.log(err)
            })
        }}
        >Login</button>
        <p className='proute' onClick={()=>{
          navigate("/signup")
        }}>If You haven't account ?</p>
    </div>
  )
}

export default Login