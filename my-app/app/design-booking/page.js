"use client"
import { useState } from "react";

export default function ContactForm() {

  const [fullName,setFullName] = useState("")
  const [postcode, setPostcode] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  
  function handleChange (event){

    if (event.target.name === "fullName") {
      setFullName(event.target.value);
    }

    if (event.target.name === "postcode") {
      setPostcode(event.target.value);
    }

    if (event.target.name === "address") {
      setAddress(event.target.value);
    }  

    if (event.target.name === "city") {
      setCity(event.target.value);
    }

    if (event.target.name === "phone") {
      setPhone(event.target.value);
    }

    if (event.target.name === "email") {
      setEmail(event.target.value);
    }

    console.log(event.target.value)
    console.log(event.target.name)
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

// when someone submits form
// we want to handle submission
  //stop form submitting
    //


  return (
    <>

      <form onSubmit={(event) => handleSubmit(event)}>
        <fieldset>
          <legend>Personal Information</legend>

          <div className="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={fullName} onChange={(event) => handleChange (event)} /> 
          </div>

          <div className="form-group">
            <label for="postcode">Postcode</label>
            <input type="text" id="postcode" name="postcode" value={postcode} onChange={(event) => handleChange (event)} />
          </div>

          <div className="form-group">
            <label for="address">House/Flat Number and Street Name</label>
            <input type="text" id="address" name="address" value={address} onChange={(event) => handleChange (event)} />
          </div>

          <div className="form-group">
            <label for="city">City</label>
            <input type="text" id="city" name="city" value={city} onChange={(event) => handleChange (event)} />
          </div>
        </fieldset>
        <fieldset>
          <legend>Contact Information</legend>

          <div className="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(event) => handleChange (event)} />
          </div>

          <div className="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" value={email} onChange={(event) => handleChange (event)}  />
          </div>

          <p className="error-message">
            Error: all fields are required - some missing.
          </p>

          <button type="submit" className="submit-btn">
            Request Design Consultation
          </button>
        </fieldset>
      </form>
    </>
  );
}
