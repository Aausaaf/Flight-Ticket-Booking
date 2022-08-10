import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import "./common.css"
import {useNavigate} from 'react-router-dom'


const Navbar = () => {
   
    const navigate = useNavigate()
    
  
  return (
   <div className="navbar">
     <Link style={{marginLeft:"13vw"}} to="/" >Home</Link>
     <Link to="/booked">Booked</Link>
     <Link to="/login" >Login</Link>
     
   
     
   </div> 
  )
}

export default Navbar