import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState()
    const [username,setusername]= useState("")
    const navigate = useNavigate()
  return (
    <div className="signup">
        <h1>Sign Up</h1>
        <input type="text" style={{marginTop:"5vh"}} value={name} onChange={(e)=>{
            setname(e.target.value)  
        }} placeholder="Enter Your name" />
        <br />
        <input type="text" value={email} onChange={(e)=>{
            setemail(e.target.value)  
        }} placeholder="Enter Your email" />
        <br />
        <input type="text" value={password} onChange={(e)=>{
            setpassword(e.target.value)  
        }} placeholder="create your password" />
        <br />
        <input type="text" value={username} onChange={(e)=>{
            setusername(e.target.value)  
        }} placeholder="careate username" />
        <br />
        <button  className='signup_button'
        onClick={()=>{
            let a= {
                name:"aausaf",
                email:"aausafala@gmail.com",
                password:1234,
                username:"aausaf23",
                mobile:703343213,
                description:"woirfhowiruh oiwohiuor"

            }
            axios.post("https://masai-api-mocker.herokuapp.com/auth/register",{
                "name": name,
                "email": email,
                "password": password,
                "username": username,
                "mobile": "9876543210",
                "description": "A Transformation in education!" 
              }).then((res)=>{
                if(res.data)
                {
                    alert("Sign up Successfull Go to login page")
                    navigate("/login")

                }
            }).catch((err)=>{
                console.log(err)
            })
        }}
        >Sign up</button>
    </div>
  )
}

export default Signup