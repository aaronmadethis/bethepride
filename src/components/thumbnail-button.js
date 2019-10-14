import React from "react";
import ImageButton from "./image-button"

import "./_buttons.scss";

const ThumbnailButton = ({pic, imageAltText, ...props}) => {

    return (
        <ImageButton
            buttonClassName={props.buttonClassName}
            type={props.type}
            clickEvent={props.clickEvent}
            imageSource={pic}
            imageAltText={imageAltText}
        />
    )
}

export default ThumbnailButton
