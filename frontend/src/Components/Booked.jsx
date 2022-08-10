import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./common.css"
const Booked = () => {
    const fetch = () => {
        axios.get(`http://localhost:8080/booked`).then((res)=>{
            console.log(res)
            setdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
     }
    useEffect(()=>{
        fetch()
    },[])
    const [data,setdata] = useState([])
  return (
    <div>
         <div className="data_conatiner">
        {
            data.map((ele)=>{
             return <div className='flight_list'>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1FzVeSLY7eDCE7Cx_e8JUEuXdYeZpHjA8eQ&usqp=CAU" alt="" />
               <div className="block">
                <div className="flight_title">
                   <p>Flight Name : </p> 
                   <p>From : </p>
                   <p>To : </p>
                   <p>Arrival : </p>
                   <p>Departure : </p>
                </div>
              
              
                <div className="flight_value">
                   <p>{ele.flight_name}</p> 
                   <p>{ele.from}</p>
                   <p>{ele.to}</p>
                   <p>{ele.arrival}</p>
                   <p>{ele.departure}</p>
                </div>
               </div>
              
             </div>
            })
        }
    </div>
    </div>
  )
}

export default Booked