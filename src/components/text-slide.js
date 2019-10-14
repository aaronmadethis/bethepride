import React from "react";
import ReactDOM from "react-dom";

function TextSlide(props) {
    return (
        <>
        <div className={props.className}>
            <p className="carousel__title">{props.title}</p>
            <p>{props.paragraph}</p>
        </div>
        </>
    )
}

export default TextSlide
