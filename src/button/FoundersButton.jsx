"use client";
import { useState } from "react";

import Link from "next/link";

export default function FoundersButton() {
	const [link, setLinkText] = useState("/founders");
	const [text, setText] = useState("Founders");

	function handleClick() {
		if (link === "/founders") {
			setLinkText("/");
		} else if (link === "/") {
			setLinkText("/founders");
		}
		if (text === "Founders") {
			setText("Home");
		} else if (text === "Home") {
			setText("Founders");
		}
	}

	return (
		<Link onClick={handleClick} href={link}>
			{text}
		</Link>
	);
}
