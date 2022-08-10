import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./common.css"
const Sarchbar = () => {
    const [from,setform] = useState("")
    const [To,setTo] = useState("")
    const [arrival,setarrival] = useState(0)
    const [departure,setdeparture]= useState(0)
    const [data,setdata] = useState([])
    const check = []
     const fetch = () => {
        axios.get(`http://localhost:8080/array`).then((res)=>{
            console.log(res)
            setdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
     }
    useEffect(()=>{
        fetch()
    },[])

  return (
   <div>
    <div className='search_container'>
        <div className="text_container">
            <p>From : </p>
            <p>To : </p>
            <p>Arrival : </p>
            <p>Departure : </p>

        </div>
        <div className="search">
            <div className="input1_box">
                <input type="text" value={from}
            placeholder='From ' onChange={(e)=>{
                setform(e.target.value)
            }}/></div>
             <div className="input2_box">
                <input type="text" value={To}
            placeholder='To ' onChange={(e)=>{
                setTo(e.target.value)
            }}/></div>
             <div className="input3_box">
                <input type="date" value={arrival}
            placeholder='Arrival ' onChange={(e)=>{
                setarrival(e.target.value)
            }} /></div>
             <div className="input4_box">
                <input type="date" value={departure}
            placeholder='Departure ' onChange={(e)=>{
                setdeparture(e.target.value)
            }} /></div>

            <button className='search_button' onClick={()=>{
                console.log(from,To,arrival,departure)
                console.log(data)
               let tem = data.filter((ele)=>{
                    return ele.from == from && ele.to== To 
                })
                console.log(tem)
                setdata(tem)
            }}>Search</button>
        </div>
        
    </div>
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
               <button className='booked_now' onClick={()=>{
                let tem
                for(let i = 0 ; i < check.length;i++)
                {
                    if(check[i] == ele.id)
                    {
                        tem=1
                    }
                }
                (tem == null)?axios.post("http://localhost:8080/booked",
                ele).then((res)=>{
                    console.log(res)
                    
                }).catch((err)=>{
                    console.log(err)
                    if(err.code =="ERR_BAD_RESPONSE")
                    {
                        alert("already added")
                    }
                }):alert("already Booked")
                check.push(ele.id)
               }}>Booked Now</button>
             </div>
            })
        }
    </div>
    </div>
  )
}

export default Sarchbar