"use client";
import "./page.css";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    fullName: "",
    postcode: "",
    house: "",
    city: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
        <button type="submit">Request Design Consultation</button>
      </form>
    </div>
  );
}
