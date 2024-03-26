"use client";
import { useState } from "react";

export default function Page() {
	const [formData, setFormData] = useState({
		name: "",
		postcode: "",
		email: "",
		message: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(
			`Name: ${formData.name}, Postcode: ${formData.postcode} Email: ${formData.email}, Message: ${formData.message}`
		);
	};

	return (
		<>
			<h3>Personal Information</h3>
			<form onSubmit={handleSubmit}>
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

				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
				<label htmlFor="message">Message:</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
				/>

				<button type="submit">Submit</button>
			</form>
		</>
	);
}
