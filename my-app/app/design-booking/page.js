"use client"
import { useState } from "react";

import styles from "./page.module.css";


export default function ContactForm() {

  const [fullName,setFullName] = useState("")

  const [ error, setError ] = useState(false);
  
  function handleChange (event){

    if (event.target.name === "fullName") {
      setFullName(event.target.value);
    }

    

    console.log(event.target.value)
    console.log(event.target.name)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!fullName)  {
      setError(true);
      return;
    }

    if (error) {
        setError(false);
    }

    console.log("Data!!!!!!");
  }

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

        </fieldset>

          <div>
          <legend className={styles.legend}>Contact Information</legend>
          </div>

        <fieldset className={styles.fieldsetContainer}>

        
        </fieldset>

        { error && <p className={styles.errorMessage}>Error: all fields are required - some missing.</p> }    

        <button className={styles.submitButton} type="submit">
            Request Design Consultation
        </button>

      </form>
      <div>

      </div>
    </>
  );
}
