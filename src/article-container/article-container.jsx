import "react"
// import "./article-container.css"
import Article from "./article/article.jsx"

export default function ArticleContainer(){
    return(
    <section className="article-container">
                    <Article 
                    src= {"images/how-it-works-1.png"}
                    alt = {"Fireplace with sofas"}
                    h3Text={"Give us a call ..."}
                    pText={"Call us and book in a 'Design Consultation' on a date and time to suit you."}
                    />
					<hr />
                    <Article 
                    src= {"images/how-it-works-2.png"}
                    alt = {"Person working"}
                    h3Text={"We come to you ..."}
                    pText={"We come to your home to do an assessment of the space and to your style preference..."}
                    />
					<hr />
                    <Article 
                    src= {"images/how-it-works-3.png"}
                    alt = {"Person talking"}
                    h3Text={"We recommend ..."}
                    pText={"We send you a bespoke set of fireplace recommendations."}
                    />
				</section>
    )
}
