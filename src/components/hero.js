import React from "react"
import "./hero.scss"

const Hero = ({content}) => {
    const data = JSON.parse(content)
    return(
        <>
        <div className="hero__content">
            <h1>{data.headline}<br /><span>{data.headlineAlt}</span></h1>
            <p>{data.subheadline}</p>
            <a href="#" className="button button--primary" rel="noopener noreferrer" target="_blank">{data.buttonText}</a>
        </div>
        <small className="hero__caption">{data.captionText}</small>
        </>
    )
}

export default Hero
