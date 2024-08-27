"use client"

import { useReducer } from "react";

import styles from "./page.module.css";

// 1. This sets the initial state to empty (to the user "editing")
const initialState= {
  data:{
    fullname:"",
    postcode: "",
    address: "",
    city: "",
    phone: "",
    email: ""
  },
  status: "Editing"
};


//2. Reducer function set up
function reducer(state, action) {
  // 2.1 seting up the "Actions" for the reducer
  switch(action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.fieldName]: action.payload.fieldValue
        },
        error: state.error
      };
    case "ERROR":
      return {
        ...state,
        status: "Error, all fields are required"
      };
    case "FORM_SUBMITTING":
        return {
          ...state,
          status: "Submitting...please wait."
        }
    case "FORM_SUCCESS":
        return {
          ...state,
          status: "Success!"
        }
    default: 
      return state;
  }
}

// 3. Calling "Dispatch"

export default function ContactForm() {

  const [state, dispatch] = useReducer (reducer,initialState);

  console.log(state);

  function handleChange (event){

      dispatch ({
        type: "CHANGE_FIELD",
        payload: {
          fieldName: event.target.name,
          fieldValue: event.target.value
        }
      })
  }


  function handleSubmit(event) {
    event.preventDefault()

    dispatch({
        type: "FORM_SUBMITTING"
    });
    

    setTimeout (() => {

      if (!state.data.fullName || !state.data.postcode || !state.data.address || !state.data.city || !state.data.phone || !state.data.email) {
          dispatch({
            type: "ERROR"
          });
          return;
      }

      dispatch({
        type: "FORM_SUCCESS"
      });

      console.log("Data!!!!!!");

  }, 5000);
}

  return (
      <form onSubmit={(event) => handleSubmit(event)}>

        <h2 className={styles.designTitle}>Design Booking</h2>
        
        <legend className={styles.legend}>Personal Information</legend>

        <fieldset className={styles.fieldsetContainer}>

            <label className={styles.formGroup}>Full Name:
              <input
                type="text"
                name="fullName"
                onChange={(event) => handleChange(event)} 
                className={styles.field}
                value={state.data.fullName} 
              />
            </label>

            <label className={styles.formGroup}>Postcode:
              <input
                type="text"
                name="postcode"
                onChange={(event) => handleChange(event)} 
                className={styles.field}
                value={state.data.postcode} 
              />
            </label>

            <label className={styles.formGroup}>House/Flat Number and Street Name:
              <input
                type="text"
                name="address"
                onChange={(event) => handleChange(event)} 
                className={styles.field}
                value={state.data.address} 
              />
            </label>

            <label className={styles.formGroup}>City:
              <input
                type="text"
                name="city"
                onChange={(event) => handleChange(event)} 
                className={styles.field}
                value={state.data.city} 
              />
            </label>

         </fieldset>

        <legend className={styles.legend}>Contact Information</legend>
        
        <fieldset className={styles.fieldsetContainer}>

            <label className={styles.formGroup}>Phone Number:
              <input
                type="number"
                name="phone"
                onChange={(event) => handleChange(event)} 
                className={styles.field}
                value={state.data.phone} 
              />
            </label>

            <label className={styles.formGroup}>Email Address:
              <input
                type="email"
                name="email"
                onChange={(event) => handleChange(event)} 
                className={styles.field}
                value={state.data.email} 
              />
            </label>

        </fieldset>

        {state.status === "error" && <p className={styles.errorMessage}>Error: all fields are required - some missing.</p>}

        <button className={styles.submitButton} type="submit">
          { state.status }
        </button>

      </form>
  )

}











