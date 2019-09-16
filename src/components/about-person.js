import React from "react";

import "./about-person.scss";

function AboutPerson(props) {
    return (
        <>
        <div className={props.activeClass} aria-current={props.ariaCurrent} aria-hidden={props.ariaHidden}>
            <div className="about-person__info">
                <img
                    className="about-person__image"
                    src={props.aboutPersonImageSource}
                    alt={props.aboutPersonImageAltText}
                />
                <div className="about-person__name">
                    <h5>{props.aboutPersonName}</h5>
                    <p>{props.aboutPersonTitle}</p>
                </div>
                <p className="about-person__paragraph">
                    {props.aboutPersonParagraph}
                </p>
            </div>
        </div>
        </>
    )
}

export default AboutPerson
