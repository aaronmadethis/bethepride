import React from "react"
import "./exhibition.scss"

import ExhibitionPlaceholderImage from "../images/exhibition-placeholder-image.jpg"
import arrowIconRight from "../images/icon-arrow-right.svg"

const Exhibition = ({ content }) => {
    const data = JSON.parse(content)
    return(
        <section className="exhibition">
            <h1>{data.headline}</h1>
            <div className="exhibition__slider">
                <div className="slides">
                    <div className="slide">
                        <figure>
                            <img src={ExhibitionPlaceholderImage} />
                            <figcaption>{data.caption1}</figcaption>
                        </figure>
                    </div>
                    <div className="slide">
                        <figure>
                            <img src={ExhibitionPlaceholderImage} />
                            <figcaption>{data.caption2}</figcaption>
                        </figure>
                    </div>
                    <div className="slide">
                        <figure>
                            <img src={ExhibitionPlaceholderImage} />
                            <figcaption>{data.caption3}</figcaption>
                        </figure>
                    </div>
                </div>
                <img src={arrowIconRight} />
            </div>
            <p>{data.paragraph}</p>
        </section>
    )
}

export default Exhibition
