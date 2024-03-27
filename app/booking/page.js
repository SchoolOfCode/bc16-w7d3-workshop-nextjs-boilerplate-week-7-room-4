"use client";
import "./page.css";
import { useState, useReducer } from "react";

export default function Page() {
  const defaultState = {
    fullName: "",
    postcode: "",
    house: "",
    city: "",
    phoneNumber: "",
    email: "",
    errorDisplay: false,
    missingInputs: "The following:",
    loadingDisplay: false,
    buttonAttribute: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "UPDATE_FORM_DATA":
        const { id, value } = action.payload;
        return { ...state, [id]: value };
      case "FORM_SUBMITTED":
        let newState = {
          ...state,
          errorDisplay: false,
          missingInputs: "The following:",
          loadingDisplay: true,
          buttonAttribute: true,
        };
        for (const [key, value] of Object.entries(state)) {
          if (value === "") {
            newState = {
              ...newState,
              errorDisplay: true,
              missingInputs: newState.missingInputs + ` ${key}`,
              loadingDisplay: false,
            };
          }
        }
        if (!newState.errorDisplay) {
          console.log(newState);
        }
        return newState;
    }
  }

  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleChange = (event) => {
    const { id, value } = event.target;
    dispatch({ type: "UPDATE_FORM_DATA", payload: { id: id, value: value } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "FORM_SUBMITTED" });
  };

  return (
    <div className="booking-container">
      <div className="booking-title">
        <h2>Design Booking</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <p>Personal Information</p>
        <div className="form-container">
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" type="text" onChange={handleChange}></input>
          <label htmlFor="postcode">Postcode</label>
          <input id="postcode" type="text" onChange={handleChange}></input>
          <label htmlFor="house">House/Flat Number and Street Name</label>
          <input id="house" type="text" onChange={handleChange}></input>
          <label htmlFor="city">City</label>
          <input id="city" type="text" onChange={handleChange}></input>
        </div>
        <p>Contact Information</p>
        <div className="form-container">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input id="phoneNumber" type="text" onChange={handleChange}></input>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" onChange={handleChange}></input>
        </div>

        {state.errorDisplay && (
          <p className="errorClass show">
            Error all fields are required - {state.missingInputs} are missing
          </p>
        )}
        {state.loadingDisplay && (
          <p className="loadingClass">Submitting form...</p>
        )}
        <button disabled={state.buttonAttribute} type="submit">
          Request Design Consultation
        </button>
      </form>
    </div>
  );
}
