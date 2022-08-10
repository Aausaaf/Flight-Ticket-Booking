import React from 'react'
import {GoogleLogin} from 'react-google-login'

const responseGoole = (response) => {
    console.log(response)
}
const Googlelogin = () => {
  return (
    <>
    <GoogleLogin clientId='1060451877993-cbb44o536r60lui4fsghj60602511qjd.apps.googleusercontent.com'
    onSuccess={responseGoole}
    onFailure={responseGoole}/>
    
        
    </>
  )
}

export default Googlelogin