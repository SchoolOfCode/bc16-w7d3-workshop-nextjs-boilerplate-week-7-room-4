"use client";
import { useState } from "react";
import "./page.css";

export default function Page() {
	const [inputError, setInputError] = useState(false);

	const [formData, setFormData] = useState({
		name: null,
		postcode: null,
		address: null,
		city: null,
		phone: null,
		email: null,
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setInputError(false);
		for (const [key, value] of Object.entries(formData)) {
			if (!value) {
				setInputError(true);
			}
		}

		inputError && console.log(formData);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h3>Personal Information</h3>
				<div className="form-section">
					<label htmlFor="name">Full Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>

					<label htmlFor="postcode">Postcode</label>
					<input
						type="text"
						id="postcode"
						name="postcode"
						value={formData.postcode}
						onChange={handleChange}
					/>

					<label htmlFor="address">House/Flat Number and Street Name</label>
					<input
						type="text"
						id="address"
						name="address"
						value={formData.address}
						onChange={handleChange}
					/>

					<label htmlFor="city">City</label>
					<input
						type="text"
						id="city"
						name="city"
						value={formData.city}
						onChange={handleChange}
					/>
				</div>

				<h3>Contact Information</h3>

				<div className="form-section">
					<label htmlFor="phone">Phone Number</label>
					<input
						type="phone"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
					/>

					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>

				{inputError && (
					<div style={{ color: "red" }}>
						All inputs are required. Please complete empty fields.
					</div>
				)}

				<button type="submit">Request Design Consultation</button>
			</form>
		</>
	);
}
