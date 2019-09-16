import React from "react";

import "./image-slide.scss";

const ImageSlide = ({pic, imageAltText, caption, ...props}) => {

    return (
        <div className={'image-slide__slide'} aria-current={props.ariaCurrent}>
            <figure>
                <img
                    className={'image-slide__image'}
                    src={pic}
                    alt={imageAltText}
                />
                <figcaption className={'image-slide__caption'}>{caption}</figcaption>
            </figure>
        </div>
    )
}

export default ImageSlide
