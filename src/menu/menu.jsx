"use client";

import "./menu.css"
import FoundersButton from "@/src/menu/button/FoundersButton";
import { useState } from "react";

export default function Menu() {
	const [visibility, setVisibility] = useState("invisible");

	function handleClick() {
        console.log(visibility)
		if (visibility === "invisible") {
			setVisibility("visible");
		} else if (visibility === "visible") {
			setVisibility("invisible");
	    }
    }

	return (
        <>
        <button onClick={handleClick}>Menu</button>
		<div className={visibility}>
            <FoundersButton />
		</div>
        </>
	);
}
