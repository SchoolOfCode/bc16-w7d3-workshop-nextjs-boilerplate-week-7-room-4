// "use client";
// import React, { useState, useEffect } from "react";

// export default function Proof() {
// 	const [country, setCountry] = useState("");
// 	const [data, setData] = useState("");

// 	async function getResponse(country) {
// 		const response = await fetch(
// 			`https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`
// 		);
// 		const data = await response.json();
// 		return data;
// 	}

// 	useEffect(() => {
// 		const name = async () => {
// 			const response = await getResponse(country);
// 			setData(response);
// 		};
// 		name();
// 	}, [country]);

// 	// useEffect(()=>{
// 	// 	fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`)
// 	// 		.then(response=>response.json())
// 	// 		.then(json=>setData(json))
// 	// }, [country])
// 	return (
// 		<section className="social-proof-section">
// 			<div className="button-container">
// 				<button onClick={() => setCountry("england")}>England</button>
// 				<button onClick={() => setCountry("wales")}>Wales</button>
// 				<button onClick={() => setCountry("scotland")}>Scotland</button>
// 			</div>
// 			<div className="social-card">
// 				<p>{data.text}</p>
// 				<h1>
// 					{data.author}-{data.location}
// 				</h1>
// 			</div>
// 		</section>
// 	);
// }
// ************************************************

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

function CardInfo({ data, country }) {
	if (country!=='') {
	  return (
	  	<p className="card-info">
	  		{data.author} - {data.location}
  		</p>
	  )
	}
  }

export default function Proof() {
	const { country, setCountry, data } = useCountryData();

	return (
		<section className="social-proof-section">
			<div className="button-container">
				<button onClick={() => setCountry("england")}>England</button>
				<button onClick={() => setCountry("wales")}>Wales</button>
				<button onClick={() => setCountry("scotland")}>Scotland</button>
			</div>
			<div className="social-card">
				<p>{data.text}</p>
				<CardInfo data={data} country={country}/>
			</div>
		</section>
	);
}
