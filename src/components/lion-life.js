import React from "react"
import "./lion-life.scss"

import ExhibitionPlaceholderImage from "../images/exhibition-placeholder-image.jpg"
import arrowIconRight from "../images/icon-arrow-right.svg"

const LionLife = ({ content }) => {
    const data = JSON.parse(content)
    return(
        <section className="lion-life">
            <div>
                <div className="lion-life__heading">
                    <h1>{data.headline}</h1>
                    <p>{data.paragraph}</p>
                </div>
                <div className="lion-life__instagram">
                    <p>(instagram feed placeholder)</p>
                </div>
            </div>
            <div>
                <h1>{data.exhibitionHeadline}</h1>
                <div className="exhibition__slider">
                    <div className="slides">
                        <div className="slide">
                            <img src={ExhibitionPlaceholderImage} />
                        </div>
                        <div className="slide">
                            <img src={ExhibitionPlaceholderImage} />
                        </div>
                        <div className="slide">
                            <img src={ExhibitionPlaceholderImage} />
                        </div>
                    </div>
                    <img src={arrowIconRight} />
                </div>
                <p>{data.exhibitionParagraph}</p>
                <div>
                    <div>
                        <small>{data.title1}</small>
                        <p>{data.infoWhen1}<br/>{data.infoWhere1}<br/>{data.infoMore1}</p>
                    </div>
                    <div>
                        <small>{data.title2}</small>
                        <p>{data.infoWhen2}<br/>{data.infoWhere2}<br/>{data.infoMore2}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LionLife
