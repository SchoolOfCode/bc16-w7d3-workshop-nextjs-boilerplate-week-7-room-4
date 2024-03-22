"use client";
import { useState } from "react";
// import FoundersButton from "@/src/menu/button/FoundersButton";

export default function Header() {
	const [visibility, setVisibility] = useState(false);

	function handleClick() {
		console.log(visibility);
		setVisibility(!visibility);
	}

	return (
		<header className="logo">
			<p>🔥 Fireplace Palace</p>
			<button onClick={handleClick}>Menu</button>
		</header>
	);
}
