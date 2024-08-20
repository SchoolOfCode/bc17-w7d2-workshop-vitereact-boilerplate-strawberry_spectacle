"use client"
import { useState } from "react";

export default function ContactForm() {

const [nameInput,setNameInput] = useState("")

function handleInputChangeName (event){

  console.log(event.target.value)
}

  return (
    <>

      <form>
        <fieldset>
          <legend>Personal Information</legend>

          <div className="form-group">
            <label for="full-name">Full Name</label>
            <input type="text" id="full-name" name="full-name" onChange={(event) => handleInputChangeName (event)} required /> 
          </div>

          <div className="form-group">
            <label for="postcode">Postcode</label>
            <input type="text" id="postcode" name="postcode" required />
          </div>

          <div className="form-group">
            <label for="address">House/Flat Number and Street Name</label>
            <input type="text" id="address" name="address" required />
          </div>

          <div className="form-group">
            <label for="city">City</label>
            <input type="text" id="city" name="city" required />
          </div>
        </fieldset>
        <fieldset>
          <legend>Contact Information</legend>

          <div className="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required />
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
