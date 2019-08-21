import React from "react"
import "./unsung-heroes.scss"

import videoThumbnailPlaceholderImage from "../images/video-thumbnail-placeholder.png"
import lionImage from "../images/lion-image.jpg"

const UnsungHeroes = ({ content }) => {
    const data = JSON.parse(content)
    return(
        <section className="unsung-heroes">
            <div className="unsung-heroes__heading">
                <h1>{data.headline}<br/>{data.headlineAlt}</h1>
                <h5>{data.subheadline}</h5>
            </div>
            <div className="unsung-heroes__video">
                <p>(video placeholder)</p>
            </div>
            <div className="unsung-heroes__people">
                <div className="callout">
                    <div className="callout__person">
                        <h6>{data.personName1}</h6>
                        <small className="small">{data.personTitle1}</small>
                    </div>
                    <div className="callout__person">
                        <h6>{data.personName2}</h6>
                        <small className="small">{data.personTitle2}</small>
                    </div>
                    <div className="callout__person">
                        <h6>{data.personName3}</h6>
                        <small className="small">{data.personTitle3}</small>
                    </div>
                    <div className="callout__person">
                        <h6>{data.personName4}</h6>
                        <small className="small">{data.personTitle4}</small>
                    </div>
                    <div className="callout__person">
                        <h6>{data.personName5}</h6>
                        <small className="small">{data.personTitle5}</small>
                    </div>
                </div>
                <div className="slides">
                    <div className="slide">
                        <small className="small small--tiny">1/5</small>
                        <img src={videoThumbnailPlaceholderImage} />
                        <small className="small small--headline">{data.personName1}</small>
                        <small className="small small--tiny">{data.personTitle1}</small>
                    </div>
                    <div className="slide">
                        <small className="small small--tiny">2/5</small>
                        <img src={videoThumbnailPlaceholderImage} />
                        <small className="small small--headline">{data.personName2}</small>
                        <small className="small small--tiny">{data.personTitle2}</small>
                    </div>
                    <div className="slide">
                        <small className="small small--tiny">3/5</small>
                        <img src={videoThumbnailPlaceholderImage} />
                        <small className="small small--headline">{data.personName3}</small>
                        <small className="small small--tiny">{data.personTitle3}</small>
                    </div>
                    <div className="slide">
                        <small className="small small--tiny">4/5</small>
                        <img src={videoThumbnailPlaceholderImage} />
                        <small className="small small--headline">{data.personName4}</small>
                        <small className="small small--tiny">{data.personTitle4}</small>
                    </div>
                    <div className="slide">
                        <small className="small small--tiny">5/5</small>
                        <img src={videoThumbnailPlaceholderImage} />
                        <small className="small small--headline">{data.personName5}</small>
                        <small className="small small--tiny">{data.personTitle5}</small>
                    </div>
                </div>
                <div className="unsung-heroes__paragraph">
                    <img src={lionImage} />
                    <p>{data.paragraph}</p>
                </div>
            </div>
        </section>
    )
}

export default UnsungHeroes
