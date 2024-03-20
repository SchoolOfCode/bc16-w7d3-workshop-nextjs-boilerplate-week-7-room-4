import "react"
import "./article.css"

export default function Article({src, alt, h3Text, pText}){
    return(
        <article>
						<img src={src} alt={alt} />
						<h3>{h3Text}</h3>
						<p>
							{pText}
						</p>
		</article>
    )
}