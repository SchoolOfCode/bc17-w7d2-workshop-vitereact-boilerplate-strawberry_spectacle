"use client"
import { useState, useReducer } from "react";

import styles from "./page.module.css";

//this sets the initial state to empty, there will be no error as the intial response wouldn't need one 
const initialState= {
  data:{
    fullname:""
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

    default: 
      return state;
  }
}

export default function ContactForm() {

  const [state, dispatch] = useReducer (reducer,initialState)
  const [error, setError] = useState (false)


  function handleChange (event){

    if (event.target.name === "fullName") {
      dispatch ({
        type: "CHANGE_FIELD",
        payload: {
          fieldName: event.target.name,
          fieldValue: event.target.value
        }
      })
    }

    if (event.target.name === "postcode") {
      dispatch ({
        type: "CHANGE_FIELD",
        payload: {
          fieldName: event.target.name,
          fieldValue: event.target.value
        }
      })
    }

    if (event.target.name === "address") {
      dispatch ({
        type: "CHANGE_FIELD",
        payload: {
          fieldName: event.target.name,
          fieldValue: event.target.value
        }
      })
    }

    if (event.target.name === "city") {
      dispatch ({
        type: "CHANGE_FIELD",
        payload: {
          fieldName: event.target.name,
          fieldValue: event.target.value
        }
      })
    }

    if (event.target.name === "phone") {
      dispatch ({
        type: "CHANGE_FIELD",
        payload: {
          fieldName: event.target.name,
          fieldValue: event.target.value
        }
      })
    }

    if (event.target.name === "email") {
      dispatch ({
        type: "CHANGE_FIELD",
        payload: {
          fieldName: event.target.name,
          fieldValue: event.target.value
        }
      })
    }

    console.log(event.target.value)
    console.log(event.target.name)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!state.data.fullName || !state.data.postcode || !state.data.address || !state.data.city || !state.data.phone || !state.data.email)  {
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
            <div><input type="text" id="fullName" name="fullName" value={state.data.fullName} onChange={(event) => handleChange (event)} /> </div>
          </div>

          <div className="form-group">
            <label for="postcode">Postcode</label>
            <input type="text" id="postcode" name="postcode" value={state.data.postcode} onChange={(event) => handleChange (event)} />
          </div>

          <div className="form-group">
            <label for="address">House/Flat Number and Street Name</label>
            <input type="text" id="address" name="address" value={state.data.address} onChange={(event) => handleChange (event)} />
          </div>

          <div className="form-group">
            <label for="city">City</label>
            <input type="text" id="city" name="city" value={state.data.city} onChange={(event) => handleChange (event)} />
          </div>

        </fieldset>

          <div>
          <legend className={styles.legend}>Contact Information</legend>
          </div>

        <fieldset className={styles.fieldsetContainer}>

        <div className="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={state.data.phone} onChange={(event) => handleChange (event)} />
          </div>

          <div className="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" value={state.data.email} onChange={(event) => handleChange (event)}  />
          </div>
        
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
