import React from "react";

import "./video-slide.scss";

function VideoSlide(props) {
    return (
        <>
        <div className={props.className} onClick={props.clickEvent} aria-current={props.ariaCurrent}>
            <p className="video-slide__slide-number">{props.slideNumber}/5</p>
            <img
                className="video-slide__thumbnail"
                src={props.url}
                alt={props.alt}
            />
            <h5 className="video-slide__person-name">{props.name}</h5>
            <p className="video-slide__person-title">{props.title}</p>
        </div>
        </>
    )
}

export default VideoSlide
