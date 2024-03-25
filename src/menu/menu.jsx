"use client";

import "./menu.css";
import FoundersButton from "@/src/menu/button/FoundersButton";
import { useState } from "react";

export default function Menu() {
	const [visibility, setVisibility] = useState(false);

	function handleClick() {
		console.log(visibility);
		setVisibility(!visibility);

		// if (visibility === "invisible") {
		// 	setVisibility("visible");
		// } else if (visibility === "visible") {
		// 	setVisibility("invisible");
		// }
	}

	if (visibility) {
		return (
			<>
				<button onClick={handleClick}>Menu</button>
				<div>
					<FoundersButton />
				</div>
			</>
		);
	}
}
