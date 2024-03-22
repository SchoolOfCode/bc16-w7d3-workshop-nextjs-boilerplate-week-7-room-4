"use client";
import { useState, useEffect } from "react";

import Link from "next/link";

export default function FoundersButton({pageName}) {
	const [link, setLinkText] = useState(`/${pageName}`);
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
