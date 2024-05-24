import React from 'react'
import { useLocation } from "react-router-dom";
const Success = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const firstName = queryParams.get("firstName");
    const lastName = queryParams.get("lastName");
    const email = queryParams.get("email");
    const password = queryParams.get("password");
    const phoneNo = queryParams.get("phoneNo");
    const country = queryParams.get("country");
    const city = queryParams.get("city");
    const panNo = queryParams.get("panNo");
    const adharNo = queryParams.get("adharNo");
    const userName = queryParams.get("userName");


  return (
    <div>
            <h2>Received Form Values:</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p> 
            <p>Username: {userName}</p>
            <p>country: {country}</p>
            <p>city: {city}</p>
            <p>pan number: {panNo}</p>
            <p>Adhar Number: {adharNo}</p>
            <p>Phone Number: {phoneNo}</p>
           
        </div>
  )
}

export default Success