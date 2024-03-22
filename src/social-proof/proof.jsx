"use client";
import React, { useState, useEffect } from "react";

function useCountryData() {
	const [country, setCountry] = useState("");
	const [data, setData] = useState("");

	async function fetchData(country) {
		const URL = `https://seal-app-336e8.ondigitalocean.app/reviews`;

		try {
			const response = await fetch(`${URL}?country=${country}`);
			const responseData = await response.json();
			setData(responseData);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	useEffect(() => {
		if (country) {
			fetchData(country);
		}
	}, [country]);

	return { country, setCountry, data };
}

function Card({ data, country }) {
	if (country!=='') {
	  return (
	  	<div className="social-card">
			<p className="card-text">{data.text}</p>
			<p className="card-info">
				{data.author} - {data.location}
			</p>
		</div>
	  )
	}
  }

export default function Proof() {
	const { country, setCountry, data } = useCountryData();

	return (
		<section className="social-proof-section">
			<h2 className="home-h2">Trusted.</h2>
			<hr />
			<p className="trusted-message">{"We've got thousands of happy customers all over the UK. Choose your country to see the latest review:"}</p>
			<div className="button-container">
				<button onClick={() => setCountry("england")}>England</button>
				<button onClick={() => setCountry("wales")}>Wales</button>
				<button onClick={() => setCountry("scotland")}>Scotland</button>
			</div>
			<Card data={data} country={country}/>			
		</section>
	);
}
