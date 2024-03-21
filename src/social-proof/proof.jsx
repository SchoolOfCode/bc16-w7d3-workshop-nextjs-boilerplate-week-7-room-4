"use client";
import React, { useState, useEffect } from "react";

export default function Proof() {
	const [country, setCountry] = useState("");

	return (
		<section className="social-proof-section">
			<div className="button-container">
				<button onClick={() => setCountry("england")}>England</button>
				<button onClick={() => setCountry("wales")}>Wales</button>
				<button onClick={() => setCountry("scotland")}>Scotland</button>
			</div>
			<h1>{country}</h1>
		</section>
	);
}
