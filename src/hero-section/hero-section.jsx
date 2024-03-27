import "./hero-section.css";
import "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section className="hero-section">
			<Image
				className="hero-image"
				width={10000}
				height={10000}
				src="/hero-mobile.png"
				alt="Fireplace Image"
			/>

			<div className="orange-box-container">
				<section className="orange-box">
					<h1 id="orange-box-heading">Discover the Perfect Fireplace ...</h1>
					<p id="contact-info">
						<Link href="/booking">Book a consultation today!</Link>
						<span></span>
					</p>
				</section>
			</div>
		</section>
	);
}
