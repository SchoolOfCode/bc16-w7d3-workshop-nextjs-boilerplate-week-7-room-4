"use client";
import { useState } from "react";
import FoundersButton from "../menu/button/FoundersButton";
import Link from "next/link";
// import FoundersButton from "@/src/menu/button/FoundersButton";

export default function Header() {
	const [visibility, setVisibility] = useState(false);

	function handleClick() {
		console.log(visibility);
		setVisibility(!visibility);
	}

	function Menu({visibility}){
		if (visibility){
			return (
				<div className="fullscreen-menu">
					<div className="menu-container">
					<button onClick={handleClick} className="close-button"><img src="/menu-open-button.png"/></button>
					<Link href='/' onClick={handleClick}>Home</Link>
					<Link href='/founders'onClick={handleClick}>Founders</Link>
					</div>
				</div>
			)
		}

	}

	return (
		<header className="logo">
			<p>🔥 Fireplace Palace</p>
			<button onClick={handleClick} className="menu-button"><img src="/menu-open-button.png"/></button>
			<Menu visibility={visibility}/>
		</header>
	);
}
