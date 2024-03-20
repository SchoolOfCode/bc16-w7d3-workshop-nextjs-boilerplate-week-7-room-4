import "./reverse-article.css"

export default function ReverseArticle({src, alt, h3Text, pText}){
    return(
        <article>
						<h3>{h3Text}</h3>
						<p>
							{pText}
						</p>
                        <img src={src} alt={alt} />
		</article>
    )
}