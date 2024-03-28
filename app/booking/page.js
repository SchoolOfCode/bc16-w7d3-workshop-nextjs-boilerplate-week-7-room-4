"use client";
import "./page.css";
import { useState, useReducer } from "react";

export default function Page() {
	const defaultState = {
		Full_Name: "",
		Postcode: "",
		House: "",
		City: "",
		Phone_Number: "",
		Email: "",
		errorDisplay: false,
		missingInputs: " ",
		loadingDisplay: false,
		buttonAttribute: false,
		displayForm: true,
		postcodeError: false,
		postcodeClass: "  ",
	};

	function reducer(state, action) {
		switch (action.type) {
			case "UPDATE_FORM_DATA":
				const { id, value } = action.payload;
				return { ...state, [id]: value };
			case "FORM_SUBMITTED":
				return formSubmitted(state);
			case "VALID_POSTCODE":
				return validPostcode(state);
			case "INVALID_POSTCODE":
				console.log("Invalid postcode");
				return invalidPostcode(state);
			case "VALIDATION_ERROR":
				console.log("Validation error");
				return state;
		}
	}

	const [state, dispatch] = useReducer(reducer, defaultState);
	const handleChange = (event) => {
		const { id, value } = event.target;
		dispatch({ type: "UPDATE_FORM_DATA", payload: { id: id, value: value } });
	};

	function formSubmitted(state) {
		let newState = {
			...state,
			errorDisplay: false,
			missingInputs: " ",
			loadingDisplay: true,
			buttonAttribute: true,
		};
		for (const [key, value] of Object.entries(state)) {
			if (value === "") {
				newState = {
					...newState,
					errorDisplay: true,
					missingInputs: newState.missingInputs + ` ${key},`,
					loadingDisplay: false,
					buttonAttribute: false,
				};
			}
		}
		if (!newState.errorDisplay) {
			console.log(newState);
		}
		return newState;
	}

	function validPostcode(state) {
		console.log("Valid postcode");
		return {
			...state,
			loadingDisplay: false,
			errorDisplay: false,
			displayForm: false,
		};
	}

	function invalidPostcode(state) {
		return {
			...state,
			loadingDisplay: false,
			buttonAttribute: false,
			displayForm: true,
			postcodeError: true,
			postcodeClass: "postcodeError",
		};
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch({ type: "FORM_SUBMITTED" });
		validatePostcode(state.Postcode);
	};

	async function validatePostcode(postcode) {
		if (postcode === "") {
			return;
		}
		const URL = "https://api.postcodes.io/postcodes/";

		fetch(`${URL}${postcode}`)
			.then((response) => response.json())
			.then((responseJson) => handleValidationResponse(responseJson))
			.catch(() => dispatch({ type: "VALIDATION_ERROR" }));
	}

	function handleValidationResponse(response) {
		const validCountries = ["England", "Scotland", "Wales"];
		if (response.status === 200) {
			if (validCountries.includes(response.result.country)) {
				dispatch({ type: "VALID_POSTCODE" });
			}
		} else {
			dispatch({ type: "INVALID_POSTCODE" });
		}
	}

	return (
		<div className="booking-container">
			<div className="booking-title">
				<h2>Design Booking</h2>
			</div>
			{!state.displayForm && (
				<div className="form-submitted">
					<span className="check-mark">✓</span>
					<h2>Thank You</h2>
					<p>The form was submitted successfully</p>
				</div>
			)}
			{state.displayForm && (
				<form onSubmit={handleSubmit}>
					<p>Personal Information</p>
					<div className="form-container">
						<label htmlFor="Full_Name">Full Name</label>
						<input id="Full_Name" type="text" onChange={handleChange}></input>
						<label htmlFor="Postcode">Postcode</label>
						<input
							className={state.postcodeClass}
							id="Postcode"
							type="text"
							onChange={handleChange}
						></input>
						{state.postcodeError && (
							<p id="postcodeError" style={{ color: "red", margin: 0 }}>
								England, Wales, Scotland bookings only
							</p>
						)}
						<label htmlFor="House">House/Flat Number and Street Name</label>
						<input id="House" type="text" onChange={handleChange}></input>
						<label htmlFor="City">City</label>
						<input id="City" type="text" onChange={handleChange}></input>
					</div>
					<p>Contact Information</p>
					<div className="form-container">
						<label htmlFor="Phone_Number">Phone Number</label>
						<input
							id="Phone_Number"
							type="text"
							onChange={handleChange}
						></input>
						<label htmlFor="Email">Email Address</label>
						<input id="Email" type="email" onChange={handleChange}></input>
					</div>

					{state.errorDisplay && (
						<p className="errorClass show">
							Error - all fields are required. The following fields are missing:
							<br />
							{state.missingInputs.replace(/_/g, " ").slice(0, -1)}
						</p>
					)}
					{state.loadingDisplay && (
						<p className="loadingClass">Submitting form...</p>
					)}
					<button disabled={state.buttonAttribute} type="submit">
						Request Design Consultation
					</button>
				</form>
			)}
		</div>
	);
}
