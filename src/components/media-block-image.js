import React from "react"

import "./media.scss"

class MediaBlockImage extends React.Component {
    render() {
        const { imageSource, ...props } = this.props;

        return(
            <div className={props.className}>
                <img
                    src={imageSource}
                    alt={props.imageAltText}
                />
            </div>
        )
    }

    static defaultProps = {
        className: "media__image"
    }
}

export default MediaBlockImage
