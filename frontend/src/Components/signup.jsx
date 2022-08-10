import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState()
    const [username,setusername]= useState("")
    
  return (
    <div className="signup">
        <h1>Sigh Up</h1>
        <input type="text" value={name} onChange={(e)=>{
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
        <button  
        onClick={()=>{
            let a= {
                name:name,
                email:email,
                password:password,
                username:username,
                mobile:703343213,
                description:"woirfhowiruh oiwohiuor"

            }
            axios.post("https://masai-api-mocker.herokuapp.com/auth/register",a).then((res)=>{
                if(res.data)
                {
                    alert("Sign up Successfull Go to login page")
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