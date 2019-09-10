import React from "react";

import "./_buttons.scss";

class ImageButton extends React.Component {
    render() {
        const { ...props } = this.props;

        return (
            <button
                className={props.buttonClassName}
                type={props.type}
                onClick={props.clickEvent}
                aria-label={props.imageAltText}
            >
                <img
                    className={props.imageClassName}
                    src={props.imageSource}
                    alt={props.imageAltText}
                />
            </button>
        )
    }

    static defaultProps = {
        type: "button"
    }
}

export default ImageButton
