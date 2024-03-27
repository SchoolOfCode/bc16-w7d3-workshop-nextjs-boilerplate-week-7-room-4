"use client";
import "./page.css";
import { useState } from "react";

export default function Page() {
	const defaultState = {
		fullName: "",
		postcode: "",
		house: "",
		city: "",
		phoneNumber: "",
		email: "",
	};
	const [formData, setFormData] = useState(defaultState);
	const [errorDisplay, setErrorDisplay] = useState(false);
	const [errorClass, setErrorClass] = useState("hide");
	const [missingInputs, setMissingInputs] = useState("The following:");

	const handleChange = (event) => {
		const { id, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setMissingInputs("The following:");
		if (formData.city == "") {
			setMissingInputs((prevFormData) => prevFormData + " city");
		}
		if (formData.email == "") {
			setMissingInputs((prevFormData) => prevFormData + " email");
		}
		if (formData.house == "") {
			setMissingInputs((prevFormData) => prevFormData + " house");
		}
		if (formData.fullName == "") {
			setMissingInputs((prevFormData) => prevFormData + " full name");
		}
		if (formData.postcode == "") {
			setMissingInputs((prevFormData) => prevFormData + " postcode");
		}
		if (formData.phoneNumber == "") {
			setMissingInputs((prevFormData) => prevFormData + " phone number");
		}
		if (
			formData.city == "" ||
			formData.email == "" ||
			formData.house == "" ||
			formData.fullName == "" ||
			formData.postcode == "" ||
			formData.phoneNumber == ""
		) {
			setErrorDisplay(true);
		} else {
			setErrorDisplay(false);

			console.log(formData);
		}
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

				{errorDisplay && (
					<p className="errorClass show">
						Error all fields are required - {missingInputs} are missing
					</p>
				)}
				<button type="submit">Request Design Consultation</button>
			</form>
		</div>
	);
}
