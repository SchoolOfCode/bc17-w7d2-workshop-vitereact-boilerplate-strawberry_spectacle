"use client"
import { useState, useReducer } from "react";

import styles from "./page.module.css";

//this sets the initial state to empty, there will be no error as the intial response wouldn't need one 
const initialState= {
  data:{
    fullname:"",
    postcode: "",
    address: "",
    city: "",
    phone: "",
    email: ""
  },
  error: false
};

//switch case set up
//reducer function set up
//if none of the switch cases are 'met' then you just want to return the state
//the 'state' in this case is interacting with the feild on the wesbite
function reducer(state, action) {

  switch(action.type) {
    case "CHANGE_FIELD":
      return {
        data: {
          ...state.data,
          [action.payload.fieldName]: action.payload.fieldValue
        },
        error: state.error
      };
    case "ERROR":
      return {
        ...state,
        error: true
      };
    case "CLEAR_ERROR":
        return {
          ...state,
          error: false
        }
    default: 
      return state;
  }
}

// errors object
  // each input field has a key in the errors object

export default function ContactForm() {

  const [state, dispatch] = useReducer (reducer,initialState)

  console.log(state)

  function handleChange (event){

      dispatch ({
        type: "CHANGE_FIELD",
        payload: {
          fieldName: event.target.name,
          fieldValue: event.target.value
        }
      })


    // console.log(event.target.value)
    // console.log(event.target.name)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!state.data.fullName || !state.data.postcode || !state.data.address || !state.data.city || !state.data.phone || !state.data.email)  {
      dispatch({
        type: "ERROR"
      });
      return;
    }

    if (state.error) {
        dispatch({
          type: "CLEAR_ERROR"
        });
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
            <div className={styles.field}>< input type="text" id="fullName" name="fullName" value={state.data.fullName} onChange={(event) => handleChange (event)} /> </div>
          </div>

          <div className={styles.formGroup}>
            <div><label for="postcode">Postcode</label></div>
            <div><input type="text" id="postcode" name="postcode" value={state.data.postcode} onChange={(event) => handleChange (event)} /> </div>
          </div>

          <div className={styles.formGroup}>
            <div><label for="address">House/Flat Number and Street Name</label></div>
            <div><input type="text" id="address" name="address" value={state.data.address} onChange={(event) => handleChange (event)} /></div>
          </div>

          <div className={styles.formGroup}>
            <div><label for="city">City</label></div>
            <div><input type="text" id="city" name="city" value={state.data.city} onChange={(event) => handleChange (event)} /></div>
          </div>

        </fieldset>

          <div>
          <legend className={styles.legend}>Contact Information</legend>
          </div>

        <fieldset className={styles.fieldsetContainer}>

        <div className={styles.formGroup}>
            <div><label for="phone">Phone Number</label></div>
            <div><input type="tel" id="phone" name="phone" value={state.data.phone} onChange={(event) => handleChange (event)} /></div>
          </div>

          <div className={styles.formGroup}>
            <div><label for="email">Email Address</label></div>
            <div><input type="email" id="email" name="email" value={state.data.email} onChange={(event) => handleChange (event)}  /></div>
          </div>
        
        </fieldset>

        { state.error && <p className={styles.errorMessage}>Error: all fields are required - some missing.</p> }    

        <button className={styles.submitButton} type="submit">
            Request Design Consultation
        </button>

      </form>
      <div>

      </div>
    </>
  );
}
