import React from "react"
import "./simba-ni.scss"

import personThumbnailPlaceholderImage from "../images/person-thumbnail-placeholder.png"

const SimbaNi = ({ content }) => {
    const data = JSON.parse(content)
    return(
        <section className="simba-ni">
            <div className="simba-ni__heading">
                <h1>{data.headline}</h1>
                <h4>{data.subheadline}</h4>
            </div>
            <div className="people">
                <div className="person">
                    <div className="person__image">
                        <img src={personThumbnailPlaceholderImage} />
                    </div>
                    <div className="person__name">
                        <h6>{data.personName1}</h6>
                        <small className="small">{data.personTitle1}</small>
                    </div>
                    <div className="person__paragraph">
                        {data.personParagraph1}
                    </div>
                </div>
                <div className="person">
                    <div className="person__image">
                        <img src={personThumbnailPlaceholderImage} />
                    </div>
                    <div className="person__name">
                        <h6>{data.personName2}</h6>
                        <small className="small">{data.personTitle2}</small>
                    </div>
                    <div className="person__paragraph">
                        {data.personParagraph2}
                    </div>
                </div>
                <div className="person">
                    <div className="person__image">
                        <img src={personThumbnailPlaceholderImage} />
                    </div>
                    <div className="person__name">
                        <h6>{data.personName3}</h6>
                        <small className="small">{data.personTitle3}</small>
                    </div>
                    <div className="person__paragraph">
                        {data.personParagraph3}
                    </div>
                </div>
                <div className="person">
                    <div className="person__image">
                        <img src={personThumbnailPlaceholderImage} />
                    </div>
                    <div className="person__name">
                        <h6>{data.personName4}</h6>
                        <small className="small">{data.personTitle4}</small>
                    </div>
                    <div className="person__paragraph">
                        {data.personParagraph4}
                    </div>
                </div>
                <div className="person">
                    <div className="person__image">
                        <img src={personThumbnailPlaceholderImage} />
                    </div>
                    <div className="person__name">
                        <h6>{data.personName5}</h6>
                        <small className="small">{data.personTitle5}</small>
                    </div>
                    <div className="person__paragraph">
                        {data.personParagraph5}
                    </div>
                </div>
                <div className="person">
                    <div className="person__image">
                        <img src={personThumbnailPlaceholderImage} />
                    </div>
                    <div className="person__name">
                        <h6>{data.personName6}</h6>
                        <small className="small">{data.personTitle6}</small>
                    </div>
                    <div className="person__paragraph">
                        {data.personParagraph6}
                    </div>
                </div>
                <div className="person">
                    <div className="person__image">
                        <img src={personThumbnailPlaceholderImage} />
                    </div>
                    <div className="person__name">
                        <h6>{data.personName7}</h6>
                        <small className="small">{data.personTitle7}</small>
                    </div>
                    <div className="person__paragraph">
                        {data.personParagraph7}
                    </div>
                </div>
                <div className="person">
                    <div className="person__image">
                        <img src={personThumbnailPlaceholderImage} />
                    </div>
                    <div className="person__name">
                        <h6>{data.personName8}</h6>
                        <small className="small">{data.personTitle8}</small>
                    </div>
                    <div className="person__paragraph">
                        {data.personParagraph8}
                    </div>
                </div>
                <div className="person">
                    <div className="person__image">
                        <img src={personThumbnailPlaceholderImage} />
                    </div>
                    <div className="person__name">
                        <h6>{data.personName9}</h6>
                        <small className="small">{data.personTitle9}</small>
                    </div>
                    <div className="person__paragraph">
                        {data.personParagraph9}
                    </div>
                </div>
                <div className="person">
                    <div className="person__image">
                        <img src={personThumbnailPlaceholderImage} />
                    </div>
                    <div className="person__name">
                        <h6>{data.personName10}</h6>
                        <small className="small">{data.personTitle10}</small>
                    </div>
                    <div className="person__paragraph">
                        {data.personParagraph10}
                    </div>
                </div>
            </div>
            <div className="simba-ni__video">
                <p>(video placeholder)</p>
            </div>
            <div className="simba-ni__slider">
                <small className="small small--bold">{data.title}</small>
                <ul className="slides">
                    <li className="slide"></li>
                    <li className="slide"></li>
                    <li className="slide"></li>
                    <li className="slide"></li>
                    <li className="slide"></li>
                    <li className="slide"></li>
                    <li className="slide"></li>
                    <li className="slide"></li>
                    <li className="slide"></li>
                    <li className="slide"></li>
                </ul>
            </div>
        </section>
    )
}

export default SimbaNi
