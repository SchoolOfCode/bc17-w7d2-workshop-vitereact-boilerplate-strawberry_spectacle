"use client"
import { useState } from "react";

import styles from "./page.module.css";


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

    if (!fullName || !postcode || !street || !city || !phoneNumber || !email)  {
      setError(true);
      return;
  }

  if (error) {
      setError(false);
  }

  console.log("Data!!!!!!");
  }

// when someone submits form
// we want to handle submission
  //stop form submitting
    //


  return (
    <>
      <h2 className={styles.designTitle}>Design Booking</h2>
      
          <div>
          <legend className={styles.legend}>Personal Information</legend>
          </div>

      <form onSubmit={(event) => handleSubmit(event)}>

        <fieldset className={styles.fieldsetContainer}>
          
          <div className={styles.formGroup}>
            <div><label for="fullName">Full Name</label></div>
            <div><input type="text" id="fullName" name="fullName" value={fullName} onChange={(event) => handleChange (event)} /> </div>
          </div>

          <div className={styles.formGroup}>
            <div><label for="postcode">Postcode</label></div>
            <div><input type="text" id="postcode" name="postcode" value={postcode} onChange={(event) => handleChange (event)} /></div>
          </div>

          <div className={styles.formGroup}>
            <div><label for="address">House/Flat Number and Street Name</label></div>
            <div><input type="text" id="address" name="address" value={address} onChange={(event) => handleChange (event)} /></div>
          </div>

          <div className={styles.formGroup}>
            <div><label for="city">City</label></div>
            <div><input type="text" id="city" name="city" value={city} onChange={(event) => handleChange (event)} /></div>
          </div>
        </fieldset>

          <div>
          <legend className={styles.legend}>Contact Information</legend>
          </div>

        <fieldset className={styles.fieldsetContainer}>

          <div className={styles.formGroup}>
            <div><label for="phone">Phone Number</label></div>
            <div><input type="tel" id="phone" name="phone" value={phone} onChange={(event) => handleChange (event)} /></div>
          </div>

          <div className={styles.formGroup}>
            <div><label for="email">Email Address</label></div>
            <div><input type="email" id="email" name="email" value={email} onChange={(event) => handleChange (event)}  /></div>
          </div>

        </fieldset>

          <p className={styles.errorMessage}>
            Error: all fields are required - some missing.
          </p>

        <button className={styles.submitButton} type="submit">
            Request Design Consultation
        </button>

      </form>
      <div>

      </div>
    </>
  );
}
