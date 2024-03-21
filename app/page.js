import Image from "next/image";
import "./page.css";
import HeroSection from "@/src/hero-section/hero-section";
import ArticleContainer from "@/src/article-container/article-container";
import Proof from "@/src/social-proof/proof";

export default function Home() {
	return (
		<>
			<HeroSection />
			<Proof />
			<hr className="hidden-hr" />
			<h2 className="home-h2">How it works.</h2>
			<hr />

			<ArticleContainer />
		</>
	);
}
