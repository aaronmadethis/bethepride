import React from "react"
import "./lion-life.scss"

import StaticInstagramFeed from "./static-instagram-feed"
import LinkButton from "./link-button"

const LionLife = ({ content }) => {
    const data = JSON.parse(content);

    return(
        <div className="lion-life__content">
            <div className="lion-life__heading">
                <h2
                    className="lion-life__headline"
                    dangerouslySetInnerHTML={{__html:data.headline}}
                />
                <div
                    className="lion-life__paragraph"
                    dangerouslySetInnerHTML={{__html:data.paragraph}}
                />
                <div className="lion-life__button">
                    <LinkButton
                        href={data.buttonUrl}
                        buttonText={data.buttonText}
                    />
                </div>
            </div>
            <div className="lion-life__instagram">
                <StaticInstagramFeed />
            </div>
            <div className="lion-life__button">
                <LinkButton
                    href={data.buttonUrl}
                    buttonText={data.buttonText}
                />
            </div>
        </div>
    )
}

export default LionLife
