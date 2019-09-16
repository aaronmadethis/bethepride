import React from "react"
import LinkButton from "./link-button"

import "./hero.scss"

class Hero extends React.Component {
    render() {
        const {content} = this.props;
        const data = JSON.parse(content);

        return(
            <>
            <div className="hero__content">
                <h1 className="hero__headline">{data.headline}<br /><span>{data.headlineAlt}</span></h1>
                <p className="hero__subheadline">{data.subheadline}</p>
                <LinkButton
                    href={data.url}
                    buttonText={data.buttonText}
                />
            </div>
            <small className="hero__caption">{data.captionText}</small>
            </>
        )
    }
}

export default Hero
