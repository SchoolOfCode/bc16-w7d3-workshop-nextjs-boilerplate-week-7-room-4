import "./hero-section.css"
import 'react'
import Image from "next/image";

export default function HeroSection(){
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
                    <h1>Discover the Perfect Fireplace ...</h1>
                    <p>
                        Book consultation:{" "}
                        <span className="phone-number">0121 345 6789</span>
                    </p>
                </section>
            </div>
        </section>
    )
}

