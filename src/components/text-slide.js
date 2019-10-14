import React from "react";

import "./text-slide.scss";

function TextSlide(props) {
    return (
        <>
        <div className={'text-slide__slide'} aria-current={props.ariaCurrent} aria-hidden={props.ariaHidden}>
            <p className={'text-slide__title'}>{props.title}</p>
            <p className={'text-slide__paragraph'}>{props.paragraph}</p>
        </div>
        </>
    )
}

export default TextSlide
